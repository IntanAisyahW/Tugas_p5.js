let angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  
  // Mengatur pencahayaan
  ambientLight(50);
  directionalLight(255, 255, 255, 0, 0, -1);
  
  // Rotasi objek
  rotateX(angle);
  rotateY(angle * 0.6);
  rotateZ(angle * 0.3);
  
  // Warna ungu
  fill(147, 112, 219);
  stroke(75, 0, 130);
  strokeWeight(1);
  
  // Membuat prisma segi enam
  drawHexagonalPrism(0, 0, 0, 80);
  
  angle += 0.02;
}

function drawHexagonalPrism(x, y, z, size) {
  let h = size * 0.8; // tinggi prisma
  
  // Menggambar sisi atas dan bawah (hexagon)
  for (let i = -1; i <= 1; i += 2) {
    beginShape();
    for (let angle = 0; angle < TWO_PI; angle += TWO_PI / 6) {
      let xPos = x + cos(angle) * size;
      let yPos = y + sin(angle) * size;
      let zPos = z + (h/2 * i);
      vertex(xPos, yPos, zPos);
    }
    endShape(CLOSE);
  }
  
  // Menggambar sisi-sisi samping
  for (let angle = 0; angle < TWO_PI; angle += TWO_PI / 6) {
    let x1 = x + cos(angle) * size;
    let y1 = y + sin(angle) * size;
    let x2 = x + cos(angle + TWO_PI / 6) * size;
    let y2 = y + sin(angle + TWO_PI / 6) * size;
    
    beginShape();
    vertex(x1, y1, z + h/2);
    vertex(x2, y2, z + h/2);
    vertex(x2, y2, z - h/2);
    vertex(x1, y1, z - h/2);
    endShape(CLOSE);
  }
}