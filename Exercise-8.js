function cariPelaku(str) {
	// you can only write your code here!
	let regexPattern = /abc/g;
	let arrAbc       = str.match(regexPattern);
	if(arrAbc){
		return arrAbc.length;
	}else{
		return 0;	
	}
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2

