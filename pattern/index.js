console.log("start")
var n = 10;
// 1

var str = "";
for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
        str += "*"
    }
    str +="\n"   /* To print in console  */
    // str +="<br>"    /* To print in html  */
}
// document.getElementById("ptn1").innerHTML = str;
console.log(str)


// 2
var str1 = "";
for(let i = 0;i<n;i++){
    for(let j=0;j<n;j++){
        if(i==0 || i==n-1){
            str1 += "*"
        }
        else {
            if(j === 0 || j === n - 1) {
                str1 += "*";
              }
              else {
                str1 += " ";
              }
        }
    }
    str1 += "\n";
}
console.log(str1)

// 3