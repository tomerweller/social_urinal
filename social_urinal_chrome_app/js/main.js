var pubsub = {}
_.extend(pubsub, Backbone.Events);

var serialConnection = new SerialConnection();
var faceRecognitionConnector = new FaceRecognitionConnector();
var serverConnector = new ServerConnector();
var appView = new AppView();