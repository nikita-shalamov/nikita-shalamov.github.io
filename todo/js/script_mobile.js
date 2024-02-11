const viewCalendar = new Calendar({
    id: "#color-calendar",
    calendarSize: "small",
    primaryColor: '#62a4e2'
});

let tasks = {
    1: ['Тестовая задача 1', '2.7.2024', 20, 30, 21, 30],
    2: ['Тестовая задача 2', '2.17.2024', 10, 30, 11, 30],
    3: ['Тестовая задача 3', '2.9.2024', 20, 30, 21, 30],
    4: ['Тестовая задача 4 ghfjg jgfjhg fjhg fghjfhj jghf', '2.10.2024', 12, 30, 13, 10],
}

calendarBtn = document.querySelector('.fa-calendar-days');
calendar = document.querySelector('.adding__cal');
calendarBtn.addEventListener('click', () => {
    calendar.classList.toggle('hidden');
});

let currentDate = new Date();

const prevBtn = document.querySelector('#prevBtn'),
      nextBtn = document.querySelector('#nextBtn');

prevBtn.addEventListener('click', () => {
    prevWeekButton();
    displayCurrentWeek(currentWeekId);
});

nextBtn.addEventListener('click', () => {
    nextWeekButton();
    displayCurrentWeek(currentWeekId);
});


function prevWeekButton() {
    return currentDate.setDate(currentDate.getDate() + 1);
}

function nextWeekButton() {
    return currentDate.setDate(currentDate.getDate() - 1);
}