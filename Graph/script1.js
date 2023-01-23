var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
let a=0;
while(a<40){
ctx.fillRect(20*a,200,1,1);
ctx.fillRect(200,20*a,1,1);
a++;
}

let x=-200;
while(x<200){
y=x*x*x;

ctx.fillRect(200+20*x,200+(1-20*y),1,1);
x=x+0.01;;
}