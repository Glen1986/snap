let str1 = "Snap";
let str2 = "Crackle";
let str3 = "Prime";

function insOdd(n){
  return n % 2 === 1;
}
function is5Multipler(n){
  return n % 5 === 0;
}
function isPrime(n){
  if(n < 2){
    return false;
  }
  for(let i = n - 1; i >= 2; i--){
    if(n % i === 0){
      return false
    }
  }
  return true
}
function snapCrackle(maxValue){
  let output = '';
        for(let i = 1; i <= maxValue; i++){
          if( insOdd(i) ){
            output += str1;
          }
          if(is5Multipler(i)){
            output += str2;
          }
          if(!(i % 2 === 1 || i % 5 === 0)){
            output += i;
          }
          output +=", "
        }
        return output
  }
let out = snapCrackle(15)
console.log(out);

function snapCracklePrime(maxValue){
  let output = [];
        for(let i = 1; i <= maxValue; i++){
          let msg='';
          if( insOdd(i) ){
            msg += str1;
          }
          if(is5Multipler(i)){
            msg += str2;
          }
          if (isPrime(i)){
            msg += str3
          }
          if(msg.length === 0){
            msg += i;
          }
          output.push(msg);
        }
        return output.join(', ')
  }
let prim = snapCracklePrime(25)
console.log(prim);

