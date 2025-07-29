function gcd(x,y){
  x= Math.abs(x);
  y= Math.abs(y);
  while(y){
    var t = y;
    y= x%y;
    x=t;
  }
  return x;
}
console.log(gcd(50,20))