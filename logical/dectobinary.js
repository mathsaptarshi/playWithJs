
function decToBinary(n) {
	let binary = "";
  let number = n;
	if(n==0){
		return	0;
	}
	while(number>0){
		binary = (number%2) + binary;
		number = Math.floor(number/2);
	}
	return binary;
}
let res = decToBinary(10.22);
console.log("Binary representation:",res);