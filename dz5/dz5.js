//alert('Привет, мир!');

//const vihod = document.querySelector ('.vihod');
const pervoe_pole = document.querySelector('.pervoe_pole');
const vtoroe_pole = document.querySelector ('.vtoroe_pole');
const knopka = document.getElementById('zapros_kartinki');
//const sbros = document.getElementById('clearlocalstorage');
const kartinki = document.querySelector('.kartinki');
let url_response = '';
if (localStorage.getItem('vstavka')) {
		kartinki.innerHTML = localStorage.getItem('vstavka');
	}
function validnost (indata) {
	let indata_number = Number(indata.value);
	if ((indata_number > 0)&&(indata_number < 11)&&(Number.isFinite(indata_number))) {
		//alert ('Ok')
		return true;
	}
	else {
		//const label_text = document.querySelector(`[for="${indata.id}"]`).textContent;
		//alert(`${label_text} вне диапазона от 1 до 10`);
		return false;
	}
}
function f3(){

	//vihod.innerHTML = `${pervoe_pole}    ${vtoroe_pole}`;
	//console.log (pervoe_pole);
	const validnost1 = validnost(pervoe_pole);
	const validnost2 = validnost(vtoroe_pole);
	if ((validnost1) && (validnost2)) {
		alert ('данные заданы верно');
		//fetch('https://picsum.photos/v2/list/?limit=5')
		fetch (`https://picsum.photos/v2/list?page=${pervoe_pole.value}&limit=${vtoroe_pole.value}`)
			.then ((response) => {
				//console.log(response);
				//url_response = response.url;
				//console.log('url= ', url_response)
				//kartinki.innerHTML = `<img src="${url_response}" alt="должна быть картинка">`
				return response.json();})
			.then ((data) => {
				//url_response = data.url;
				//console.log('url= ', url_response)
				//kartinki.innerHTML = `<img src="${url_response}" alt="должна быть картинка">`
				console.log (data);
				function displayresult (argument) {
					let cards = '';
					argument.forEach (item => {
						const card =`<div class="card"><img src="${item.download_url}" class="card-image"> <p>${item.author}</p> </div>`;
						cards = cards + card;
					});
					//const resultNode = document.querySelector (".result");
					kartinki.innerHTML = cards;
					localStorage.setItem ('vstavka', cards);
					console.log('moya vstavka', localStorage.getItem('vstavka'));
					}
				displayresult(data);

				})
			.catch ((error) => {console.log('error1', error)});
	}
	else {
		if (!(validnost1) && !(validnost2)){
			const label_text1 = document.querySelector(`[for="${pervoe_pole.id}"]`).textContent;
			const label_text2 = document.querySelector(`[for="${vtoroe_pole.id}"]`).textContent;
			alert(`${label_text1} и ${label_text2} вне диапазона от 1 до 10`);
		}
		else{
			if (!(validnost1)){
			const label_text1 = document.querySelector(`[for="${pervoe_pole.id}"]`).textContent;
			alert(`${label_text1} вне диапазона от 1 до 10`);
			}
			else {
				const label_text2 = document.querySelector(`[for="${vtoroe_pole.id}"]`).textContent;
				alert(`${label_text2} вне диапазона от 1 до 10`);
			}
		}
	}

}
knopka.addEventListener("click", f3); 
//sbros.addEventListener("click", localStorage.clear());





//«одно из чисел вне диапазона от 100 до 300»