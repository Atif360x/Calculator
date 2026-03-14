let one = document.getElementById('jsOne');
let two = document.getElementById('jsTwo');
let three = document.getElementById('jsThree');
let four = document.getElementById('jsFour');
let five = document.getElementById('jsFive');
let six = document.getElementById('jsSix');
let seven = document.getElementById('jsSeven');
let eight = document.getElementById('jsEight');
let nine = document.getElementById('jsNine');
let zero = document.getElementById('jsZero');
let add = document.getElementById('jsAdd');
let sub = document.getElementById('jsSub');
let mul = document.getElementById('jsMul');
let div = document.getElementById('jsDiv');
let equal = document.getElementById('jsEqual');
let clear = document.getElementById('jsClear');


let display = document.getElementById('jsDisplay');

one.addEventListener('click', () => { display.value += '1'; 
  adjustFont();
});

two.addEventListener('click', () => { display.value += '2'; 
  adjustFont();
});

three.addEventListener('click', () => { display.value += '3'; 
  adjustFont(); });
  
four.addEventListener('click', () => { display.value += '4'; 
  adjustFont();
});

five.addEventListener('click', () => { display.value += '5'; adjustFont();});

six.addEventListener('click', () => { display.value += '6'; adjustFont();});

seven.addEventListener('click', () => { display.value += '7';adjustFont(); });

eight.addEventListener('click', () => { display.value += '8';adjustFont(); });

nine.addEventListener('click', () => { display.value += '9'; adjustFont();});

zero.addEventListener('click', () => { display.value += '0'; adjustFont();});

add.addEventListener('click', () => { display.value += '+'; });
sub.addEventListener('click', () => { display.value += '-'; });
mul.addEventListener('click', () => { display.value += '*'; });
div.addEventListener('click', () => { display.value += '/'; });
equal.addEventListener('click', () => { display.value = eval(display.value); });
clear.addEventListener('click', () => { display.value = ''; });


function adjustFont() {
  if (display.value.length > 9) {
    display.style.fontSize = '50px';
  } else if (display.value.length > 6) {
    display.style.fontSize = '60px';
  } else {
    display.style.fontSize = '80px';
  }
}