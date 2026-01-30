let n = 8765;
let rev = 0;
let flag = false;
if(n<0){
  flag = true;
  n = Math.abs(n);
}
while(n>0){
  rev = rev*10 + (n%10);
  n = Math.floor(n/10);
}
if(flag){
  rev = -rev
}
console.log(rev)