function TGame1(){
        document.querySelectorAll('.fa-close, .fa-circle-thin').forEach(element => {
        element.style.display = 'none';
    });
    document.querySelector('.grid-container').style.display="grid";
    document.getElementById('box').style.display="flex";
}   
let x = 0;
let count=0; 
function TicTacToe(element) {
    const close = element.querySelector('.fa-close').style.display;
    const circle = element.querySelector('.fa-circle-thin').style.display;

    if ((close == "none" || close == "") && (circle == "none" || circle == "")){
        if (x == 0) {
            element.querySelector('.fa-close').style.display = "flex";
            x = 1;
            count++;
            playclickMusic();
        } else if (x == 1) {
            element.querySelector('.fa-circle-thin').style.display = "flex";
            x = 0;
            count++;
            playclickMusic();
        }
    }
    win();
}

function win(){
    let [B1, B2, B3, B4, B5, B6, B7, B8, B9] = Array.from({ length: 9 }, (_, i) => document.querySelectorAll('.fa-close')[i].style.display);

    let [C1, C2, C3, C4, C5, C6, C7, C8, C9] = Array.from({ length: 9 }, (_, i) => document.querySelectorAll('.fa-circle-thin')[i].style.display);
    
    if(((B1=="flex") && (B2=="flex") && (B3=="flex"))||((B4=="flex") && (B5=="flex") && (B6=="flex"))||((B7=="flex") && (B8=="flex") && (B9=="flex"))
    ||((B1=="flex") && (B4=="flex") && (B7=="flex"))||((B2=="flex") && (B5=="flex") && (B8=="flex"))||((B3=="flex") && (B6=="flex") && (B9=="flex"))
    ||((B1=="flex") && (B5=="flex") && (B9=="flex"))||((B3=="flex") && (B5=="flex") && (B7=="flex"))){
        setTimeout(() => {
            alert("Player 'X' Win 🏆 ");
            document.querySelectorAll('.fa-close, .fa-circle-thin').forEach(element => {
                element.style.display = 'none';
            });            
        }, 100);
        count=0;
        playWinMusic();
    }
    else if(((C1=="flex") && (C2=="flex") && (C3=="flex"))||((C4=="flex") && (C5=="flex") && (C6=="flex"))||((C7=="flex") && (C8=="flex") && (C9=="flex"))
    ||((C1=="flex") && (C4=="flex") && (C7=="flex"))||((C2=="flex") && (C5=="flex") && (C8=="flex"))||((C3=="flex") && (C6=="flex") && (C9=="flex"))
    ||((C1=="flex") && (C5=="flex") && (C9=="flex"))||((C3=="flex") && (C5=="flex") && (C7=="flex"))){
        setTimeout(() => {
            alert("Player 'O' Win 🏆 ");
            document.querySelectorAll('.fa-close, .fa-circle-thin').forEach(element => {
                element.style.display = 'none';
            });            
        }, 100);
        count=0;
        playWinMusic();
    } 
  else  if(count==9){
    setTimeout(() => {
        alert(" Draw 🙂 Play Again ");
        document.querySelectorAll('.fa-close, .fa-circle-thin').forEach(element => {
            element.style.display = 'none';
        });            
    }, 100);
    playDrawMusic();
  }    
}
restart = () => document.querySelectorAll('.fa-close, .fa-circle-thin').forEach(element => {
    element.style.display = 'none';
}); 

Exit = () =>  window.close();

const clickMusic = new Audio("css/mixkit-cool-interface-click-tone-2568.wav");
const playclickMusic = () => clickMusic.play();

const WinMusic = new Audio("css/mixkit-audience-light-applause-354.wav");
const playWinMusic = () => WinMusic.play();

const DrawMusic = new Audio("mixkit-cartoon-failure-piano-473.wav");
const playDrawMusic = () => DrawMusic.play();




