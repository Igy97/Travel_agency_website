
function provera() {

	var uzorakkor_ime = document.Forma.ime.value;
	var uzorakkor_prezime = document.Forma.prezime.value;
	var uzorakemail = document.Forma.email.value;
	var uzorakmobilni = document.Forma.telefon.value;
	var uzorakdatum = document.Forma.datum.value;
	var uzorakdestinacija = document.Forma.destinacija.value;

	if (uzorakkor_ime === "" || uzorakkor_ime === null) {
		alert("Niste uneli korisnicko ime!");
		return false;
	} else if(uzorakkor_prezime === "" || uzorakkor_prezime === null) {
		alert("Niste uneli prezime!");
		return false;
	} else if (uzorakemail === "" || uzorakemail === null) {
		alert("Niste uneli e-mail adresu!");
		return false;
	} else if (uzorakmobilni === "" || uzorakmobilni === null) {
		alert("Niste uneli mobilni telefon!")
		return false;
	} else if (uzorakdatum === "" || uzorakdatum === null) {
		alert("Niste uneli datum!");
		return false;
	} else if (uzorakdestinacija === "" || uzorakdestinacija === null) {
		alert("Niste uneli destinaciju!");
		return false;
	} else {
		alert("Uspesno ste poslali formu!");
		return true;
	}
}


