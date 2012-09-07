var token = null;
var name;= null
var avatarUrl= null;
var friends= null;
$.get("http://whispering-cove-9010.herokuapp.com/info", function(data){
console.log("Data Loaded: " + data);
 token = data.me.access_token;
 name = data.me.display_name;
 avatarUrl = data.me.avatar_url;
 friends = data.friends;
//postit();
});

function postit(img)
{
console.log("here");
$.post("whispering-cove-9010.herokuapp.com/urinate", { access_token: token, Quantity: 100ml, displayImage = img } );
};

