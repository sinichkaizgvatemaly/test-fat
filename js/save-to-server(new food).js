// Функция для вычисления калорий
function calcCalories(protein, carbs, fats) {
	return (protein * 4) + (carbs * 4) + (fats * 9); // Белки и углеводы по 4 ккал, жиры по 9 ккал
}

// Функция для сохранения данных на сервер
function saveProductToServer(name, protein, carbs, fats, ccal) {
	const productData = {
		 name: name,
		 fats: fats,
		 protein: protein,
		 carbs: carbs,
		 ccal: ccal
	};

	fetch('https://6725230fc39fedae05b40910.mockapi.io/fat_Alien/calories', {
		 method: 'POST',
		 headers: {
			  'Content-Type': 'application/json',
		 },
		 body: JSON.stringify(productData)
	})
	.then(response => response.json())
	.then(data => {
		 console.log('Продукт успешно сохранен:', data);
		 alert('Продукт успешно сохранен!');
	})
	.catch(error => {
		 console.error('Ошибка при сохранении:', error);
		 alert('Произошла ошибка при сохранении.');
	});
}

// Функция для загрузки данных с сервера (если такие есть)
function loadSavedCalories() {
	fetch('https://6725230fc39fedae05b40910.mockapi.io/fat_Alien/calories')
	.then(response => response.json())
	.then(data => {
		 if (data.length > 0) {
			  // Если данные есть на сервере, отображаем их в calories__value
			  document.getElementById('totalMyCcal').textContent = `${data[0].ccal} ккал`;
		 }
	})
	.catch(error => {
		 console.error('Ошибка при загрузке данных с сервера:', error);
	});
}

// Функция для обновления отображаемого количества калорий
function updateCalories() {
	const proteinValue = parseFloat(document.getElementById('protein').value) || 0;
	const carbsValue = parseFloat(document.getElementById('carbs').value) || 0;
	const fatsValue = parseFloat(document.getElementById('fats').value) || 0;
	const totalCalories = calcCalories(proteinValue, carbsValue, fatsValue);
	document.getElementById('totalMyCcal').textContent = `${totalCalories} ккал`;
}

// Загрузка данных с сервера при загрузке страницы
document.addEventListener('DOMContentLoaded', loadSavedCalories);

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
