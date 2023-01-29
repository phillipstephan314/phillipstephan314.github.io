const cn = document.getElementById("canvas");
var ctx = cn.getContext("2d");
let z=1;
while(z<60){
ctx.fillRect(30*z,300,3,3);
ctx.fillRect(300,30*z,3,3);
z++;
}
function draw(){
    let a = document.getElementById("userInput").value;
    let b = document.getElementById("userInput1").value;
    let c = document.getElementById("userInput2").value;
    let d = document.getElementById("userInput3").value;  
    ctx.clearRect(0,0,600,600);
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
    y=a*Math.pow(x,b)+c*Math.pow(x,d);

ctx.fillRect(300+30*x,300+(1-30*y),2,2);
if(Math.abs(Math.abs(a)+Math.abs(b)+Math.abs(c)+Math.abs(d))>20){
x=x+0.00015;
}
else if(Math.abs(Math.abs(a)+Math.abs(b)+Math.abs(c)+Math.abs(d))>10){
    x=x+0.0003;
}
else{
x=x+0.001;
}

} 

}

function Null(){
    let a = document.getElementById("userInput").value;
    let b = document.getElementById("userInput1").value;
    let c = document.getElementById("userInput2").value;
    let d = document.getElementById("userInput3").value;  
let NS = Math.pow((-c/a),(1/(b-d)));
let NSs = Nsrund.toString();
let Nsrund = Math.round((NS + Number.EPSILON) * 100)/100;
alert('NUllstelle der Funktion liegt bei S('+NSs);

}
function chBackcolor() {
   document.body.style.background = '#FCEEF5';
	document.div1.style.background = 'white';
}
