const GOOD_PORT_PREFIX = '/dev/cu.usbmodem'
const serial = chrome.serial;
const timeout = 100;

function SerialConnection(){
  this.init();
};

_.extend(SerialConnection.prototype, Proxyable, {
  
  connectionId : -1, 
  selectedPort : "",
  outValue : 10,

  init : function(){
    serial.getPorts(this.proxy(function(ports){
      _.each(ports, this.proxy(function(port, i){
        if (port.indexOf(GOOD_PORT_PREFIX) == 0)
          this.selectedPort = port; 
      }));
      pubsub.trigger("log", "selected port : " + this.selectedPort);
      serial.open(this.selectedPort, {bitrate : 57600}, 
        this.proxy(this.onOpen));
    }));
  },

  onOpen : function(connectionInfo){
    this.connectionId = connectionInfo.connectionId;
    pubsub.trigger('log', 'connected with connection id : ' + this.connectionId);  
    pubsub.trigger('connected');
    serial.flush(this.connectionId, this.proxy(this.onFlush));
  },
  
  onFlush : function(result){
    if (result){
      pubsub.trigger('log','flush finished. start reading');
      this.onLoop();
    } else {
      pubsub.trigger('log','something went wrong with the flush');
    }
  },
  
  onLoop : function(){
    serial.read(this.connectionId, 1, this.proxy(this.onRead));
    serial.write(this.connectionId, 
      this.byteToBufferedArray(this.outValue), function(){});
    setTimeout(this.proxy(this.onLoop), timeout); 
  },

  onWrite : function(){
  },

  onRead : function(readInfo){
    var uint8View = new Uint8Array(readInfo.data);
    var value = uint8View[0];
    pubsub.trigger('log', 'bytesRead:' + readInfo.bytesRead + '. data: ' + value);
    pubsub.trigger('weightChange', value);
  },

  byteToBufferedArray : function(value){
    var buffer = new ArrayBuffer(1);
    var uint8View = new Uint8Array(buffer);
    uint8View[0] = value;
    return buffer;
  },

  bufferedArrayToByte : function(bufferedArray){
    return new Uint8Array(bufferedArray)[0];
  },
  
});





