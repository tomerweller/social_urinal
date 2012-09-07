
$.get("http://whispering-cove-9010.herokuapp.com/info", function(data){
console.log("Data Loaded: " + data);
var token = data.me.access_token;
var name = data.me.display_name;
var avatarUrl = data.me.avatar_url;
var friends = data.friends;
//postit();
});

function postit(img)
{
console.log("here");
$.post("whispering-cove-9010.herokuapp.com/urinate", { access_token: token, Quantity: 100ml, displayImage = img } );
};

