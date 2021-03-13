console.log("JavaScript - AJAX");
const articleListHtml = document.querySelector(".article-list");

document.getElementById("get-data").addEventListener("click", () => {
    fetchPosts();
}); 


  
  
  
function fetchPosts(){
    fetch("https://simple-json-server-scit.herokuapp.com/posts").then(handleFetchResponse).then(useJSONResponse);
}
function fetchComments(){
    fetch("https://simple-json-server-scit.herokuapp.com/comments").then(handleFetchResponse).then(renderComments);
 } // DAVID ADDED CODE HERE 


function handleFetchResponse(response) {
  return response.json();
}


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
  const articleTitle = document.createElement("h3");
  const articleContent = document.createElement("p");
  const commentsList = document.createElement("div");
  commentsList.classList.add("comment-list");

  article.appendChild(articleTitle);
  article.appendChild(articleContent);
  article.appendChild(commentsList);

  articleListHtml.appendChild(article);

  // after creating the necessary html structure for a article items, we need to populated with data
  // we use the "articleData" as data source
  articleTitle.innerText = articleData.title;
  articleContent.innerText = articleData.content;




  fetch(`https://simple-json-server-scit.herokuapp.com/comments?postId=${articleData.id}`).then(handleFetchResponse).then(renderComments);

}


function renderComments(commentList){
    for (const commentData of commentList) {
        console.log(commentData);
        renderComment(commentData);}
}

function renderComment(commentData){
    const comment = document.createElement("div");
    const commentAuthor = document.createElement("h4");
    const commentContent = document.createElement("p");

    comment.appendChild(commentAuthor);
    comment.appendChild(commentContent);

    commentContent.classList.add("comment-content");
    commentAuthor.classList.add("comment-user");
    comment.classList.add("comment");
    comment.style.paddingLeft = "20px"; 

    const allArticles = document.getElementsByClassName("comment-list");
    allArticles[commentData.postId].appendChild(comment);

    commentAuthor.innerText = commentData.username;
    commentContent.innerText = commentData.content;
}


