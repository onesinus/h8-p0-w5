function makanTerusRekursif(waktu) {
	// you can only write your code here!
	let total = 0;
	const ambilMakanan = waktu => {
		if(waktu > 0){
			total++;
			return ambilMakanan(waktu -= 15);		
		}
		return total;
	}
	return ambilMakanan(waktu);
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0
