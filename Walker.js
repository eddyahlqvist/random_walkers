// Coded by Eddy Ahlqvist - 2020 
// Inspiration from The Nature of code by Daniel Shiffman

class Walker {
  constructor(_x, _y, _d, _s) {
    this.x = _x;
    this.y = _y;
    this.d = _d;
    this.s = _s;
  }

  move() {
    dir = floor(random(4));

    if (dir == 0) {
      this.x += this.s;
    } else if (dir == 1) {
      this.x -= this.s;
    } else if (dir == 2) {
      this.y += this.s;
    } else if (dir == 3) {
      this.y -= this.s;
    }
  }

  show() {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    fill(r, g, b, 50);
    noStroke();
    ellipse(this.x, this.y, this.d);
  }

  limit() {
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x > width) {
      this.x = width;
    } else if (this.y < 0) {
      this.y = 0;
    } else if (this.y > height) {
      this.y = height;
    }
  }

}