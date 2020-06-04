const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,800,30,ground_options);
    World.add(world,ground);
    
    var opt_ball = {
        restitution = 3
    }
    ball = Bodies.circle(200,200,5,opt_ball);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1600,30);
    ellipse(ball.position.x,ball.position.y,5,5);
}