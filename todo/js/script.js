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

let weeksNormal = {
    1: { start: '01.01.2024', end: '07.01.2024' },
    2: { start: '08.01.2024', end: '14.01.2024' },
    3: { start: '15.01.2024', end: '21.01.2024' },
    4: { start: '22.01.2024', end: '28.01.2024' },
    5: { start: '29.01.2024', end: '04.02.2024' },
    6: { start: '05.02.2024', end: '11.02.2024' },
    7: { start: '12.02.2024', end: '18.02.2024' },
    8: { start: '19.02.2024', end: '25.02.2024' },
    9: { start: '26.02.2024', end: '03.03.2024' },
}

let weeks = {
    1: { start: '01.01.2024', end: '01.07.2024' },
    2: { start: '01.08.2024', end: '01.14.2024' },
    3: { start: '01.15.2024', end: '01.21.2024' },
    4: { start: '01.22.2024', end: '01.28.2024' },
    5: { start: '01.29.2024', end: '02.04.2024' },
    6: { start: '02.05.2024', end: '02.11.2024' },
    7: { start: '02.12.2024', end: '02.18.2024' },
    8: { start: '02.19.2024', end: '02.25.2024' },
    9: { start: '02.26.2024', end: '03.03.2024' }
}

calendarBtn = document.querySelector('.fa-calendar-days');
calendar = document.querySelector('.adding__cal');
calendarBtn.addEventListener('click', () => {
    calendar.classList.toggle('hidden');
});

const currentDate = new Date();
let currentWeekId = parseInt(findWeekId(currentDate, weeks));

displayCurrentWeek(currentWeekId);

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

const submitBtn = document.querySelector('#submitBtn');
const inputTask = document.querySelector('#inputTask');
const inputCalendar = document.querySelector('.adding__calendar');
let selectedDay = new Date();

inputCalendar.addEventListener('click', () => {
    selectedDay = viewCalendar.getSelectedDate();
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    calendar.classList.toggle('hidden');
    if (checkValidData()) {
        addNewTask();
    }
    else {
        console.log('Исправьте ошибки');
    }
});

const calendarWrapper = document.querySelector('.calendar__wrapper');
calendarWrapper.addEventListener('click', (e) => {
    if (e.target.className === "calendar__task" && (document.querySelector(`#descr${e.target.id}`)) === null) {
        addDescr(e);
    }
    else if (e.target.className === "calendar__task" && (document.querySelector(`#descr${e.target.id}`)) != null){
        calendarWrapper.querySelector(`#descr${e.target.id}`).remove();
    }
    else if (e.target.className === 'fa-solid fa-trash') {
        const idDeleteTask = e.target.parentElement.parentElement.id.split('descr')[1];
        document.getElementById(idDeleteTask).remove();
        calendarWrapper.querySelector(`#descr${idDeleteTask}`).remove();
        let idDeleteTaskInt = parseInt(idDeleteTask);
        delete tasks[idDeleteTaskInt];
    }
});


function addDescr(e) {
    const descr = document.createElement('div');

    const descrTitle = document.createElement('div');
    descrTitle.classList.add('calendar__item-descr-title');
    descrTitle.textContent = e.target.textContent;
    descr.append(descrTitle);
    
    const trash = document.createElement('div');
    trash.classList.add('calendar__item-descr-trash');
    trash.innerHTML = '<i class="fa-solid fa-trash"></i>';
    descr.append(trash);

    const descrDate = document.createElement('div');
    descrDate.classList.add('calendar__item-desc-dates');
    descrDate.textContent = tasks[e.target.id][1] + ' ' + tasks[e.target.id][2] + 
                                                    ':' + tasks[e.target.id][3] + 
                                                    ' - ' + tasks[e.target.id][4] + 
                                                    ':' + tasks[e.target.id][5];
    descr.append(descrDate);

    descr.classList.add('calendar__item-descr');
    descr.id = `descr${e.target.id}`;
    let top = parseFloat(e.target.style.top.split('px')[0]) + parseInt(e.target.style.height.split('.')[0]) + 5;
    top = 'top: ' + top + 'px; ';
    const left = 'left: ' + e.target.style.left;
    descr.style.cssText = top + left;
    calendarWrapper.append(descr);
}

function addNewTask() {
    const taskId = Math.max(...Object.keys(tasks)) + 1;
    console.log(formatDate(selectedDay));
    tasks[taskId] = [inputTask.value, 
                                                formatDate(selectedDay), 
                                                parseInt(startHoursInput.value),
                                                parseInt(startMinutesInput.value),
                                                parseInt(endHoursInput.value),
                                                parseInt(endMinutesInput.value)];
    
    const taskWeekId = parseInt(findWeekId(selectedDay, weeks));
    
    if (taskWeekId === currentWeekId) {
        const calendarNumbers1 = getNextDays(weeks[taskWeekId].start);

        const top = 'top: ' + ((parseInt(startHoursInput.value)*60 + parseInt(startMinutesInput.value)) * 0.7006944444 + 30) + 'px; ';
        const height = 'height: ' + (((parseInt(endHoursInput.value)*60 + parseInt(endMinutesInput.value))-(parseInt(startHoursInput.value)*60 + parseInt(startMinutesInput.value)))*0.7006944444) + 'px;';
        const left = 'left: ' + (14.2857142857 * findPlace(calendarNumbers1[1], selectedDay)) + '%';

        const calendarWrapper = document.querySelector('.calendar__wrapper');
        const task = document.createElement('div');
        task.id = taskId;
        task.textContent = tasks[taskId][0];
        task.classList.add('calendar__task');
        task.style.cssText = top + height + left;

        calendarWrapper.append(task);
    }
    inputTask.value = '';
    inputTask.value = '';
    startHoursInput.value = '';
    startMinutesInput.value = '';
    endHoursInput.value = '';
    endMinutesInput.value = '';
    viewCalendar.setDate(new Date());
}

function findPlace(datesOfWeek, selectedDate) {
    let pos;
    datesOfWeek.forEach((item, i) => {
        if (formatDate(item) === formatDate(selectedDate)) {
            pos = i;
        }
    }); 
    return pos;
}

function findWeekId(date, weeks) {
    for (const id in weeks) {
        const week = weeks[id];
        const startDate = new Date(week.start);
        const endDate = new Date(week.end);
        endDate.setHours(23);
        endDate.setMinutes(59);
        
        if (date >= startDate && date <= endDate) {
            console.log(startDate, endDate);
            console.log(id);
            return id;
        }
    }
    
    return null; // Если неделя не найдена
}

function getNextDays(startDateString) {
    var startDate = new Date(startDateString);
    var nextSevenDays = [];
    var nextSevenDates = [];
    
    // Цикл для получения следующих 7 дней
    for (var i = 0; i < 7; i++) {
        var nextDate = new Date(startDate);
        nextDate.setDate(startDate.getDate() + i);
        nextSevenDays.push(nextDate.getDate());
        nextSevenDates.push(nextDate);
    }

    return [nextSevenDays, nextSevenDates];
}

function prevWeekButton() {
    if (currentWeekId === 1) {
        return;
    }
    currentWeekId = currentWeekId - 1;
    return currentWeekId;
}

function nextWeekButton() {
    if (currentWeekId === Math.max(...Object.keys(weeks))) {
        return;
    }
    currentWeekId = currentWeekId + 1;
    return currentWeekId;
}

function displayCurrentWeek(currentWeekId) {
    const currentWeek = weeksNormal[currentWeekId];

    const start1 = document.querySelector('.adding__date-start');
    const end1 = document.querySelector('.adding__date-end');
    start1.textContent = currentWeek.start;
    end1.textContent = currentWeek.end;

    const calendarWrapper = document.querySelector('.calendar__wrapper');
    const calendarDays = calendarWrapper.querySelectorAll('.calendar__day');
    const calendarNumbers = getNextDays(weeks[currentWeekId].start);

    let weekendsTasks = {};

    calendarDays.forEach((item, i) => {
        item.textContent = calendarNumbers[0][i] + ', ' + weekNames[i];
        weekendsTasks[i] = findKeysByDate(formatDate(calendarNumbers[1][i]), tasks);
    });

    const existTasks = document.querySelectorAll('.calendar__task');
    existTasks.forEach(task => {
        task.remove();
    });

    for (const key in weekendsTasks) {
        for (const id of weekendsTasks[key]) {
            addTask(tasks[id][0], key, tasks[id][2], tasks[id][3], tasks[id][4], tasks[id][5], id);
        }
    }
}

function addTask(text, place, startHours, startMinutes, endHours, endMinutes, id) {
    const top = 'top: ' + ((startHours*60 + startMinutes) * 0.7006944444 + 30) + 'px; ';
    const height = 'height: ' + (((endHours*60 + endMinutes)-(startHours*60 + startMinutes))*0.7006944444) + 'px;';
    const left = 'left: ' + (14.2857142857*place) + '%';

    const calendarWrapper = document.querySelector('.calendar__wrapper');
    const task = document.createElement('div');
    task.id = id;
    task.textContent = text;
    task.classList.add('calendar__task');
    task.style.cssText = top + height + left;

    calendarWrapper.append(task);
}

// function addDescrTask(text, )

function datesDiff(firstDate, secondDate) {

    const differenceMs = new Date(secondDate) - new Date(firstDate);
    const differenceDays = differenceMs / (1000 * 60 * 60 * 24);
    
    return differenceDays;
}

function findKeysByDate(dateString, tasks) {
    const keys = [];
    for (const key in tasks) {
        const task = tasks[key];
        const taskDate = task[1]; // Дата находится на второй позиции в массиве задач
        if (taskDate === dateString) {
            keys.push(key); // Добавляем ключ в массив keys
        }
    }
    return keys.length > 0 ? keys : []; // Если дата не найдена, возвращаем массив с одним элементом
}

function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Месяцы в JavaScript нумеруются с 0
    const year = date.getFullYear();
    return `${month}.${day}.${year}`;
}

function checkValidData() {
    const endTime = document.querySelector('.adding__time-start');
    const startTime = document.querySelector('.adding__time-end');
    if (inputTask.value != '' && window.getComputedStyle(endTime).getPropertyValue('border') !== 'none'
                              && window.getComputedStyle(startTime).getPropertyValue('border') !== 'none') {
        return true;
    }
    else {
        return false;
    }
}


const startHoursInput = document.querySelector('#startHours');
const startMinutesInput = document.querySelector('#startMinutes');
const endHoursInput = document.querySelector('#endHours');
const endMinutesInput = document.querySelector('#endMinutes');

startHoursInput.addEventListener('input', () => validateTimeInput(startHoursInput, startMinutesInput));
startMinutesInput.addEventListener('input', () => validateTimeInput(startHoursInput, startMinutesInput));
endHoursInput.addEventListener('input', () => validateTimeInput(endHoursInput, endMinutesInput));
endMinutesInput.addEventListener('input', () => validateTimeInput(endHoursInput, endMinutesInput));

function validateTimeInput(hoursInput, minutesInput) {
    const hours = parseInt(hoursInput.value);
    const minutes = parseInt(minutesInput.value);

    // Проверяем, являются ли введенные значения числами
    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        applyInvalidStyle(hoursInput);
        return;
    }

    const startHoursInputAll = parseInt(startHoursInput.value) * 60 + parseInt(startMinutesInput.value);
    const endHoursInputAll = parseInt(endHoursInput.value) * 60 + parseInt(endMinutesInput.value);
    if (startHoursInputAll >= endHoursInputAll) {
        applyInvalidStyle(hoursInput);
        return;
    }

    // Если все проверки пройдены, применяем корректный стиль
    applyValidStyle(hoursInput);
    return true;
}

function applyInvalidStyle(input) {
    input.parentNode.style.border = '2px solid red';
}

function applyValidStyle(input) {
    input.parentNode.style.border = 'none';
}
