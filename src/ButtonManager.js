import { count, decreaseCount, statusToTrue, pageNumber, SET_IMAGE_NEW_BREED, HANDLE_AND_CHECK_STATUS, statusChecker, increaseCount } from "./manageURL"

const backwardButton = document.getElementById("backward");
const forwardButton = document.getElementById("forward");

export function setBackwardButton() {
    backwardButton.addEventListener("click", () => {
        if (count>0) {
          statusToTrue();
          decreaseCount();
          localStorage.pageNumber = `${count + 1}`;
          pageNumber.innerText = `${count + 1}`
          SET_IMAGE_NEW_BREED();
        }
      });
}

export function setForwardButton() {
    forwardButton.addEventListener("click", () => { 
        HANDLE_AND_CHECK_STATUS();
        if(statusChecker){
          increaseCount();
        localStorage.pageNumber = `${count + 1}`;
        pageNumber.innerText = `${count + 1}`
        SET_IMAGE_NEW_BREED();
        } 
      });
}