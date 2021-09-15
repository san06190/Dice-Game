var r1 = Math.ceil(Math.random()*6);
var imgsrc1 = "images/dice" + r1 + ".png";
var r2 = Math.ceil(Math.random()*6);
var imgsrc2 = "images/dice" + r2 + ".png";
var dice1 =document.querySelectorAll("img")[0].setAttribute('src',imgsrc1);
var dice2 =document.querySelectorAll("img")[1].setAttribute('src',imgsrc2);

if( r1 > r2)
{
    document.querySelector("h1").textContent="🚩Player1 Wins";
}
else if( r2 > r1) 
{
    document.querySelector("h1").textContent="Player2 Wins🚩";
}
else
document.querySelector("h1").textContent="Draw";


