const cn = document.getElementById("canvas");
var ctx = cn.getContext("2d");
ctx.font = "15px Arial";
 i=1;while(i<10){
ctx.fillText(i, 298+i*30, 322);
ctx.fillText(i, 286, 307-i*30);
i++;
}
let z=1;
while(z<60){
ctx.fillRect(30*z,300,3,3);
ctx.fillRect(300,30*z,3,3);
z++;
}
c=0;d=0;
function draw(){
    let a = document.getElementById("userInput").value;
    let b = document.getElementById("userInput1").value;
    ctx.clearRect(0,0,600,600);
    ctx.fillStyle = "black";
    ctx.font = "15px Arial";
 i=1;while(i<10){
ctx.fillText(i, 298+i*30, 322);
ctx.fillText(i, 286, 307-i*30);
i++;
}
    let z=1;
    ctx.fillStyle = "black";
while(z<60){
ctx.fillRect(30*z,300,3,3);
ctx.fillRect(300,30*z,3,3);
z++;
}
    ctx.fillStyle = "rgb(236,236,241)";
let x=-10;
while(x<10){
    y=(a*Math.pow(Math.E,x)+b*Math.pow(x,0));

ctx.fillRect(300+30*x,300+(1-30*y),2,2);
if(Math.abs(Math.abs(a)+Math.abs(b)+Math.abs(c))+Math.abs(d)>26){
x=x+0.00015;
}
else if(Math.abs(Math.abs(a)+Math.abs(b)+Math.abs(c)+Math.abs(d))>15){
    x=x+0.0003;
}
else{
x=x+0.001;
}

} 

}



let b1= document.getElementById('hell');
let b2= document.getElementById('dunkel');
let div1 = document.getElementById('div1');
let links = document.getElementById('links');
let knopf = document.getElementById('b1');
let table = document.getElementById('table');
function dunkel(){

  document.body.style.backgroundColor = 'rgb(52,53,65)';
  b1.style.backgroundColor='#00000000';
  b1.style.color='#00000000';
  b1.style.width='0px';
  b1.style.height='0px';

  b2.style.borderColor='#00000000';
b2.style.backgroundColor='#FFFFFFAA';
b2.style.color='white';
b2.style.width='200px';
b2.style.height='100px';
div1.style.backgroundColor='rgb(32,33,35)';
table.style.backgroundColor='rgba(32,33,35,0.8)';
}
function hell(){

  document.body.style.backgroundColor = '#E1D89F';
  b2.style.backgroundColor='#00000000';
  b2.style.color='#00000000';
  b2.style.width='0px';
  b2.style.height='0px';

  b1.style.borderColor='#00000000';
b1.style.backgroundColor='#FFFFFF99';
b1.style.color='white';
b1.style.width='200px';
b1.style.height='100px';

div1.style.backgroundColor='#27474e';
table.style.backgroundColor='#cd8b76';
}

function ableitung(){
  let a = document.getElementById("userInput").value;
  let b = document.getElementById("userInput1").value;
  if(b==0&&a==0){
alert('warum?');
return;
  }
  else if(a==0){
    alert('Die erste Ableitung f`x=0');
  }
  else{
alert('Die erste Ableitung f`x='+a+'*e^x');
  }
  if(a!=0){
  ctx.fillStyle = "#cd8b76";
    let x=-10;
    while(x<10){
        y=(a*Math.pow(Math.E,x));
    
    ctx.fillRect(300+30*x,300+(1-30*y),2,2);
    
    x=x+0.001;
    
    
    } 
  }

}
function menue(){
  if (div1.style.left === "-70%") {
    div1.style.left = "0%";
  } else {
    div1.style.left = "-70%";
  }

}