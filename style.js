var x = 9;

document.getElementById('output-area').innerHTML = x;

function button1() {
  document.getElementById('output-area').innerHTML = ++x;
}

var a = 12;

document.getElementById('output-area2').innerHTML = a;

function button2() {
  document.getElementById('output-area2').innerHTML = ++a;
}

var b = 9;

document.getElementById('output-area3').innerHTML = b;

function button3() {
  document.getElementById('output-area3').innerHTML = ++b;
}