console.log("start")
var n = 10;

var str0 = "";
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        str0 += i+''+j+' '
        // str0 += j
    }
    str0 +="\n"   /* To print in console  */
    // str +="<br>"    /* To print in html  */
}
console.log(str0)

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
var str2 = "";
for(let i=0;i<n;i++){
    for(let j=0;j<i;j++){
        str2 += "*"
    }
    str2 += "\n"
}

console.log(str2)

// 4
let str4 = "";
for(let i = 0; i<=n; i++){
    for(let j = 0; j<i; j++){
        if(i === n) {
            str4 += "*";
          }
          else {
            if (j == 0 || j == i - 1) {
              str4 += "*";
            }
            else {
              str4 += " ";
            }
          }
    }
    str4 += "\n"
}

console.log(str4)