function multiply(x,y) {
    console.log(x);
    console.log(y);
}
b = multiply(2,3);
console.log(b);
//console.log: 2,3


function multiply(x,y) {
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));
//console.log: 10


var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++) {
   i = i + 3; 
   console.log(i);
}
//console.log: 3,7


var x=15;
console.log(x);
function awesome(){
    var x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);
//console.log: 15,15,10,15


for(var i=0; i<15; i+=2) {
    console.log(i);
 }
//console.log: 0,2,4,6,8,10,12,14


for(var i=0; i<3; i++) {
    for(var j=0; j<2; j++) {      
        console.log(i*j);
    }
}
//console.log: 0,0,0,1,0,2


function looping(x,y) {
    for(var i=0; i<x; i++) {
        for(var j=0; j<x; j++) {        
            console.log(i*j);
        } 
    }
}
z = looping(3,3);
console.log(z);
//console.log: 0,0,0,0,1,2,0,2,4


function looping(x,y) {
    for(var i = 0 ; i<x ; i++) {
        for(var j=0; j<y; j++) {        
            console.log(i*j);
        } 
    }
    return x*y;
}
z = looping(3,5);
console.log(z);
//console.log: 0,0,0,0,0,0,1,2,3,4,0,2,4,6,8,15


function printUpTo(x) {
    if(x<=0){
        console.log(false);
        return false;
    }else{
        for(var i = 0 ; i <= x ; i++)
            console.log(i);
    }
    
}
printUpTo(1000);
  var y = printUpTo(-10); 
  console.log(y); 
//console.log: 0,1,2,3,4,5,6,7,,,,,,,,,,,,,etc,1000, false, false


function printSum(x) {
    var sum = 0;
    for(var i = 0 ; i <= x ; i++){
        console.log(i);
        sum = sum + i;
        console.log(sum);
    }
    return sum
}
  y = printSum(255)
  console.log(y)
//console.log: 0,0,1,1,2,3,3,6,4,10,5,15,6,21,,,,,,,,,,,,,,,etc, va a imprimir i del 0 al 255 y sum va a ir 
//cambiando por la suma de sum+1. 
//console.log: 32640


function printSumArray(x) {
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      sum = sum + x[i];
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); 
//console.log: 6


function largestElement(x) {
        var large = 0;
        for(var i = 0 ; i < x.length ; i++){
            if(x[i] > large){
                large = x[i];
            }
        }
        return large;
}
console.log(largestElement([1,30,5,7]));
//console.log: 30
