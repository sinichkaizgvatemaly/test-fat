// Функция для выполнения поиска при нажатии на кнопку
function searchFood() {
	const query = document.getElementById('searchInput').value.toLowerCase(); // Получаем введенный текст
	if (query.length < 1) {
		 // Если поле поиска пустое, очищаем результаты
		 document.getElementById('searchResults').innerHTML = '';
		 return;
	}

	// Отправляем запрос на сервер для поиска
	fetch(`https://6725230fc39fedae05b40910.mockapi.io/fat_Alien/calories?name=${query}`)
		 .then(response => response.json()) // Преобразуем ответ в JSON
		 .then(data => {
			  const resultsContainer = document.getElementById('searchResults');
			  resultsContainer.innerHTML = ''; // Очищаем предыдущие результаты

			  if (data.length > 0) {
					// Если результаты найдены, отображаем их
					data.forEach(product => {
						 const resultItem = document.createElement('div');
						 resultItem.classList.add('search-result-item');
						 resultItem.innerHTML = `
							  <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
						 `;
						 resultsContainer.appendChild(resultItem);
					});
			  } else {
					// Если результатов нет, показываем сообщение
					resultsContainer.innerHTML = '<p>Продукты не найдены</p>';
			  }
		 })
		 .catch(error => {
			  console.error('Ошибка при поиске:', error);
			  document.getElementById('searchResults').innerHTML = '<p>Произошла ошибка при поиске.</p>';
		 });
}

// Привязка функции поиска к кнопке "Найти"
document.getElementById('searchBtn').addEventListener('click', searchFood);
