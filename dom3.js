// rr
// https://www.youtube.com/watch?v=wK2cBMcDTss
// Brad - JavaScript DOM Crash Course - Part 3

console.log("Rrrr DOM3 js...:")

function buttonClick0a(){
  console.log("button onClick - old way");  // wpisany onClick w HTML
}

// var button1 = document.getElementById('button1').addEventListener('click', function(){
//   console.log('definicja funkcji w linii');
// });



var button1 = document.getElementById('button1').addEventListener('click', bClick12);

function bClick11(){
  console.log('definicja funkcji osobno.');
  document.getElementById('header-title').textContent='RR new textContent';
  //document.querySelector('#header-title');
  document.querySelector('#main').style.backgroundColor='#a0a0f0'; //niebieskawy

  var newDiv = document.createElement('span'); //div
  newDiv.id='hello101';
  newDiv.className='hello';
  newDiv.appendChild( document.createTextNode('Hello DIV 101--') );

  var container = document.querySelector('header .container');
  var h1 = document.querySelector('header h1');
  console.log(h1);
  newDiv.style.fontSize='20px';
  container.insertBefore( newDiv, h1);

  //container.appendChild( newDiv);  // wpisze lub przeniesie na koncu

}

function bClick12(e){
  //console.log(e);
  
}

console.log('xx');
//xx