
//created two buttons 
// 1.Works as toggle botton 
// 2.zooms the element 


var name = document.getElementById("name").innerHTML= " Hello , I am Sunita" ;
var name = document.getElementById("name").style.color = "red" ;
var hidden = false;
var z = 1;
var x = document.getElementsByTagName("p");
var hideButton = document.getElementById("hideInformation");
var zoomButton = document.getElementById("zoomInformation");

hideButton.addEventListener("click", hideText);
zoomButton.addEventListener("click", zoom);
let fontSize = [15,16,20];
let colors = ["red","green","blue"];

function hideText () {
   
    for(let i= 0;i<x.length;i++){
        if(!hidden){
        x[i].style.display="none";
        hideButton.innerHTML = "show";
        
        
        

    }
    else {
        x[i].style.display="block";
        hideButton.innerHTML = "hide";
        
    }
}
hidden =!hidden;

}


function zoom() {
    if(hidden || z > 3){
        alert (" text cannot be zoomed ")
        z= 1;
    }

    for (i=0;i<fontSize.length;i++){
        x[i].style.color = colors[z-1];   
      
        x[i].style.fontSize = fontSize[i]*z;
        }
   
   z++;
   
}


