
function onHitLight(){
    document.getElementById("canvas").style.boxShadow = "0px 0px 30px -1px rgba(238, 255, 4, 0.75)"
    document.getElementById("canvas").style.transition = "box-shadow 100ms ease-in-out"
    setTimeout(function(){ 
        document.getElementById("canvas").style.boxShadow = "0px 0px 14px -1px rgba(0, 0, 0, 0.75)"
    }, 150);
}
function onLostHeart(){
    document.getElementById("canvas").style.boxShadow = "0px 0px 30px -1px rgba(255, 0, 0, 0.75)"
    document.getElementById("canvas").style.transition = "box-shadow 100ms ease-in-out"
    setTimeout(function(){ 
        document.getElementById("canvas").style.boxShadow = "0px 0px 14px -1px rgba(0, 0, 0, 0.75)"
    }, 500);
}