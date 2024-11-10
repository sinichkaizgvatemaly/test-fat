// Массив с именами месяцев
const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// Инициализация текущей даты
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

const yearSelect = document.getElementById('yearSelect');
const monthName = document.getElementById('monthName');
const prevMonthBtn = document.getElementById('prevMonthBtn');
const nextMonthBtn = document.getElementById('nextMonthBtn');
const calendarDays = document.getElementById('calendarDays');

// Функция для заполнения селектора года
function populateYearSelect() {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear - 50; i <= currentYear + 50; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        if (i === currentYear) {
            option.selected = true;
        }
        yearSelect.appendChild(option);
    }
}

// Функция для обновления календаря
function updateCalendar() {
    monthName.textContent = monthNames[currentMonth];
    calendarDays.innerHTML = '';

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Заполнение пустыми днями до начала месяца
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDiv = document.createElement('div');
        calendarDays.appendChild(emptyDiv);
    }

    // Заполнение днями месяца
    for (let i = 1; i <= lastDateOfMonth; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar__day';
        dayDiv.textContent = i;
        calendarDays.appendChild(dayDiv);
    }
}

// Обработчики событий для кнопок переключения месяцев
prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
        yearSelect.value = currentYear;
    }
    updateCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
        yearSelect.value = currentYear;
    }
    updateCalendar();
});

// Обработчик события для изменения года
yearSelect.addEventListener('change', (event) => {
    currentYear = Number(event.target.value);
    updateCalendar();
});

// Инициализация календаря
populateYearSelect();
updateCalendar();
