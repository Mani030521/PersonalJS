var counter = 0;

function add() {
    var counter = 0;
    function plus() {counter += 1;}
    console.dir(plus)
    plus();   
    return counter;
  }
console.dir(add)
add();
console.dir(add)
add();