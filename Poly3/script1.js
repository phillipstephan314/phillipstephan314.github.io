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
function draw(){
    let a = document.getElementById("userInput").value;
    let b = document.getElementById("userInput1").value;
    let c = document.getElementById("userInput2").value;
    let d = document.getElementById("userInput3").value;
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
    y=(a*Math.pow(x,3)+b*Math.pow(x,2)+c*Math.pow(x,1)+d*Math.pow(x,0));

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

function Null(){
    let a = document.getElementById("userInput").value;
    let b = document.getElementById("userInput1").value;
    let c = document.getElementById("userInput2").value;
    let d = document.getElementById("userInput2").value;
let NS1 = (Math.sqrt(Math.pow(b,2)-4*a*c)-b)/(2*a);
let Nsrund1 = Math.round((NS1 + Number.EPSILON) * 100)/100;

let NS2 = ((-Math.sqrt(Math.pow(b,2)-4*a*c)-b)/(2*a));
let Nsrund2 = Math.round((NS2 + Number.EPSILON) * 100)/100;
if(a==0){

Nsrund1=((-c)/b);
Nsrund2=Nsrund1;
}
if(Nsrund1==Nsrund2){
    alert('Nullstelle bei S( '+Nsrund1+' / 0 )');
}
else if (Nsrund1){
    alert('Nullstellen der Funktion lieg bei S( '+Nsrund1+' / 0 ) und S( '+Nsrund2+' / 0 ) ');
}
else if (Nsrund2){
    alert('Nullstellen der Funktion liegen bei S( '+Nsrund1+' / 0 ) und S( '+Nsrund2+' / 0 ) ');
}
else if (a!=0,b==0,c==0){
    alert('Nullstelle bei S( 0 / 0 )');
}

else {alert('Keine Nullstelle vorhanden');}

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
    let c = document.getElementById("userInput2").value;
    if(a==0&&b==0&&c==0){
        alert('keine Funktion gegeben!')
        return;
    }
    ctx.fillStyle = "#22FF44";
    let x=-10;
    while(x<10){
        y=(3*a*Math.pow(x,2)+2*b*Math.pow(x,1)+c*Math.pow(x,0));
    
    ctx.fillRect(300+30*x,300+(1-30*y),2,2);
   
    x=x+0.001;
    
    } 
    if(a==0&&b==0){
        
        alert('Die erste Ableitung lautet f`(x)='+c) 
    }
    else if(a==0&&c==0){
    alert('Die erste Ableitung lautet f`(x)='+2*b+'x')
    }
    else if(b==0&&c==0){
    alert('Die erste Ableitung lautet f`(x)='+3*a+'x^2')  
    }
    else if(a==0){
        if(c<0){
            VORZEICHEN='';
        }
        else{
            VORZEICHEN='+';
        }
        alert('Die erste Ableitung lautet f`(x)='+2*b+'x'+VORZEICHEN+c)
    }
    else if(b==0){
        if(c<0){
            VORZEICHEN='';
        }
        else{
            VORZEICHEN='+';
        }
        alert('Die erste Ableitung lautet f`(x)='+3*a+'x^2'+VORZEICHEN+c)
    }
    else if(c==0){
        if(b<0){
            VORZEICHEN='';
        }
        else{
            VORZEICHEN='+';
        }
        alert('Die erste Ableitung lautet f`(x)='+3*a+'x^2'+VORZEICHEN+2*b+'x')
    }
    else{
        if(b<0){
            VORZEICHEN='';
        }
        else{
            VORZEICHEN='+';
        }
        if(c<0){
            VORZEICHEN2='';
        }
        else{
            VORZEICHEN2='+';
        }
        alert('Die erste Ableitung lautet f`(x)='+3*a+'x^2'+VORZEICHEN+2*b+'x'+VORZEICHEN2+c) 
    }
  }
  function menue(){
    if (div1.style.display === "none") {
      div1.style.display = "block";
    } else {
      div1.style.display = "none";
    }
  
  }