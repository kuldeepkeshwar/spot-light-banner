function spotLight(options) {
  const maxRadius = options.width - options.circle.position.x;
  const minGamma = (options.gamma * options.circle.radius) / maxRadius;
  const breakpoint = options.gamma * options.trigger;
  const progress = options.progress || noop;
  let running = true;
  function noop() {}
  function setCircle(cx, cy, radius) {
    let circle = document.getElementById("circle");
    let banner = document.getElementById("banner");
    requestAnimationFrame(function() {
      circle.style.width = radius * 2 + "px";
      circle.style.height = radius * 2 + "px";
      circle.style.left = cx + "px";
      circle.style.top = cy + "px";
      banner.style.left = -1 * (cx - radius) + "px";
      setTimeout(function() {
        circle.style.transitionProperty = "width, height;";
        circle.style.transitionDuration = "1s";
        banner.style.transitionProperty = "left;";
        banner.style.transitionDuration = "1s";
      });
    });
  }
  function growCircle(radius) {
    let circle = document.getElementById("circle");
    let banner = document.getElementById("banner");
    requestAnimationFrame(function() {
      circle.style.width = radius * 2 + "px";
      circle.style.height = radius * 2 + "px";
      banner.style.left = -1 * (circle.offsetLeft - radius) + "px";
    });
  }
  function revealBanner() {
    const circle = document.getElementById("circle");
    const banner = document.getElementById("banner");
    const textContainer = document.getElementById("text-container");
    requestAnimationFrame(function() {
      circle.style.transitionDuration = "2s";
      banner.style.transitionDuration = "2s";
      textContainer.style.transition = "color 2s linear";
      textContainer.style.color = "#0055ff";
      growCircle(maxRadius);
    });
    window.removeEventListener("deviceorientation", handler);
  }

  function handler(event) {
    const gamma = event.gamma;
    const ratio = gamma / options.gamma;
    const percentage = ratio * 100;
    if (running) {
      const r = ratio * maxRadius;
      if (minGamma <= gamma && gamma <= breakpoint) {
        growCircle(r);
        progress(percentage);
      } else if (gamma < minGamma) {
        growCircle(options.circle.radius);
        progress(percentage);
      } else if (gamma > breakpoint) {
        revealBanner();
        running = false;
        progress(100);
      }
      updateText(
        options.texts[
          closest(percentage, Object.keys(options.texts).map(Number))
        ]
      );
    }
  }
  function updateText(text) {
    document.getElementById("text").innerHTML = text;
  }
  function closest(num, arr) {
    var curr = arr[0];
    var diff = Math.abs(num - curr);
    for (var val = 0; val < arr.length; val++) {
      var newdiff = Math.abs(num - arr[val]);
      if (newdiff < diff) {
        diff = newdiff;
        curr = arr[val];
      }
    }
    return curr;
  }
  function init() {
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handler, false);
    }
    const container = document.getElementById("container");
    container.style.width = options.width + "px";
    container.style.height = options.height + "px";
    setCircle(
      options.circle.position.x,
      options.circle.position.y,
      options.circle.radius
    );
  }
  return init;
}
