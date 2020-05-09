function showInfo(){
    Swal.fire({
        icon: 'info',
        confirmButtonText: 'Okay',
        html: 'Start the game by pressing <span style="color:#2c85a3">SPACE</span>.<br/>By pressing <span style="color:#2c85a3">← →</span> arrow keys, you will be able to move the paddle</span>',
        title: "Information"
    })
}
function showFail(){
    Swal.fire({
        icon: 'error',
        confirmButtonText: 'Okay',
        confirmButtonColor: "red",
        html: 'You lost all of your <span style="color:red">HEARTS</span>',
        title: "You have failed"
    })
}