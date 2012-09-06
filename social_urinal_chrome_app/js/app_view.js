function AppView(){
  this.init();
};

_.extend(AppView.prototype, Proxyable, {
  
  init : function(){
  	pubsub.on('log', this.proxy(this.log));
  },

  log : function(msg){
  	$("#buffer").append(msg + '<br/>');
  }

});