document.addEventListener("DOMContentLoaded", function() {
  fetch('/colors.json')
  .then(function(response) {
    return response.json();
  }).then(function(colors) {
    var color = colors[Math.floor(Math.random() * colors.length)];
    document.bgColor = color;
  });
});