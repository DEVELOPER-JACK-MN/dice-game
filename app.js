//TOGLOGCHIIN ELJIIG HADGLAH VAR, 1R toglogch=0 2R toglogch=1

var activePlayer = 1;


//TOGLOHCHIN TSUGLUULSAN ONOOG HADGLAH VAR
var scores = [0, 0];

// TOGLOGCHIIN EELJINDEE TSUGLUULJ BGA ONOO HADGLAH VAR
var roundScore = 0;



// SHOOII ALI TALAARAA BUUSANIIG HADGLAH VAR, 1-6 GESEN VAR RANDOM



var dice = Math.floor ( Math.random() * 6) +1;

document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;

document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;

document.querySelector('.dice').style.display ='none';