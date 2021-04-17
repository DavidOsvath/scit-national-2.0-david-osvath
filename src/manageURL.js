

const containerBreeds = document.getElementById("breeds");
const imageBox = document.getElementById("breed-image");

 export let currentBreed = "";

 export let count = 0;

 export function increaseCount(){
   count++;
 }

 export function decreaseCount(){
  count--;
}

export function statusToTrue() {
  statusChecker = true;
}
export function setPageNumber() {
  count = localStorage.pageNumber - 1;
}



export const pageNumber = document.getElementById("page-number");

export let statusChecker = HANDLE_AND_CHECK_STATUS();   // checking status of nextPage, to prevent from getting error
                                                                                                                    // in case we ran out of pictures to show

export function renderPage() {
    console.log("Hi"); fetch("https://dog.ceo/api/breeds/list/all").then(handleJson).then(useJson); }

export function SET_PAGE_TO_LAST_VISITED() { 
    fetch(`https://dog.ceo/api/breed/${currentBreed}/images`).then(handleJson).then(handleImage);
}

export function SET_IMAGE_NEW_BREED() {
    fetch(`https://dog.ceo/api/breed/${currentBreed}/images`).then(handleJson).then(handleImage);
}

export function HANDLE_AND_CHECK_STATUS() {
  if(localStorage.dogName){
    currentBreed = localStorage.dogName;
    fetch(`https://dog.ceo/api/breed/${currentBreed}/images`).then(handleJson).then(checkStatus);} else { statusChecker = true;}
}

export function setLocalStorageBreed() {
    currentBreed = localStorage.dogName;
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
             SET_IMAGE_NEW_BREED();
             
      });
  
       breedType.innerText = breed;
       containerBreeds.appendChild(breedType);
    }
  }  

function handleJson(json){
    return json.json();
  }

  function handleImage(json) {
    imageBox.src = json.message[count];
  }

  function checkStatus(json) {
    if(json.message[count+1]) {statusChecker = true} else
    {
    statusChecker = false;
    }
  }              // setting status to see if we can click on the forward button or not 
  // in case we leave the page, while being at the end of the picture album