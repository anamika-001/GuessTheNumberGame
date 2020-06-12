var NumberGuess;
    var userGuessLog = [];
    var attempts=0;

function newGame(){
    window.location.reload();
}
function init(){
    NumberGuess = Math.floor(Math.random()*10+1);
    //console.log(NumberGuess);
}

function CompareGuess(){
    var userGuess=document.getElementById('inputBox').value;
    //console.log(userGuess);

    userGuessLog.push(userGuess);
   console.log(userGuessLog);
   document.getElementById('guesslog').innerHTML=userGuessLog;

   attempts++;
   document.getElementById('attempts').innerHTML=attempts;
if(attempts<=10){
if(userGuess>NumberGuess){
    document.getElementById('textOutput').innerHTML='Your guess is too high';
    document.getElementById('inputBox').value="";
}
else if(userGuess<NumberGuess){
    document.getElementById('textOutput').innerHTML='Your guess is too low';
    document.getElementById('inputBox').value="";
}
else{
    
    document.getElementById('textOutput').innerHTML='Correct!!';
     document.getElementById('inputBox').value="";

}
}
else{
    alert("sorry ,Your all the 10 attempts over.click on New Game to Play Again ;-)");
}


}
