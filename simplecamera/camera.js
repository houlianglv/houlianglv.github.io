$(function() {
  // Grab elements, create settings, etc.
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    video = document.getElementById("video"),
    constraints = {
      "video": true
    },
    errorCallback = function(error) {
      console.log("Video capture error: ", error.code);
    };

  // Put video listeners into place
  if (navigator.getUserMedia) { // Standard
    navigator.getUserMedia(constraints, function(stream) {
      video.src = stream;
      video.play();
    }, errorCallback);
  } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
    navigator.webkitGetUserMedia(constraints, function(stream) {
      video.src = window.URL.createObjectURL(stream);
      video.play();
    }, errorCallback);
  } else if (navigator.mozGetUserMedia) { // Firefox-prefixed
    navigator.mozGetUserMedia(constraints, function(stream) {
      video.src = window.URL.createObjectURL(stream);
      video.play();
    }, errorCallback);
  }
  // Trigger photo take
  $("#snap").click(function(event) {
    context.drawImage(video, 0, 0, 640, 480);
  });
});
