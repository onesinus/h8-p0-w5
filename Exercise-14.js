function changeVocals (str) {
	//code di sini
	let arrVocal = ["a", "b", "i", "j", "u", "v", "e", "f", "o", "p", "A", "B", "I", "J", "U", "V", "E", "F", "O", "P"];
	const getNextLetter = letter => {
		switch(letter){
			case "a":
			case "i":
			case "u":
			case "e":
			case "o":			
			case "A":
			case "I":
			case "U":
			case "E":
			case "O":
				for(let h = 0; h < arrVocal.length; h++){
					if(letter === arrVocal[h]){
						return arrVocal[h+1];	
					}
				}
				break;				
		}
		return letter;
	}

	let newStr = "";
	for(let i = 0; i < str.length; i++){
		newStr += getNextLetter(str[i]);
	}
	return newStr;
}

function reverseWord (str) {
	//code di sini
	let newStr = "";
	for(let j = str.length -1; j >= 0 ; j--){		
		newStr += str[j];
	}
	return newStr;
}

function setLowerUpperCase (str) {
	//code di sini
	let lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	let upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

	let newStr = "";	
	for(let k = 0; k < str.length; k++){
		let newLetter = "";
		for(let l = 0; l < lowerLetters.length; l++){
			if(str[k] === lowerLetters[l]){
				newLetter = upperLetters[l];
				break;
			}else if(str[k] === upperLetters[l]){
				newLetter = lowerLetters[l];				
				break;
			}else{
				newLetter = str[k];
			}
		}
		newStr += newLetter;
		
	}
	return newStr;
}

function removeSpaces (str) {
	//code di sini
	let newStr = "";
	for(let m = 0; m < str.length; m++){
		if(str[m] != " "){
			newStr += str[m];	
		}		
	}
	return newStr;
}

function passwordGenerator (name) {
	//code di sini
	let vocalChanged	= changeVocals(name);
	let reverseStr		= reverseWord(vocalChanged);
	let reverseLetter	= setLowerUpperCase(reverseStr);
	let noSpaces 		= removeSpaces(reverseLetter);
	
	return name.length > 4 ? noSpaces : "Minimal karakter yang diinputkan adalah 5 karakter";
	
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter' 
