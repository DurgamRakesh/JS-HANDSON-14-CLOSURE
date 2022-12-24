function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

//<------------------------------------------------->

(function myfun() {
    let count = 0
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

// //<------------------------------------------------->

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }
  
//<------------------------------------------------->

function outerf(len){

    function innerf(b){
      let area = len * b;
      console.log(area)
    }
    return innerf(5);
}

outerf(10);

// //<------------------------------------------------->

function outer(){
    var count = 0;
    function inner(){
     return count+=1;
    }
    return inner();
}
var nesw  = outer()
console.log(nesw);
console.log(nesw);

// //<------------------------------------------------->

var a = 12;
(function () {
  alert(a);
})();

//<------------------------------------------------->

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();

//<------------------------------------------------->

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
    "outerArg = " + outerArg + "\n" +
    "innerArg = " + innerArg + "\n"+
    "outerVar = " + outerVar + "\n" +
    "innerVar = " + innerVar + "\n" +
    "globalVar = " + globalVar);
    
    })(456);
})(123);


