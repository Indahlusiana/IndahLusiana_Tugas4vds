class Mover { 
  constructor(x,y){ 
    this.location = createVector(x, y); 
    this.velocity = createVector(random(-2,2), random(-2,2)) 
    this.acceleration = createVector(0,0); 
  }
  
  
  display(){ 
    stroke('darkred'); 
    fill('black'); 
    let r = random(25,25);
    rect(this.location.x, this.location.y, 30, 30);
    line(this.location.x + 10, this.location.y + 20, this.location.x + 20, this.location.y + 20);
   
  } 
  
  update(){ 
    var mouse = createVector(mouseX, mouseY); 
    var dir = mouse.sub(this.location); 
    var topSpeed = 10
    dir.normalize(); 
    dir.mult(0.5); 
    this.velocity.add(this.acceleration); 
    this.velocity.add(dir); 
    this.velocity.limit(topSpeed) 
    this.location.add(this.velocity);
  } 
  
   cekUjung(){ 
    if ( this.location.x > windowWidth ) { 
      this.location.x = windowWidth; 
    } 
    else if (this.location.x < 0){ 
      this.location.x = windowWidth; 
    } 
   
    if ( this.location.y > windowHeight ) { 
      this.location.y = 0; 
    } 
    else if (this.location.y < 0){ 
      this.location.y = windowHeight; 
    } 
  } 
}

let movers = [];
let mouse;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i=0; i<10;i++){
    movers[i] = new Mover(random(windowWidth), random(windowHeight));   
  }
 
}

function draw() {
  background(220);
  fill('white')
      rect(mouseX-10, mouseY-20, 60,60)
  strokeWeight(4)
  point(mouseX+10, mouseY+3);
  point(mouseX+29, mouseY+3);
    for (let i=0; i<10; i++){
      movers[i].cekUjung(); 
      movers[i].display(); 
      movers[i].update();    
  }
  
  
}