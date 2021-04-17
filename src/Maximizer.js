

export let canMaximize = true;

const maximizeButton = $("#maximize");


export function maximize(condition) {
    
        if(condition){
        const picture = $("#breed-image");
        picture.css("height", "100%");
        maximizeButton.html("Minimize");
        canMaximize = false;
        } else {
          const picture = $("#breed-image");
        picture.css("height", "80%");
        maximizeButton.html("Maximize");
        canMaximize = true;
        }
      
        
}