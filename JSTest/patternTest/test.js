let n=10;
var k = "";
function pattern(n){
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      k += "*"
    }
      k += "<br>"
  }
  console.log(k)
}
pattern(n)
document.getElementById("pattern").innerHTML = k;