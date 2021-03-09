console.log("JavaScript - AJAX");
console.log("CRUD Operation - Read");
// The scope of this lesson is to fetch some data from a server and use it to dynamically render data to the user
// We show the data to the user by creating new html elements and ad them to the existing html objects

// "articleListHtml" will hold the new elements we will create for showing data
// we need an existing reference so we can bind to it the new elements
const articleListHtml = document.querySelector(".article-list");
const trashSvg =
  '<svg height="30px" viewBox="-40 0 427 427.00131" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"/><path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/></svg>';

// we will get/fetch the data when user click on a button
document.getElementById("get-data").addEventListener("click", getData);

function getData() {
  // "fetch" is a JavaScript function that tells the browser the make a request the specified address in the argument
  fetch("https://simple-json-server-scit.herokuapp.com/posts")
    // "this .then" is responsible for linking a callback function to the event trigger by the browser when the server responds back
    .then(handleFetchResponse)
    // "this .then" is responsible for linking a callback function to the event trigger by the parser of the body of the response
    // we need to parse the response so we can transform it from a string in form of a JSON to an actual JavaScript value, which in this case is a list of objects
    .then(useJSONResponse);
}

// because "handleFetchResponse" is used as a callback function in the first then of "fetch" the parameter will be the response from the servers
function handleFetchResponse(response) {
  console.log("response", response);
  // .json() is responsible for parsing in an asynchronous way the body of the server response, from a JSON string to a JavaScript value
  return response.json();
}

// because  "useJSONResponse" is used in the second then of "fetch" the parameter will be the actual JavaScript value parsed from the body of the server
// only in this function we can actually use the data to render dynamically something
function useJSONResponse(json) {
  console.log(json);

  // by calling "renderArticles" we will render to page the articles from the server
  renderArticles(json);
}

function renderArticles(articleList) {
  // we need to remove the "No data" text in our html list container
  articleListHtml.innerText = "";

  // the server responds with a list of objects
  // every object represents a article
  // every article has the same structure (id, title, content)
  for (const articleData of articleList) {
    console.log(articleData);
    renderArticle(articleData);
  }
}

function renderArticle(articleData) {
  const article = document.createElement("div");
  article.classList.add("article-item");
  const articleTitle = document.createElement("h3");
  const articleContent = document.createElement("p");
  const removeArticle = document.createElement("div");
  removeArticle.innerHTML = trashSvg;
  article.appendChild(articleTitle);
  article.appendChild(articleContent);
  article.appendChild(removeArticle);

  articleListHtml.appendChild(article);

  // after creating the necessary html structure for a article items, we need to populated with data
  // we use the "articleData" as data source
  articleTitle.innerText = articleData.title;
  articleContent.innerText = articleData.content;

  removeArticle.addEventListener("click", function(){
    console.log("remove element");
    article.remove();
    fetch(`https://simple-json-server-scit.herokuapp.com/posts/${articleData.id}`,
     {
        method: "DELETE"       
      }
    ).then(getData);
    
  });
}
