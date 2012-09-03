var pubsub = {}
_.extend(pubsub, Backbone.Events);

//log handling
function log(msg){
  var buffer = document.querySelector('#buffer');
  console.log(msg);
  buffer.innerHTML += msg + '<br/>';
}
pubsub.on('log', log);

var ser = new SerialConnection();