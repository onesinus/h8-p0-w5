function sorting(arrNumber) {
	// code di sini
	for(let h = 0; h < arrNumber.length; h++){
		for(let i = 0, j = 1; i < arrNumber.length, j < arrNumber.length; i++, j++){
			if(arrNumber[i] > arrNumber[j]){
				let tempI = arrNumber[i];
				arrNumber[i] = arrNumber[j];
				arrNumber[j] = tempI;
			}
		}
	}
	return arrNumber;
}

function getTotal(arrNumber) {
	  // code di sini
	let angkaTertinggi 	= arrNumber[arrNumber.length - 1];
	let totalAngkaTertinggi	= 0;
	for(let k = 0; k < arrNumber.length; k++){
		if(arrNumber[k] === angkaTertinggi){
			totalAngkaTertinggi++;
		}
	}
	return totalAngkaTertinggi > 0 ? `angka paling besar adalah ${angkaTertinggi} dan jumlah kemunculan sebanyak ${totalAngkaTertinggi} kali`: '';
}


function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
