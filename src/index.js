const config = {
  gamma: 40,
  trigger: 0.7,
  width: 500,
  height: 50,
  circle: { position: { x: 60, y: 25 }, radius: 15 },
  texts: {
    "2.6": "TRY NOW",
    7: "GOOD START",
    9: "TRY NOW",
    15: "GREAT GOING",
    17: "TRY NOW",
    21: "ALMOST THERE",
    23: "TRY NOW",
    "28.5": "YOU DID IT"
  }
};
const start = window.spotLight(config);
start();
