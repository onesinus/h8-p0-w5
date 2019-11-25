function kaliTerusRekursif(angka) {
	// you can only write your code here!
	let strAngka    	= angka.toString();
	let totalAngka		= strAngka.length;
	let totalPerkalian	= parseInt(strAngka[0]);
	let indexAngka 		= 1;
	
	const kaliHinggaSatuDigit = () => {
		if(indexAngka < totalAngka){
			totalPerkalian *= parseInt(strAngka[indexAngka]);
			indexAngka++;
			return kaliHinggaSatuDigit();
		}
		else if(totalPerkalian.toString().length > 1){ // Jika setelah perhitungan pertama ternyata masih 2 digit
			strAngka 	= totalPerkalian.toString();
			indexAngka	= 1;
			totalAngka	= strAngka.length;
			totalPerkalian	= strAngka[0];
			return kaliHinggaSatuDigit();
		}
	}

	kaliHinggaSatuDigit();
	return totalPerkalian;			


}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6 
