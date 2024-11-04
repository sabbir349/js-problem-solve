var money = 1000;
var ticket = 800;
var age = 62;

if(age < 10){
    console.log('free for children')
}
else if(age > 10 && age < 33){
    var discount = ticket * 50/100;
    var pay_able_money = ticket - discount
    console.log(pay_able_money , "for students")
}
else if(age >= 60){
    var discount = ticket * 15/100;
    var pay_able_money = ticket - discount
    console.log(pay_able_money , "for senior citizens")
}
else{
    console.log(ticket)
}