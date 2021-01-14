//
const btnNode = document.querySelector(".j-btn");
//
const resultNode = document.querySelector(".j-result-field");

const useRequest = (height, width) => {
	fetch(`https://picsum.photos/${height}/${width}`)
		.then((response)=>{
			console.log('response', response);
			return response.url;
		})
		.then((url)=>{
			resultNode.innerHTML = 
			`
			<div>
				<img src="${url}">
			</div>
			`;
		})
		.catch(() => { console.log('error') });
} 

btnNode.addEventListener('click', () => {
	let height = document.querySelector('.j-input-height').value;
	let width = document.querySelector('.j-input-width').value; 

	console.log(height, width);

	if (Number(width) >= 100 && Number(width) <=300 && 
		Number(height) >= 100 && Number(height) <=300 && 
		Number.isInteger(Number(width)) && Number.isInteger(Number(height)))
	{
		useRequest(height, width);
	} else {
		resultNode.innerHTML = "<p>Одно из чисел вне диапазона от 100 до 300</p>"
	}
})