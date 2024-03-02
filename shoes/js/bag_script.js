// Функция для генерации уникального идентификатора
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Функция для проверки, существуют ли у пользователя куки
function checkCookies() {
    const cookiesString = document.cookie;
    if (cookiesString) {
        console.log('Cookies пользователя:', cookiesString);
    } else {
        // Если у пользователя нет кук, устанавливаем их
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 30); // Куки будут действительны 30 дней

        const userId = uuidv4(); // Генерируем уникальный идентификатор для пользователя

        document.cookie = "userId=" + userId + "; expires=" + expirationDate.toUTCString() + "; path=/"; // Устанавливаем куки
        console.log('Куки были установлены');
    }
}

// Проверяем куки при загрузке страницы
checkCookies();
