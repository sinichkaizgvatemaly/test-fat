// Функция для вычисления количества калорий
function calcCalories(protein, carbs, fats) {
	// Белки и углеводы дают по 4 калории на грамм, жиры — 9 калорий на грамм
	return (protein * 4) + (carbs * 4) + (fats * 9);
}

// Функция для расчета общего числа калорий
function calculateTotalCalories() {
	// Получаем значения из полей ввода для белков, углеводов и жиров.
	// Если введено не число или значение меньше 0, то будет установлено 0
	const proteinValue = isNaN(Number(document.getElementById('proteinInput').value)) || Number(document.getElementById('proteinInput').value) < 0 ? 0 : Number(document.getElementById('proteinInput').value);
	const carbsValue = isNaN(Number(document.getElementById('carbsInput').value)) || Number(document.getElementById('carbsInput').value) < 0 ? 0 : Number(document.getElementById('carbsInput').value);
	const fatsValue = isNaN(Number(document.getElementById('fatsInput').value)) || Number(document.getElementById('fatsInput').value) < 0 ? 0 : Number(document.getElementById('fatsInput').value);

	// Вычисляем общее количество калорий
	const totalCalories = calcCalories(proteinValue, carbsValue, fatsValue);

	// Обновляем отображаемые данные
	updateCalories(totalCalories);
}

// Функция для обновления отображения общего числа калорий
function updateCalories(totalCalories) {
	// Отображаем общее количество калорий в двух местах на странице
	document.getElementById('totalCcal').textContent = `${totalCalories} ккал`;
}