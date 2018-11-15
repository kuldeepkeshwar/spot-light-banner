const config = {
  gamma: 40,
  trigger: 0.7,
  width: 500,
  height: 50,
  circle: { position: { x: 60, y: 25 }, radius: 15 },
  texts: {
    5: "TRY NOW",
    20: "GOOD START",
    23: "TRY NOW",
    35: "GREAT GOING",
    38: "TRY NOW",
    50: "ALMOST THERE",
    53: "TRY NOW",
    70: "YOU DID IT"
  },
  progress: function(precent) {
    console.log({ precent });
  }
};
const start = window.spotLight(config);
start();
