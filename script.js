let b1= document.getElementById('hell');
let b2= document.getElementById('dunkel');
let div1 = document.getElementById('div1');
let links = document.getElementById('links');
let knopf = document.getElementById('b1');
let table = document.getElementById('table');
let p1 = document.getElementById('p11');
let input = document.getElementsById('userinput');
let input1 = document.getElementsById('userinput1');
let input2 = document.getElementsById('userinput2');
let input3 = document.getElementsById('userinput3');
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