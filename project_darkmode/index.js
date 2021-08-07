 var  blackmode = document.documentElement.style;
 var   mode = true;   


 function changedMode(){
     if (mode){
         darkMode();
     }
 else {lightMode();}
    }
function lightMode(){
blackmode.setProperty("--background1","rgba(230,230,230,)")
blackmode.setProperty("--shadow1","rgba(139, 133, 133, 0.5)")
blackmode.setProperty("--shadow2", "rgba(255,255,255,0.85)")
blackmode.setProperty("--color","black")
 
}


function darkMode(){

    blackmode.setProperty("--background1","rgba(9 25 33)")
    blackmode.setProperty("--shadow1","rgba(0 0 0 / 45%)")
    blackmode.setProperty("--shadow2", "rgba(255 255 255 / 12%)")
    blackmode.setProperty("--color","rgba(255 255 255 / 59%)")
     
}