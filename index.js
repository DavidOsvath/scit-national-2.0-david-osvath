console.log("JavaScript - Dogs App");


if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  window.location = "\login.html";
});
 
const containerBreeds = document.getElementById("breeds");
const imageBox = document.getElementById("breed-image");
const pageNumber = document.getElementById("page-number");
let currentBreed = "";
let count = 0;
if(localStorage.pageNumber) {
  count = localStorage.pageNumber - 1;
  pageNumber.innerText = `${localStorage.pageNumber}`;
}
if(localStorage.dogName) {
  currentBreed = localStorage.dogName;
  fetch(`https://dog.ceo/api/breed/${currentBreed}/images`).then(handleJson).then(handleImage);}   //Setting page to last visited breed/pageNumber

const forwardButton = document.getElementById("forward");
const backwardButton = document.getElementById("backward");

let statusChecker = fetch(`https://dog.ceo/api/breed/${currentBreed}/images`).then(handleJson).then(checkStatus);   // checking status of nextPage, to prevent from getting error
                                                                                                                    // in case we ran out of pictures to show

backwardButton.addEventListener("click", () => {
  if (count>0) {
    statusChecker = true;
    count--;
    localStorage.pageNumber = `${count + 1}`;
    document.getElementById("page-number").innerText = `${count + 1}`
    fetch(`https://dog.ceo/api/breed/${currentBreed}/images`).then(handleJson).then(handleImage);
  }
});

forwardButton.addEventListener("click", () => { 
  fetch(`https://dog.ceo/api/breed/${currentBreed}/images`).then(handleJson).then(checkStatus);
  if(statusChecker){
  count++;
  localStorage.pageNumber = `${count + 1}`;
  document.getElementById("page-number").innerText = `${count + 1}`
  fetch(`https://dog.ceo/api/breed/${currentBreed}/images`).then(handleJson).then(handleImage);
  } 
});                                                                                                               // backward $ forward button functionality

fetch("https://dog.ceo/api/breeds/list/all").then(handleJson).then(useJson);                                      // render page on opening the HTML 

function handleJson(json){
  return json.json();
}

function useJson(breeds) {
  console.log(Object.keys(breeds.message));
   for ( const breed of Object.keys(breeds.message)) {
     
     const breedType = document.createElement("p");
     breedType.classList.add("dogs");
     breedType.style.width = "50px";
     if(breed === currentBreed) {breedType.style.textDecoration = "underline";}

    //  breedType.addEventListener("mouseover", () => {
    //    breedType.style.textDecoration = "underline";
    //  });

    //  breedType.addEventListener("mouseout", () => {
    //   breedType.style.textDecoration = "";
    // });
    breedType.style.cursor = "pointer";
    breedType.addEventListener("click", () => {
      const dogs = document.getElementsByClassName("dogs");
      for (const item of dogs){ item.style.textDecoration = "";}

          localStorage.dogName = breed;         
          document.getElementById("page-number").innerText = "1";
          localStorage.pageNumber = "1";
          count = 0;
          breedType.style.textDecoration = "underline";
          currentBreed = breed;
           fetch(`https://dog.ceo/api/breed/${currentBreed}/images`).then(handleJson).then(handleImage);
           
    });

     breedType.innerText = breed;
     containerBreeds.appendChild(breedType);
  }
}                                                                                                               // Creating the html components to render the page

function handleImage(json) {
  imageBox.src = json.message[count];
}

function checkStatus(json) {
  if(json.message[count+1]) {statusChecker = true} else
  {
  statusChecker = false;
  }
}                                                                   // setting status to see if we can click on the forward button or not
                                                                    // in case we leave the page, while being at the end of the picture album

                                                                    //CLEAN START


