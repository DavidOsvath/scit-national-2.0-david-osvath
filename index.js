import "jquery";
import { setBackwardButton, setForwardButton } from "./src/ButtonManager";

import { Greeter } from "./src/Greeter";
import {  renderPage,  SET_PAGE_TO_LAST_VISITED, pageNumber, setLocalStorageBreed, setPageNumber } from "./src/manageURL";
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
 

if(localStorage.pageNumber) {
  setPageNumber();
  pageNumber.innerText = `${localStorage.pageNumber}`;
}
if(localStorage.dogName) {
      setLocalStorageBreed();
      SET_PAGE_TO_LAST_VISITED();
       }   //Setting page to last visited breed/pageNumber



renderPage();                                      // render page on opening the HTML 


setBackwardButton();

setForwardButton();


                                                                                                             // Creating the html components to render the page


//CLEAN START

const maximizeButton = $("#maximize");
maximizeButton.click(() => {maximize(canMaximize)});







