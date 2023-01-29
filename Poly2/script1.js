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
    y=(a*Math.pow(x,2)+b*Math.pow(x,1)+c*Math.pow(x,0));

ctx.fillRect(300+30*x,300+(1-30*y),2,2);
if(Math.abs(Math.abs(a)+Math.abs(b)+Math.abs(c))>20){
x=x+0.00015;
}
else if(Math.abs(Math.abs(a)+Math.abs(b)+Math.abs(c))>10){
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
let NS1 = (Math.sqrt(Math.pow(b,2)-4*a*c)-b)/(2*a);
let Nsrund1 = Math.round((NS1 + Number.EPSILON) * 100)/100;

let NS2 = ((-Math.sqrt(Math.pow(b,2)-4*a*c)-b)/(2*a));
let Nsrund2 = Math.round((NS2 + Number.EPSILON) * 100)/100;

if (Nsrund1){
    alert('Nullstellen der Funktion liegen bei S( '+Nsrund1+' / 0 ) und S( '+Nsrund2+' / 0 ) ');
}
else if(a==0,b!=0){
    alert('Nullstelle bei S( '+((-c)/b)+' / 0 )');
}
else if (Nsrund2){
    alert('Nullstellen der Funktion liegen bei S( '+Nsrund1+' / 0 ) und S( '+Nsrund2+' / 0 ) ');
}
else if (a!=0,b==0,c==0){
    alert('Nullstelle bei S( 0 / 0 )');
}

else {alert('Keine Nullstelle vorhanden');}

}
