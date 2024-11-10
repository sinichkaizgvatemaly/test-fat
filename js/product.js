window.addEventListener('DOMContentLoaded', () => {
	// Получаем id продукта из URL
	const urlParams = new URLSearchParams(window.location.search);
	const productId = urlParams.get('id');

	if (productId) {
		 // Запрашиваем данные о продукте по id
		 fetch(`https://6725230fc39fedae05b40910.mockapi.io/fat_Alien/calories/${productId}`)
			  .then(response => response.json()) // Преобразуем ответ в JSON
			  .then(product => {
					// Отображаем данные о продукте
					document.getElementById('productName').textContent = product.name;
					document.getElementById('protein').textContent = product.protein;
					document.getElementById('fats').textContent = product.fats;
					document.getElementById('carbs').textContent = product.carbs;
					document.getElementById('ccal').textContent = product.ccal;
			  })
			  .catch(error => {
					console.error('Ошибка при получении данных о продукте:', error);
					document.getElementById('productDetails').innerHTML = '<p>Произошла ошибка при загрузке данных.</p>';
			  });
	} else {
		 // Если id продукта нет, показываем ошибку
		 document.getElementById('productDetails').innerHTML = '<p>Продукт не найден.</p>';
	}
});
