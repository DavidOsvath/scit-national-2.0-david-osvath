console.log("to-do-homework");
const allToDos = document.querySelector(".allToDos");
let counter = 0; //counter to determine if i should POST or PUT 

fetch("https://simple-json-server-scit.herokuapp.com/todo/osvathdavid").then(handleFetchResponse).then(useJSONResponse);





function handleFetchResponse(response) {
    return response.json();
  }

// PRINTED OUT THE OSVATHDAVID TODO LIST ARRAY
  function useJSONResponse(json) {
    //console.log(json.todo.length);
    console.log(json);
    renderNotes(json);
  }

 let payload=[];

// ADDED FUNCTIONALITY TO PLUS BUTTON
  document.querySelector(".checkbox--unchecked").addEventListener("click", () => {

if (counter === 0) {

  console.log("clicked");
  const taskValue = document.querySelector(".new-notes").value;
      const newPair = {checked:false, item:taskValue};
      payload.push(newPair);

  
      const newNote = {
        id:"osvathdavid",
        todo:payload
        }
        fetch("https://simple-json-server-scit.herokuapp.com/todo", {
  method: "POST",
  headers: {
      'Content-Type': 'application/json'
    },
  body: JSON.stringify(newNote)
}).then(getData);


} else {
      console.log("clicked");
      

      const taskValue = document.querySelector(".new-notes").value;
      const newPair = {checked:false, item:taskValue};
      payload.push(newPair);

  
      const newNote = {
        id:"osvathdavid",
        todo:payload
        }
        fetch("https://simple-json-server-scit.herokuapp.com/todo/osvathdavid", {
  method: "PUT",
  headers: {
      'Content-Type': 'application/json'
    },
  body: JSON.stringify(newNote)
}).then(getData);
 
}

});

    
   


  function getData() {
    fetch("https://simple-json-server-scit.herokuapp.com/todo/osvathdavid").then(handleFetchResponse).then(useJSONResponse);
  }



  function renderNotes(noteData){
      
     allToDos.innerHTML = "";
      payload=[];
      console.log("noteData.todo = ", noteData.todo);
      
      for (const pairs of noteData.todo){
          //console.log(pairs);
          payload.push(pairs);
          counter++;
          
          //console.log("payload = ", payload);
      
      
      
      const note = document.createElement("div");
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-button");  
      deleteButton.addEventListener("click", () => {
          //deleteButton.parentNode.remove();
          removeItem(deleteButton);
          
          
      });  
     
      note.classList.add("toDoItem");
      const todoItem = document.createElement("p");
      const noteCheckBox = document.createElement("input");
      noteCheckBox.setAttribute("type", "checkbox");
      noteCheckBox.addEventListener("click", function(){
          changeValueOfCheckBox(noteCheckBox);
      });

      note.appendChild(todoItem);
      note.appendChild(noteCheckBox);
      note.appendChild(deleteButton);

      allToDos.appendChild(note);

      todoItem.innerText = pairs.item;
      }
  
    }


  //ADDED REMOVE BUTTON THAT UPDATES ON THE SERVER AND GETS DATA BACK IMMEDIATELY
function removeItem(thisButton){
  counter--;
    payload = [];
    thisButton.parentNode.remove();
    
    const items = document.getElementsByClassName("toDoItem");
    console.log(items);
    for (const x of items){
    console.log(x.outerText);
    const taskValue = x.outerText;
    const checkBoxValue = false;

    const newPair = {checked:false, item:taskValue};
    payload.push(newPair);}
    console.log(payload);

    const newNote = {
        id:"osvathdavid",
        todo:payload
        }
        fetch("https://simple-json-server-scit.herokuapp.com/todo/osvathdavid", {
  method: "PUT",
  headers: {
      'Content-Type': 'application/json'
    },
  body: JSON.stringify(newNote)
}).then(getData);}

