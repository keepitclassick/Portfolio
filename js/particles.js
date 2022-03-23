const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let particleArray = [];

//handle mouse
let mouse = {
  x: null,
  y: null,
  radius: 15,
};

window.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
  // console.log(mouse.x, mouse.y);
});

ctx.font = "15px Verdana";
ctx.fillText("Full Stack Developer", canvas.height / 2, canvas.width / 2);

const textCoords = ctx.getImageData(0, 0, 500, 500);

class Particle {
  constructor(x, y) {
    this.x = x + 100;
    this.y = y;
    this.size = 2;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random(40) * 5 + 1;
  }
  draw() {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let maxDistance = mouse.radius;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;

    if (distance < mouse.radius) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 10;
      }

      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  }
}

function init() {
  let y2 = textCoords.height;
  let x2 = textCoords.width;

  for (let y = 0; y < y2; y++) {
    for (let x = 0; x < x2; x++) {
      if (textCoords.data[y * 4 * textCoords.width + x * 4 + 3] > 128) {
        let positionX = x;
        let positionY = y;
        particleArray.push(new Particle(positionX * 5, positionY * 5));
      }
    }
  }
  //particleArray.push(new Particle(50, 50));
}
init();
console.log(particleArray);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let particle of particleArray) {
    particle.draw();
    particle.update();
  }
  requestAnimationFrame(animate);
}
animate();
