function loadProducts() {
	const products = JSON.parse(localStorage.getItem('products'));

	// Проверяем, есть ли данные о продуктах в LocalStorage
	if (products && products.length > 0) {
		 // Получаем блок для отображения продуктов
		 const mainContainer = document.querySelector('.main');

		 // Перебираем все продукты и создаем HTML-контент для каждого
		 products.forEach(product => {
			  const productBlock = document.createElement('div');
			  productBlock.classList.add('product-block'); // Добавляем класс для стилей

			  // Вставляем информацию о продукте
			  productBlock.innerHTML = `
					<h3>${product.name}</h3>
			  `;

			  // Добавляем продукт в контейнер
			  mainContainer.appendChild(productBlock);
		 });
	} else {
		 // Если продуктов нет, показываем сообщение
		 const mainContainer = document.querySelector('.main');
		 mainContainer.innerHTML = '<p>Продукты не найдены.</p>';
	}
}

// Загружаем продукты при загрузке страницы
document.addEventListener('DOMContentLoaded', loadProducts);