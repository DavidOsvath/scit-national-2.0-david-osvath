let spaceshipChoices = ["blue-spaceship.png", "green-spaceship.png", "red-spaceship.png"]; //SETTING UP IMG-SRC INSTANTLY IN THE ARRAY
let controlledSpaceship;

class SpaceShip {
    constructor(){
        this.runningEngine = false;
        this.x = 0;
        this.y = 0;
        this.generateHtmlRef();
        this.setStartEngine();   
        this.moveSpaceShip(300, 300)
        
    }
//RENDERING IMAGE
    generateHtmlRef() {
        this.ref = document.createElement("img");
        this.ref.src = spaceshipChoices[Math.floor(Math.random() * 3)];
        this.ref.classList.add("spaceship");
        document.body.appendChild(this.ref);
    }

    setStartEngine(){
        this.ref.addEventListener("click", () => {
            this.startEngine();
            controlledSpaceship = this;
        });
    }


    startEngine(){
        if (!this.runningEngine) {
            this.runningEngine = true;
            this.ref.classList.add("spaceship--started");
          }
    }

    
//MOVING FUNCTIONALITY
    moveSpaceShip(x, y) {
        this.x = x;
        this.y = y;
        this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
      

    }

    moveUp() {
        this.moveSpaceShip(this.x, this.y - 25);
      }
    
    moveDown() {
        this.moveSpaceShip(this.x, this.y + 25);
      }

    moveRight(){
        this.moveSpaceShip(this.x + 25, this.y);
    }

    moveLeft(){
        this.moveSpaceShip(this.x - 25, this.y);
    }

   
}

//SETTING UP USER INTERACTION
let keyUpPress = false;
let keyDownPress = false;
let keyLeftPress = false;
let keyRightPress = false;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    keyUpPress = true;
  }

  if (event.key === "ArrowDown") {
    keyDownPress = true;
  }

  if (event.key === "ArrowLeft") {
    keyLeftPress = true;
  }

  if (event.key === "ArrowRight") {
    keyRightPress = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowUp") {
    keyUpPress = false;
  }

  if (event.key === "ArrowDown") {
    keyDownPress = false;
  }

  if (event.key === "ArrowLeft") {
    keyLeftPress = false;
  }

  if (event.key === "ArrowRight") {
    keyRightPress = false;
  }
});





//CREATING THE SPACESHIPS
document.getElementById("generate-random-spaceship").addEventListener("click", () => {
    const newSpaceship = new SpaceShip();
    controlledSpaceship = newSpaceship;
});


// Game Loop
setInterval(() => {
    if (keyUpPress) {controlledSpaceship.moveUp();}
    if (keyDownPress) {controlledSpaceship.moveDown();}
    if (keyLeftPress) {controlledSpaceship.moveLeft();}
    if (keyRightPress) {controlledSpaceship.moveRight();}
    
  }, 50);
