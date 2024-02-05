var body = document.body;
var isBlue = false;
 
  function changeColor() {
    if (isBlue){
        body.style.color = "black";
        body.style.background = "#EBF2FA";
        body.style.transition = "background-color 1s";
        isBlue=false;
    }
    else { 
        body.style.transition = "background-color 1s";
        body.style.background = "#172A3A";
        body.style.color= "aliceblue";
        isBlue=true;

    }

 }