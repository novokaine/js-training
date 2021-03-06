var canvas = document.getElementById('tutorial');

if (canvas.getContext) {
  var draw = function(x, y, inc){
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 150, 150); // clear canvas
    // drawing a circle
    // fill with a blue color, 50% opacity
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.beginPath();
    // an arc starting at x/y position, 15px radius, start at 0, end at PI*2 (end of the circle)
    ctx.arc(x, y, 15, 0, Math.PI * 2); // Outer circle
    ctx.fill();
    if (x > 150 && y > 150 || x < 0 && y < 0) {
      inc *= -1;
    }
    window.requestAnimationFrame(() => draw(x+inc, y+inc, inc));
  }
window.requestAnimationFrame(() => draw(0, 0, 1));
} else {
  // canvas-unsupported code here
}