function deleteHearts(hearts){
    heartsNum = hearts;
    if(heartsNum == 2){
        document.getElementById("heart3").style.opacity = "0"; 
    }
    if(heartsNum == 1){
        document.getElementById("heart2").style.opacity = "0";
    }
    if(heartsNum == 0){
        document.getElementById("heart1").style.opacity = "0";
    }
}

function displayAll(){
    document.getElementById("heart1").style.opacity = "1";
    document.getElementById("heart2").style.opacity = "1";
    document.getElementById("heart3").style.opacity = "1";
}