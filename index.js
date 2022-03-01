const dodger = document.querySelector('#dodger')
console.log(dodger)




document.addEventListener('keydown', e => {
    if (e.key === "ArrowLeft") 
    moveDodgerLeft();
    else if (e.key === "ArrowRight")
    moveDodgerRight();
    else if (e.key === "ArrowUp")
    moveUp();
    
})



function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
   const left = parseInt(leftNumbers, 10);
   if (left > 0)
   dodger.style.left = `${left - 2}px`;


} 

function moveDodgerRight(){
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);
    if (right < 360)
    dodger.style.left = `${right + 2}px`;
}

function moveUp(){
    const topNumbers = dodger.style.bottom.replace("px", "");
    const top = parseInt(topNumbers, 10);

    dodger.style.bottom = `${top + 2}px`
}