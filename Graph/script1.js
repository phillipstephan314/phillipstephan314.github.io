const cn = document.getElementById("canvas");
var ctx = cn.getContext("2d");
let z=0;
while(z<40){
ctx.fillRect(20*z,200,1,1);
ctx.fillRect(200,20*z,1,1);
z++;
}
function draw(){

    let a = document.getElementById("userInput").value;
    let b = document.getElementById("userInput1").value;
    let c = document.getElementById("userInput2").value;
    let d = document.getElementById("userInput3").value;  
    ctx.clearRect(0,0,400,400);
    let z=0;
while(z<40){
ctx.fillRect(20*z,200,1,1);
ctx.fillRect(200,20*z,1,1);
z++;
}
    ctx.fillStyle = "black";
let x=-200;
while(x<200){
    y=a*Math.pow(x,b)+c*Math.pow(x,d);

ctx.fillRect(200+20*x,200+(1-20*y),1,1);
if(     Math.abs(Math.abs(a)+Math.abs(b)+Math.abs(c)+Math.abs(d))>10    ){
x=x+0.0005;
}
else{
x=x+0.001;
}

} 
var term;
function Expression(term){

return term;
write();
}
}

function write(){
    
console.log("y=");
}