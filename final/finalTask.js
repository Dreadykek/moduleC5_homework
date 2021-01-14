//
const btnNode = document.querySelector(".j-btn");
//
const resultNode = document.querySelector(".j-result-field");

function foo(){
	if (localStorage.getItem("cards") != null){
		resultNode.innerHTML = localStorage.getItem("cards");
	}
};

foo();

const useRequest = (page, limit) => {
	fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
		.then((response)=>{
			console.log('response', response);
			return response.json()
		})
		.then((data)=>{
			let cards = "";
			data.forEach(item =>{
				console.log(item.url);
				console.log(item.author);
				const cardBlock = 
				`
				<div class = "card">
					<img src="${item.download_url}" class = "card-item">
					<p>${item.author}</p>
				</div>
				`;
				cards = cards + cardBlock;
			});
			
			resultNode.innerHTML = cards;

			localStorage.setItem("cards", cards);
		})
		.catch(() => { console.log('error') });
} 

btnNode.addEventListener('click', () => {
	let page = document.querySelector('.j-input-page').value;
	let limit = document.querySelector('.j-input-limit').value; 

	console.log(page, limit);

	if (Number(limit) >= 1 && Number(limit) <=10 && 
		Number(page) >= 1 && Number(page) <=10 && 
		Number.isInteger(Number(limit)) && Number.isInteger(Number(page)))
	{
		useRequest(page, limit);
	} else {
		resultNode.innerHTML = "<p>Одно из чисел вне диапазона от 1 до 10</p>"
	}
})