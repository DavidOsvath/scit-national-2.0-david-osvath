console.log("Javascript - AJAX");
console.log("CRUD Operation - Create");


document.getElementById("add-article-button").addEventListener("click", function(){
    const articleTitle = document.getElementById("article-title").value;
    const articleContent =document.getElementById("article-content").value;
    console.log("id= ", id);
    console.log("Title= ",articleTitle);
    console.log("content= ",articleContent);

    if(articleTitle && articleContent){
        const payload = {
            title:articleTitle,
            content:articleContent
        }
    
        console.log("Payload:", payload);
        console.log("Paload Text: ", JSON.stringify(payload));
    
        fetch("https://simple-json-server-scit.herokuapp.com/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload), // body data type must match "Content-Type" header
        }).then(getData);
    }


   

});