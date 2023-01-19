// Importar los módulos necesarios de matter.min.js


const Engine = Matter.Engine; //crear el mundo físico y agregarle objetos.
const World = Matter.World; //permiten controlar el comportamiento de diferentes motores.
const Bodies = Matter.Bodies; //crear cuerpos rígidos con cuerpos comunes (rectángulos, circulos...)



function setup() {

  //crear un mundo artificial para poder agregar distintos cuerpos
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   

  // crear una variable para que el cuerpo sea estático
 
  var suelo_options = {
    isStatic: true
  }

  // creamos un objeto circular y lo agregamos al mundo
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
 // crear un objeto rectanguar y lo agregamos al mundo
suelo= Bodies.rectangle(200,350,400,40)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

 
  ellipse(ball.position.x,ball.position.y,20);

  
   //dibujar el cuerpo rectángular a través de una función
  
rect(suelo.position.x, suelo.position.y,400,40)
 


  
  
}

