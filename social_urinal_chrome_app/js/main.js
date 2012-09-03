var pubsub = {}
_.extend(pubsub, Backbone.Events);

//log handling
function log(msg){
  var buffer = document.querySelector('#buffer');
  console.log(msg);
  buffer.innerHTML += msg + '<br/>';
}
pubsub.on('log', log);

var serialConnection = new SerialConnection();
var faceRecognitionConnector = new FaceRecognitionConnector();
var serverConnector = new ServerConnector();
var appView = new AppView();