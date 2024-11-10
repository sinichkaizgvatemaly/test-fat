// Функция для сохранения данных на сервер
function saveToServer() {
	// Получаем значение калорий из блока с id 'totalCcal'
	const totalCalories = document.getElementById('totalCcal').textContent.replace(' ккал', '');

	// Отправляем данные на сервер
	fetch('https://6725230fc39fedae05b40910.mockapi.io/fat_Alien/clal', {
		 method: 'POST', // Тип запроса
		 headers: {
			  'Content-Type': 'application/json', // Отправляем JSON
		 },
		 body: JSON.stringify({ calories: totalCalories }) // Передаем данные в формате JSON
	})
	.then(response => response.json()) // Преобразуем ответ сервера в JSON
	.then(data => {
		 console.log('Данные успешно сохранены на сервере:', data);
		 alert('Данные успешно сохранены на сервере!');
		 
		 // После успешного сохранения обновляем значение в calories__value
		 document.getElementById('totalCcal').textContent = `${data.calories} ккал`;
	})
	.catch(error => {
		 console.error('Ошибка при сохранении данных на сервере:', error);
		 alert('Произошла ошибка при сохранении данных.');
	});
}

// Функция для загрузки данных с сервера при загрузке страницы (если такие есть)
function loadSavedCalories() {
	fetch('https://6725230fc39fedae05b40910.mockapi.io/fat_Alien/clal')
		 .then(response => response.json())
		 .then(data => {
			  if (data.length > 0) {
					// Если данные есть на сервере, отображаем их в calories__value
					document.getElementById('totalCcal').textContent = `${data[0].calories} ккал`;
			  }
		 })
		 .catch(error => {
			  console.error('Ошибка при загрузке данных с сервера:', error);
		 });
}

// Загрузка данных с сервера при загрузке страницы
document.addEventListener('DOMContentLoaded', loadSavedCalories);

// Привязываем функцию к кнопке "Сохранить"
document.querySelector('.save-to-server').addEventListener('click', saveToServer);
// Отправляем данные на сервер с помощью fetch
fetch('https://6725230fc39fedae05b40910.mockapi.io/fat_Alien/calories', {
	method: 'POST', // Тип запроса
	headers: {
		 'Content-Type': 'application/json', // Отправляем JSON
	},
	body: JSON.stringify(productData) // Преобразуем объект в JSON строку
})
.then(response => response.json()) // Преобразуем ответ сервера в JSON
.then(data => {
	console.log('Продукт успешно сохранен на сервере:', data);
	alert('Продукт успешно сохранен!');

	// Отображаем сохраненный продукт на странице
	const savedProductElement = document.getElementById('saved-product');
	savedProductElement.innerHTML = `<h3>Сохраненный продукт:</h3>
											  <p>Название: ${data.name}</p>
											  <p>Белки: ${data.protein} г</p>
											  <p>Жиры: ${data.fats} г</p>
											  <p>Углеводы: ${data.carbs} г</p>
											  <p>Калории: ${data.ccal} ккал</p>`;
})
.catch(error => {
	console.error('Ошибка при сохранении данных на сервере:', error);
	alert('Произошла ошибка при сохранении данных.');
});


// Функция для расчета и обновления калорий
function updateCalories() {
const proteinValue = parseFloat(document.getElementById('protein').value) || 0;
const carbsValue = parseFloat(document.getElementById('carbs').value) || 0;
const fatsValue = parseFloat(document.getElementById('fats').value) || 0;

const totalCalories = calcCalories(proteinValue, carbsValue, fatsValue);

// Обновляем отображаемое количество калорий
document.getElementById('totalMyCcal').textContent = `${totalCalories} ккал`;
}

// Слушаем изменения в полях ввода и обновляем калории
document.getElementById('protein').addEventListener('input', updateCalories);
document.getElementById('carbs').addEventListener('input', updateCalories);
document.getElementById('fats').addEventListener('input', updateCalories);

// Привязываем функцию сохранения к кнопке "Сохранить продукт"
document.getElementById('saveButton').addEventListener('click', () => {
const name = document.getElementById('nameProdukt').value;
const protein = parseFloat(document.getElementById('protein').value) || 0;
const carbs = parseFloat(document.getElementById('carbs').value) || 0;
const fats = parseFloat(document.getElementById('fats').value) || 0;

// Проверяем, что название продукта не пустое
if (!name) {
	alert('Пожалуйста, введите название продукта.');
	return;
}

// Вычисляем калории для продукта
const ccal = calcCalories(protein, carbs, fats);

// Сохраняем данные на сервер
saveProductToServer(name, protein, carbs, fats, ccal);
});