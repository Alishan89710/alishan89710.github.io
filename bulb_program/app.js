function light(sw){
    if(sw == 0){
        pic = "bulb_off.jpg"
    }
    else{ pic ="bulb_on.jpg" }
    document.getElementById('bulb_image').src = pic;
};
