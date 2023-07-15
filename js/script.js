const mario = document.querySelector('.mario');
const pip = document.querySelector('.pip');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    },500);
}

const loop = setInterval(() => {

    const pipPosition = pip.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    console.log(marioPosition);

 
if (pipPosition <= 120 && pipPosition > 0 && marioPosition < 80 ) {
    
    pip.style.animation = 'none';
    pip.style.left = `${pipPosition}px`;
    
    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;
    mario.src = './images/gameover.png';
    mario.style.width = "75px"
    mario.style.marginLeft = "50px"
    
 

    clearInterval(loop);

}
}, 10);


document.addEventListener('keydown',jump)