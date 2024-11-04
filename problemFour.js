var myScore = 85;
var friendScore = 45;

if(myScore > 80){
    if(friendScore > 80){
        console.log('go for lunch')
    } 
    else if(friendScore >= 60){
        console.log('good luck next time')
    } 
    else if(friendScore >= 40){
        console.log('message unseen')
    } 
    else{
        console.log('block')
    }
} 
else{
    console.log('go home and sleep and act sad')
}
