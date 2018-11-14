function createCircle(cx, cy, radius) {
  let div = document.getElementById("circle");
  div.style.width = radius + "px";
  div.style.height = radius + "px";
  div.style.left = cx + "px";
  div.style.top = cy + "px";
  div.style.transitionProperty = "width, height;";
  div.style.transitionDuration = "1s";
}
function growCircle(radius) {
  let div = document.getElementById("circle");
  div.style.width = radius * 2 + "px";
  div.style.height = radius * 2 + "px";
}

createCircle(60, 25, 30);
setTimeout(function() {
  growCircle(35);
});
setTimeout(function() {
  // growCircle(40);
});
