var path 
var pathImage 
var jax
var movement
var wall1
var wall2
var edges
function preload(){
  //pre-load images
  pathImage = loadImage("path.png")
movement =loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,0,400,400)
  jax = createSprite(200,300,10,10)
  jax.addAnimation("running", movement)
  wall1 = createSprite(390,200,100,400)
  wall1.visible = false
wall2 = createSprite(20,200,100,400)
wall2.visible = false
edges = createEdgeSprites()
}

function draw() {
  background(0);

  path.addImage(pathImage)
  path.y = path.y -2
    if(path.y<100){
      path.y = 200
    }
  jax.x = mouseX
  jax.bounceOff(wall1)
  jax.bounceOff(wall2)
  jax.bounceOff(edges)
  
  jax.scale = 0.05
  drawSprites()
}
