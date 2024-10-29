

function green(){
var green = document.getElementById("green");
var red= document.getElementById("red");
green.style.backgroundColor="#00ff54"
green.style.boxShadow="0px 0px 10px #00ff54,0px 0px 20px #00ff54";
red.style.backgroundColor="#FF2400"
red.style.boxShadow="none";
setTimeout(yellow,3000);
}

function yellow(){
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");
yellow.style.backgroundColor="yellow"
yellow.style.boxShadow="0px 0px 10px yellow,0px 0px 20px yellow";
green.style.backgroundColor="#228B22"
green.style.boxShadow="none";
setTimeout(red,3000);
}

function red(){
var red= document.getElementById("red");
var yellow = document.getElementById("yellow");
red.style.backgroundColor="red"
red.style.boxShadow="0px 0px 10px red,0px 0px 20px red";
yellow.style.backgroundColor="#FFD700"
yellow.style.boxShadow="none";
setTimeout(green,5000);
}

green();

