// Coded by Eddy Ahlqvist - 2020 
// Inspiration from The Nature of code by Daniel Shiffman

let walkers = [];
let dir;

function setup() {
  createCanvas(400, 400);
  background(0);
  for (let i = 0; i < 10; i++) {
    w = new Walker(width / 2, height / 2, 15, 1);
    walkers.push(w);
  }
}

function draw() {
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].limit();
    walkers[i].move();
    walkers[i].show();
  }
}