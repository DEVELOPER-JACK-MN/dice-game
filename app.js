            // ГЛОБАЛ ХУВЬЦАГЧИД
            // Ойыншынын кезегин сактайтын ХУВЬЦАГЧ(var)
            var activePlayer;

            // Ойыншынын жыйнаган упайын сактайтын ХУВЬЦАГЧ(var)
            var scores;

             // Ойыншынын өз кезегинде жыйнаган упайын сактайтын ХУВЬЦАГЧ(var)
            var roundScore;

            // Дайстын суретин корсететин элементин DOM - нан тауып осанда сактайтын код
            var diceDom = document.querySelector('.dice');

            //Ойынды бастау
            initGame(); 

            // Ойынды жанадан бастайдын ФУНКЦ
             function initGame(){

                activePlayer = 0;           
                scores = [0, 0];           
                roundScore = 0;
                
                // Программдын бастауга дайындык
                document.getElementById('score-0').textContent = '0';
                document.getElementById('score-1').textContent = '0';
                document.getElementById('current-0').textContent = '0';
                document.getElementById('current-1').textContent = '0';

                // Ойыншынын атын кайтадан шыгару
                document.getElementById("name-0").textContent = "Player 1"
                document.getElementById("name-1").textContent = "Player 2"

                document.querySelector(".player-0-panel").classList.remove("winner");
                document.querySelector(".player-1-panel").classList.remove("winner");

                document.querySelector(".player-0-panel").classList.remove("active");
                document.querySelector(".player-1-panel").classList.remove("active");
                
                document.querySelector(".player-0-panel").classList.add("active");

                document.querySelector('.dice').style.display = 'none';
                };

            // Жана бастау ФУНКЦИЯСЫН шакыру код
            initGame();

            // Дайсты айландыратын батырманын код
            document.querySelector(".btn-roll").addEventListener("click", function(){   
                
            // 1 - 6 ишинде RANDOM сан шыгарып алатын код
            var diceNumber = Math.floor ( Math.random () * 6) +1;   
            
            // Дайстын суретин web-ке шыгаратын код
            diceDom.style.display = 'block';   

            // Айландырганда түскен RANDOM сандарды сүретке косатын код
            diceDom.src = "dice-" + diceNumber + ".png";    
        
        
        if (diceNumber !== 1){

            // 1 - ден бөлек сан түссе. Ойыншынын упайына косатын жеринин код
            roundScore = roundScore + diceNumber;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else { 
            
            // 1 түскени үшин ойыншынын кезегин ауыстыратын код
            switchToNextPlayer();       
        }});

            //HOLD батырмасы 
            document.querySelector(".btn-hold").addEventListener("click", function(){   
                
            //Ойыншынын жыйнаган упайын ГЛОБАЛ упайга косатын код 
            scores[activePlayer] = scores[activePlayer] + roundScore;

            // Экрандагы упайды өзгертетин код
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        
        // Ойыншынын женимпаз болганын ( упайы 100 - ден коппе екенин) тексеретин код
        if(scores[activePlayer] >=10){

            // Женинпаз деген текстни атынын орынына шыгаратын код
            document.getElementById('name-' + activePlayer).textContent = "WINNER!!!";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        }else{

            // Ойншынын кезегин ауыстырады
            switchToNextPlayer(); 
        }});


            // Бул ФУНКЦ ойншынын кезегин ауыстырады
            function switchToNextPlayer(){
                      
            // Ойыншынын өз кезегинде жыйнаган упайын 0 кылатын код
            roundScore = 0;
            document.getElementById("current-" + activePlayer).textContent = 0;            
            
            // Ойыншынын кезегин ауыстыратын код
            activePlayer === 0 ? (activePlayer) = 1 : (activePlayer= 0);    
            
            // Актив нүктесин жогалтатын код
            document.querySelector(".player-0-panel").classList.toggle("active");
            document.querySelector(".player-1-panel").classList.toggle("active");           
            
            // Дайсты уакытша көринбейтин болдыратын код
            diceDom.style.display = "none";            
            }

            // NEW GAME & Жанадан бастау батырмасынын код
            document.querySelector(".btn-new").addEventListener("click", initGame);
            




           