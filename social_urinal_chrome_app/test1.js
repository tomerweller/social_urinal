var xhr = new XMLHttpRequest();
//xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.
xhr.open("post","https://lambda-face-recognition.p.mashape.com/album", true);
xhr.send("album=test");
console.log(xhr.responseText);