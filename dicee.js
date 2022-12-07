var random=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice" +random+".png";
var randomImageSource="images/"+randomDiceImage;
var image1=document.querySelectorAll("img.img1")[0];
image1.setAttribute("src",randomImageSource);
//console.log(random);
//alert("hello");
var random1=Math.floor(Math.random()*6)+1;
//console.log(random1);
var randomImage="dice"+random1+".png";
var randomImagesrc2="images/"+randomImage;
var image2=document.querySelectorAll("img.img2")[0];
image2.setAttribute("src",randomImagesrc2);
if(random>random1)
{
    document.querySelector("h1").innerHTML="Player 2 Lost!";
}
else if(random<random1)
{
    document.querySelector("h1").innerHTML="Player 1 Lost!";
}
else if(random==random1)
{
    document.querySelector("h1").innerHTML="Destiny wins";
}