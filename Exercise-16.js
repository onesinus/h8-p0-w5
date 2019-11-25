function totalDigitRekursif(angka) {
	// you can only write your code here!
	let strAngka 			= angka + '';
	let indexAngka  		= 0;
	let totalPenjumlahanAngka	= 0;

	const jumlahkanAngka 	= angka => {
		if(indexAngka < strAngka.length){
			totalPenjumlahanAngka += parseInt(strAngka[indexAngka]);
			indexAngka++;
			return jumlahkanAngka(angka);
		}
		return totalPenjumlahanAngka;
	}

	return jumlahkanAngka(angka);
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
