console.log("OOP Game");


class AudioManager {
  constructor() {
    
    this.gameOver = new Audio("gameOver.mp3");
    this.themeSong = new Audio("gameTheme.mp3");
    this.themeSong.loop = true;
    this.hit = new Audio("hit.mp3");

  }

    
}

let audio = new AudioManager();

class GameObject {                                            //BASIC GAME OBJECT
  constructor() {
    this.width = 50;
    this.height = 50;                                       
    this.x = 0;
    this.y = 0;
    this.generateRef();
  }

  generateRef() {
    this.ref = document.createElement("div");
    this.ref.style.width = `${this.width}px`;
    this.ref.style.height = `${this.height}px`;
    this.ref.style.position = "absolute";
    this.ref.style.top = 0;
    this.ref.style.left = 0;

    document.getElementById("game-scene").appendChild(this.ref);
  }

  move(x, y) {
    this.x = x;
    this.y = y;

    this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }

  removeRef() {
    this.ref.remove();
  }
}


class Player extends GameObject {                              //PLAYER
  constructor() {
    super();
    this.ref.style.background = "blue";
    this.move(50, 225);
  }

  moveUp() {

    if (this.y - 5 >= 0) this.move(this.x, this.y - 5);
  }

  moveDown() {
    if (this.y + 5 <= 500 - this.height) this.move(this.x, this.y + 5);
  }
}


class Obstacle extends GameObject {
  constructor() {
    super();
    this.ref.style.background = "red";                              //BASIC OBSTACLE
    this.move(1060, 25);
   }

  moveLeft(param) {
    this.move(this.x - param, this.y);
  }
}


class ObstacleFactory {
  constructor() {
    this.obstacles = [];
  }

  createObstacle() {
    const obstacle = new Obstacle();
    obstacle.move(1060, Math.floor(Math.random() * 450));
    this.obstacles.push(obstacle);                                            //OBSTACLE CREATION CLASS
  }

  destroyObstacles() {
    this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.x < -50) {
        obstacle.removeRef();
        return false;
      }

      return true;
    });
  }

  moveObstacles() {
    for (const obstacle of this.obstacles) {
      obstacle.moveLeft(param);
    }
  }
}


class HealthManager {
  constructor(){
    this.generateRef();                                                   // HEALTH BAR OF PLAYER
    this.lives = 3;
  }

  generateRef(){
    const healthBar = document.createElement("div");
    this.lifeOne = document.createElement("img");
    this.lifeTwo = document.createElement("img");
    this.lifeThree = document.createElement("img");
    this.ref = healthBar;
    this.lifeOne.style.height = "50px";
    this.lifeTwo.style.height = "50px";
    this.lifeThree.style.height = "50px";
    this.lifeOne.src = "heart.png";
    this.lifeTwo.src = "heart.png";
    this.lifeThree.src = "heart.png";
    this.lifeOne.classList.add("heart");
    this.lifeTwo.classList.add("heart");
    this.lifeThree.classList.add("heart");
    healthBar.appendChild(this.lifeOne);
    healthBar.appendChild(this.lifeTwo);
    healthBar.appendChild(this.lifeThree);
    healthBar.style.position = "absolute";
    healthBar.style.top = "15%";
    const gameScene = document.getElementById("game-scene")
    document.body.insertBefore(healthBar, gameScene);    
  }

  loseHealth(){
    document.getElementById("game-scene").classList.add("damaged");
    setTimeout(() => {document.getElementById("game-scene").classList.remove("damaged");},80);
    document.getElementById("game-scene").classList.add("shaky");
    setTimeout(() => {document.getElementById("game-scene").classList.remove("shaky");},300);

    if(this.lives === 1) {this.lifeOne.remove();}
    if(this.lives === 2) {this.lifeTwo.remove();this.lives = 1;}
    if(this.lives === 3) {this.lifeThree.remove();this.lives = 2; }
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    keyUpPress = true;
  }

  if (event.key === "ArrowDown") {
    keyDownPress = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowUp") {
    keyUpPress = false;
  }

  if (event.key === "ArrowDown") {
    keyDownPress = false;
  }
});

function collisionDetection(player, obstacles) {
  for (const obstacle of obstacles) {
    if (((player.x + player.width) > obstacle.x) && 
      (player.x < (obstacle.x + obstacle.width)) && 
      ((obstacle.y + obstacle.height) > player.y) && 
      (obstacle.y < (player.y + player.height)))       {      
        
        
        delete obstacle.width;   
        delete obstacle.height; 
        obstacle.removeRef();   
        return true;  
    }       
  }
  return false;
}


const player = new Player();
const obstacleFactory = new ObstacleFactory();
const health = new HealthManager();
let points = document.querySelector(".points");
let currentObstacle = {};                                         //DECLARED ALL VARIABLES WE WILL USE
let count = 0;
let keyUpPress = false;
let keyDownPress = false;
let stageRate = 15;
let firstWarning = true;
let secondWarning = false;
let thirdWarning = false;
let param = 5;


document.getElementById("start").addEventListener("click", () => {
  audio.themeSong.play();
  document.getElementById("start").remove();
  let gameLoop = setInterval(() => {
  
    if (firstWarning){
    setTimeout(()=>{    
      const warning = document.createElement("p");
      warning.classList.add("warningMessage");
      warning.innerText = "Is it just me or did the blocks speed up?";
      document.body.appendChild(warning);
      stageRate = 10;
      param = 10;
      secondWarning = true;
    },20000); 
    firstWarning = false;}
   
    
    if(secondWarning){
      const warning = document.querySelector(".warningMessage");
    setTimeout(()=>{
      warning.innerText = "Okay, okay. Let's stop playing now, we've got to go back to work :)";
      stageRate = 7;
      param = 15;
      thirdWarning = true;
    },20000); 
    secondWarning = false;}
  

    if(thirdWarning){
      const warning = document.querySelector(".warningMessage");
    setTimeout(()=>{
      warning.innerText = "HOW ARE YOU STILL ALIVE";
      warning.style.size = "100px";
      stageRate = 3;
      param = 20;
    },20000);} 
  
    if (keyUpPress) player.moveUp();
    if (keyDownPress) player.moveDown();
  
    if (count % stageRate === 0) obstacleFactory.createObstacle();
   
    obstacleFactory.moveObstacles();
  
    if (collisionDetection(player, obstacleFactory.obstacles)) {
      if(health.lives > 1) {health.loseHealth(); audio.hit.play(); }
      else {
        audio.hit.play();
        health.loseHealth();
        audio.themeSong.pause();
        audio.gameOver.play();
        setTimeout(() =>{
        clearInterval(gameLoop);
        alert(`GAME OVER   ---  YOU REACHED ${count} POINTS`);
        location.reload();}, 110);       //ADDED TIMEOUT FOR GAME END SO THE LAST HEART ICON CAN DISSAPEAR FIRST
      }
    }
    obstacleFactory.destroyObstacles();
  
    count++;
    points.innerHTML = count;                // ADDED POINTS FOR FUN
  }, 25); 
});







