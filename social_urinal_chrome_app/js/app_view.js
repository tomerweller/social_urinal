function AppView(){
  this.init();
};

_.extend(AppView.prototype, Proxyable, {
  
  init : function(){
  	pubsub.on('log', this.proxy(this.log));
  	pubsub.on('startSession', this.proxy(this.startSession));
    pubsub.on('gotSessionData', this.proxy(this.gotSessionData));
  	pubsub.on('endSession', this.proxy(this.endSession));
  },

  log : function(msg){
  	$("#buffer").append(msg + '<br/>');
  	console.log(msg);
  },

  startSession : function(){
  	//Eldad: face is in front of camera. requesting info from server
  },

  gotSessionData : function(data){
    console.log(data);
    //Eldad, got session data
  },

  endSession : function(){
  	//Eldad, end session
  }


});