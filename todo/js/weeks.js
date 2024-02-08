// Функция для форматирования даты в формат "dd.mm.yyyy"
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}

// Функция для получения начала и окончания недели по заданной дате
function getWeekBounds(date) {
    const dayOfWeek = date.getDay(); // День недели (0 - воскресенье, 1 - понедельник, ..., 6 - суббота)
    const startOfWeek = new Date(date);
    startOfWeek.setDate(startOfWeek.getDate() - (dayOfWeek ? (dayOfWeek - 1) : 6)); // Начало недели (если сегодня понедельник, то ничего не меняем)
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6); // Окончание недели
    return {
        start: formatDate(startOfWeek),
        end: formatDate(endOfWeek)
    };
}

// Функция для генерации календаря недель на заданный год
function generateWeekCalendar(year) {
    const weeks = [];
    const startDate = new Date(year, 0, 1); // Начало года
    let currentDate = new Date(startDate);
    while (currentDate.getFullYear() === year) {
        const weekBounds = getWeekBounds(currentDate);
        weeks.push(weekBounds);
        currentDate.setDate(currentDate.getDate() + 7); // Переход к следующей неделе
    }
    return weeks;
}

// Генерация календаря недель на 2024 год
const calendar2024 = generateWeekCalendar(2024);
