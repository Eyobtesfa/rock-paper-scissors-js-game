
        //json .parse convert back strings into objects
        //local storage .get item gets the value to store it on a variable
        let storeResult = JSON.parse(localStorage.getItem('score')) || {
            //the || or operator is used to create a default value incase the given value is null
            wins : 0,
            losses : 0,
            ties : 0
        }
//this line writes the result on the page




document.querySelector('.tell-score').innerHTML = `Wins: ${storeResult.wins}, Ties: ${storeResult.ties}, Losses: ${storeResult.losses}`;

let autoPlaying = false
let intervalId



function autoPlay(){
   if(autoPlaying == false){ 
    intervalId = setInterval(function () {
        const users = RPS();
        const comp = RPS();
        result(comp , users);
    },2000)
    autoPlaying = true
}
else{
clearInterval(intervalId)
autoPlaying = false
}
}

//button action with an event listner
document.querySelector('.scissors-button').addEventListener('click' , () => {

result(computerPick, 'Scissors')

})

document.body.addEventListener('keydown', (event) => {
   computerPick = RPS()
    if(event.key === 'r'){
   
    result(computerPick , 'Rock')
}
    else if(event.key === 'p'){
        result(computerPick , 'Paper')
    }
    else if(event.key === 's'){
        result(computerPick ,'Scissors')
    }
})









function RPS(){
buttonValue = Math.random();

if(buttonValue >= 0 && buttonValue < 1/3){
         computerMove = 'Rock';
    }else if(buttonValue >= 1/3 && buttonValue < 2/3){
         computerMove = 'Paper';
    }else {
     computerMove = 'Scissors';
    }
    return computerMove;
}    

function result(computerMove, userPick){
let result = ''
if (userPick == 'Rock'){

    if (computerMove == 'Rock'){
        result = '😏 Ok, A Tie!'
        storeResult.ties++
    }else if (computerMove == 'Paper'){
        result = '😠 Ohh, Looser!'
        storeResult.losses++
    }else {
        result = '😂 Yay, Winner!'
        storeResult.wins++
    }
}
else if(userPick == 'Paper'){
    if(computerMove == 'Rock'){
        result = '😂 Yay, Winner!'
        storeResult.wins++
    }else if(computerMove == 'Paper'){
        result = '😏 Ok, A Tie!'
        storeResult.ties++
    }else{
        result = '😠 Ohh, Looser!'
        storeResult.losses++
    }
}
else if(userPick == 'Scissors'){
    if(computerMove == 'Rock'){
        result = '😠 Ohh, Looser!'
        storeResult.losses++
    }else if(computerMove == 'Paper'){
        result = '😂 Yay, Winner!'
        storeResult.wins++
    }else{
        result = '😏 Ok, A Tie!'
        storeResult.ties++
    }
}

/*alert(`you pick:- ${userPick}, computer picks:- ${computerMove}, result: ${result}
wins: ${storeResult.wins}, ties: ${storeResult.ties}, losses: ${storeResult.losses}`)*/

document.querySelector('.tell-result').innerHTML =` ${result}`


document.querySelector('.tell-picks').innerHTML = `You  <img src="${userPick}.jpg" class ="rock-button">   <img src ="${computerMove}.jpg" class="rock-button">Computer`
//local storage set item stores values permanently, but only takes string values
//json.stringfy conver objects into a string
//local storage .setitem('variable' , value to be stored) 
localStorage.setItem('score', JSON.stringify(storeResult))
//this line updates the result in real time on the page
document.querySelector('.tell-score').innerHTML = `Wins: ${storeResult.wins}, Ties: ${storeResult.ties}, Losses: ${storeResult.losses}`;

}