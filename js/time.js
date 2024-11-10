// Функция для обновления текущей даты и времени
function updateDate() {
	const date = new Date(); // Получаем текущую дату и время
	const options = {
		 year: 'numeric',
		 month: 'long',
		 day: 'numeric',
		 hour12: false,
	};
	const dateBlock = document.getElementById('date-block'); // Находим элемент для отображения даты
	if (dateBlock) {
		 dateBlock.textContent = date.toLocaleString('ru-RU', options); // Обновляем текст с датой в формате "день месяц год, часы:минуты:секунды"
	}
}

// Слушаем событие 'DOMContentLoaded', чтобы выполнить код после загрузки страницы
document.addEventListener('DOMContentLoaded', function () {
	// Обновление даты при загрузке страницы и каждую секунду
	updateDate(); // Обновляем дату один раз при загрузке страницы
	setInterval(updateDate, 1000); // Обновляем дату каждую секунду (1000 миллисекунд)
});
