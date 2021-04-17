import "jquery";

import { Greeter } from "./src/Greeter";
import { HANDLE_AND_CHECK_STATUS, renderPage, SET_IMAGE_NEW_BREED, SET_PAGE_TO_LAST_VISITED, pageNumber, setLocalStorageBreed, count, decreaseCount, increaseCount, statusToTrue, setPageNumber, statusChecker } from "./src/manageURL";
import { maximize, canMaximize } from "./src/Maximizer";     //added maximize picture module

console.log("JavaScript - Dogs App");

Greeter();

// const bigBox = $(".clickme");
// bigBox.click(() =>{
//   console.log("clicked");
// });


if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  window.location = "\login.html";
});
 



console.log(localStorage.dogName);

if(localStorage.pageNumber) {
  setPageNumber();
  pageNumber.innerText = `${localStorage.pageNumber}`;
}
if(localStorage.dogName) {
      setLocalStorageBreed();
      SET_PAGE_TO_LAST_VISITED();
       }   //Setting page to last visited breed/pageNumber



const forwardButton = document.getElementById("forward");
const backwardButton = document.getElementById("backward");

renderPage();                                      // render page on opening the HTML 


backwardButton.addEventListener("click", () => {
  if (count>0) {
    statusToTrue();
    decreaseCount();
    localStorage.pageNumber = `${count + 1}`;
    pageNumber.innerText = `${count + 1}`
    SET_IMAGE_NEW_BREED();
  }
});

forwardButton.addEventListener("click", () => { 
  HANDLE_AND_CHECK_STATUS();
  if(statusChecker){
    increaseCount();
  localStorage.pageNumber = `${count + 1}`;
  pageNumber.innerText = `${count + 1}`
  SET_IMAGE_NEW_BREED();
  } 
});                                                                                                               // backward $ forward button functionality



                                                                                                             // Creating the html components to render the page


//CLEAN START

const maximizeButton = $("#maximize");
maximizeButton.click(() => {maximize(canMaximize)});







