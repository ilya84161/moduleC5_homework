//alert('Привет, мир!');

function f3() {
	const dannie = Number(document.querySelector ('input').value);
	const url = `https://picsum.photos/v2/list?limit=${dannie}`;
	function f1() { alert ("число вне диапазона от 1 до 10") };
	function f2() {
		const xhr = new XMLHttpRequest();
		xhr.open ("GET", url, true);
		xhr.onload = function() {
			if (xhr.status != 200) {
				console.log('статус ответа: ', xhr.status);
			}
			else {
				const resultat = JSON.parse (xhr.response);
				console.log(resultat);
				function displayresult (argument) {
					let cards = '';
					argument.forEach (item => {
						const card =`<div class="card"><img src="${item.download_url}" class="card-image"> <p>${item.author}</p> </div>`;
						cards = cards + card;
					});
					const resultNode = document.querySelector (".result");
					resultNode.innerHTML = cards;
				}
				displayresult(resultat);
			}
		}
		xhr.send();

		console.log("20"); 
	};
	if ((dannie < 11) && (dannie > 0)) {
		f2();
	}
	else {
		f1();
	}
	}



//const btn = document.querySelector("button"); 

const btn = document.getElementById('btn');
btn.addEventListener("click", f3); 
 // В консоль выведется 2 2.
// Когда мы совершим клик по кнопке, то функция f1 попадет в очередь
// вызовов и выполнится. В результате в консоль выведется 1
