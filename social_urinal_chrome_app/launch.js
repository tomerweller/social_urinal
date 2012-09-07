chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('face.html', {
    width: 640,
    height: 480
  });
});
