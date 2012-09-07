function AppView(){
  this.init();
};

_.extend(AppView.prototype, Proxyable, {
  
  init : function(){
  	pubsub.on('log', this.proxy(this.log));
  	pubsub.on('startSession', this.proxy(this.startSession));
  	pubsub.on('endSession', this.proxy(this.endSession));
  },

  log : function(msg){
  	$("#buffer").append(msg + '<br/>');
  	console.log(msg);
  },

  startSession : function(){
  	//Eldad: code to start session
  },

  endSession : function(){
  	//Eldad: code to end session
  }

});