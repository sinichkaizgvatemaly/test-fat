function addProduct() {
	const product = {
		 name: 'Банан',        // Название продукта

	};

	// Получаем массив существующих продуктов из LocalStorage, если они есть
	const existingProducts = JSON.parse(localStorage.getItem('products')) || [];

	// Добавляем новый продукт в массив
	existingProducts.push(product);

	// Сохраняем обновленный список продуктов в LocalStorage
	localStorage.setItem('products', JSON.stringify(existingProducts));

	// Перенаправляем на страницу home.html
	window.location.href = 'home.html';
}

// Привязываем обработчик события к кнопке "Добавить"
document.getElementById('addButton').addEventListener('click', addProduct);