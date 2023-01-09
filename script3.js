function draw() {
    let a = document.getElementById("userInput").value;
    let b = document.getElementById("userInput1").value;
    let c = document.getElementById("userInput2").value;
    let d = document.getElementById("userInput3").value;
  		const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,600,600);
z=10;
while(z<600){
ctx.fillStyle = "rgba(255, 0, 0, 1)";
    ctx.fillRect(z, 300, 1, 1);
    ctx.fillRect(300, z, 1, 1);
z=z+10;
}
let x=-100;
while(x<100){
y=a*Math.pow(x,b)+c*Math.pow(x,d);
ctx.fillStyle = "#FF10F0";
    ctx.fillRect(10*x+300, 10*((1-y))+290, 1, 1);
x=x+0.0001;
  }
}
}
