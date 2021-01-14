function useRequest(url, callback){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);

	//Добавляем обработчик ответа сервера 
	xhr.onload = function(){
		if(xhr.status != 200){// ошибка?
			//Если статус не 200(указывает, что запрос выполнен успешно),
			//то обрабатываем отдельно 
			console.log('Статус ответа: ', xhr.status);
		} else {
			//Ответ мы получаем в формате JSON
			//

			//
			const result = JSON.parse(xhr.response);
			if(callback){
				callback(result)
			}
		}
	};

	//Добавляем обработчик процесса загрузки 
	xhr.onprogress = function(event){
		//Выводим процесс загрузки 
		console.log(`Загруженно: ${event.loaded} из ${event.total}`)
	};

	//Добавляем обработчик ошибок
	xhr.onerror = function(){
		//Обрабатываем ошибку, не связанную с HTTP
		console.log('Ошибка! Статус ответа: ', xhr.status)
	};

	//send request
	xhr.send();
};

//
const resultNode = document.querySelector('.j-result');
//
const btnNode = document.querySelector('.j-btn-request');
//


function displayResult(apiData){
	let cards = "";

	apiData.forEach(item => {
		const cardBlock = `
			<div class = "card">
				<img src ="${item.download_url}" class = "card-item">
				<p>${item.author}</p>
			</div>
		`;
		cards = cards + cardBlock;
	});

	resultNode.innerHTML = cards;
}

btnNode.addEventListener('click', () => {
	const value = document.querySelector('input').value;
	console.log(value, Number(value));
	if(Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 10){
		useRequest(`https://picsum.photos/v2/list?limit=${value}`, displayResult)
	}else {
		const error = `<p>число вне диапазона от 1 до 10</p>`;
		resultNode.innerHTML = error;
	}
})