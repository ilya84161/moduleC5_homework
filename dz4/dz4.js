//alert('Привет, мир!');

//const vihod = document.querySelector ('.vihod');
const knopka = document.getElementById('zapros_kartinki');
const kartinki = document.querySelector('.kartinki');
let url_response = '';
function f3(){
	const pervoe_pole = Number (document.querySelector('.pervoe_pole').value);
	const vtoroe_pole = Number (document.querySelector ('.vtoroe_pole').value);
	//vihod.innerHTML = `${pervoe_pole}    ${vtoroe_pole}`;
	//console.log (pervoe_pole);
	if ((pervoe_pole < 301) && (pervoe_pole > 99)&&(vtoroe_pole < 301) && 
		(vtoroe_pole > 99)&&(Number.isFinite (pervoe_pole))&&(Number.isFinite (vtoroe_pole) )){
		alert ('размеры заданы верно');
		//fetch('https://picsum.photos/v2/list/?limit=5')
		fetch (`https://picsum.photos/${pervoe_pole}/${vtoroe_pole}`)
			.then ((response) => {
				//console.log(response);
				url_response = response.url;
				//console.log('url= ', url_response)
				kartinki.innerHTML = `<img src="${url_response}" alt="должна быть картинка">`})
			//.then ((data) => {console.log (data);})
			.catch ((error) => {console.log('error1', error)});
	}
	else {
		alert ('одно из чисел вне диапазона от 100 до 300');
	}

}
knopka.addEventListener("click", f3); 





//«одно из чисел вне диапазона от 100 до 300»