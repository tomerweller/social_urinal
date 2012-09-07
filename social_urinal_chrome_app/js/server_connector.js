function ServerConnector(){
  this.init();
};

_.extend(ServerConnector.prototype, Proxyable, {

	accessToken : "",

	init : function(){
		pubsub.on("startSession", this.proxy(this.getSessionData));	
		pubsub.on("endSession", this.proxy(this.postSessionData));
	},

	getSessionData : function(){
		$.get("http://whispering-cove-9010.herokuapp.com/info", function(data){
			pubsub.trigger('log','got session data');
			pubsub.trigger('gotSessionData', data);
			this.access_token = data.me.access_token;			
		//postit();
		});
	},

	postSessionData : function(endSessionData){
		pubsub.trigger('log', 'posting session data');
		$.post("http://whispering-cove-9010.herokuapp.com/urinate", {
			access_token: this.accessToken, 
			quantity: "100", 
			displayImage : endSessionData.displayImage 
		});
	}
});