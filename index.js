number=10;
function add(){
    return (number+=5);
}

function subtract(){
    return (number-=5);
}
function multiply(){
    return (number*=5)
}
function divide(){
    return (number/=5)
}
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function increment(n){
    n++;
    return n;
}
function decrement(n){
     n--;
     return n;
}
function makeInt(n){
    return parseInt(n,10);
   
}
function preserveDecimal(n){
    return parseFloat(n);
}

add();
subtract();
multiply();
divide();
add(3,5);
subtract(8,3);
multiply(6,4);
divide(24,3);
increment(48);
decrement(276);
makeInt();
preserveDecimal();
