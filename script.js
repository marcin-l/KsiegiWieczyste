function handleWydzialChange() {	
	var wydzial = document.getElementById("kodWydzialuInput").value;
	var kw = document.getElementById("numerKsiegiWieczystej").value;
	var cyfraKontrolna = getCheckDigit(wydzial, kw);
	if(cyfraKontrolna != false || cyfraKontrolna === 0) {
		document.getElementById("cyfraKontrolna").value = cyfraKontrolna;
	}
}

var sel = document.getElementById("numerKsiegiWieczystej");

/*sel.addEventListener("change", function(e){
	handleWydzialChange();
});*/

sel.addEventListener("blur", function(e){
	handleWydzialChange();
});


// Create event and fire it
var changeEvent = document.createEvent("HTMLEvents");
changeEvent.initEvent("blur", true, true);
sel.dispatchEvent(changeEvent);

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

charMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'W', 'Y', 'Z'];

function getCharMap(inChar) {
	for (cm=0; cm<charMap.length; cm++) {
		if (inChar.toUpperCase() == charMap[cm])
			return cm;
	}
	return -1;
}

function getCheckDigit(wydzial, kw) {
	if (wydzial == null || kw == null)
		return false;
	if (wydzial.length != 4 || kw.length < 4)
		return false;
	
	kw = pad(kw, 8);
	//alert(wydzial);
	if(getCharMap(wydzial[0]) < 10 ||
		getCharMap(wydzial[1]) < 10 ||
		getCharMap(wydzial[2]) < 0 ||
		getCharMap(wydzial[2]) > 9 ||
		getCharMap(wydzial[3]) < 10)
			return false;
		

	for (i=0; i<kw.length; i++) {
		if (getCharMap(kw[i]) < 0 || getCharMap(kw[i]) > 9)
			return false;
	}
	
	mulSum = getCharMap(wydzial[0]) + 3 *getCharMap(wydzial[1]) + 7*getCharMap(wydzial[2]) + getCharMap(wydzial[3]) + 3*getCharMap(kw[0]) +
		7*getCharMap(kw[1]) + getCharMap(kw[2]) + 3*getCharMap(kw[3]) +	7*getCharMap(kw[4]) + getCharMap(kw[5]) +3*getCharMap(kw[6]) + 7*getCharMap(kw[7]);
	
	return mulSum %= 10;
}