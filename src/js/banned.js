const signs = {
    1: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.1.svg', 'Рух заборонено', '3.1'],
    2: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.2.svg', 'Рух механічних транспортних засобів заборонено', '3.2'],
    3: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.3.svg', 'Рух вантажних автомобілів заборонено', '3.3'],
    4: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.4.svg', 'Рух з причепом заборонено', '3.4'],
    5: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.5.svg', 'Рух тракторів заборонено', '3.5'],
    6: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.6.svg', 'Рух мотоциклів заборонено', '3.6'],
    7: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.7.svg', 'Рух на мопедах заборонено', '3.7'],
    8: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.8.svg', 'Рух на велосипедах заборонено', '3.8'],
    9: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.9.svg', 'Рух з ручними візками заборонено', '3.9'],
    10: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.10.svg', 'Рух гужових возів (саней) заборонено', '3.10'],
    11: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.11.svg', 'Рух транспортних засобів, що перевозять небезпечні вантажі, заборонено', '3.11'],
    12: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.12.svg', 'Рух транспортних засобів, що перевозять вибухові та легкозаймисті вантажі, заборонено', '3.12'],
    13: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.13.svg', 'Рух транспортних засобів, що перевозять речовини, які забруднюють воду, заборонено', '3.13'],
    14: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.14.svg', 'Рух транспортних засобів, маса яких перевищує ... т, заборонено', '3.14'],
    15: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.15.svg', 'Рух транспортних засобів, навантаження на вісь яких перевищує ... т, заборонено', '3.15'],
    16: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.16.svg', 'Рух транспортних засобів, ширина яких перевищує ... м, заборонено', '3.16'],
    17: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.17.svg', 'Рух транспортних засобів, висота яких перевищує ... м, заборонено', '3.17'],
    18: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.18.svg', 'Рух транспортних засобів, довжина яких перевищує ... м, заборонено', '3.18'],
    19: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.19.svg', 'Рух транспортних засобів без дотримання дистанції ... м заборонено', '3.19'],
    20: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.20.svg', 'В’їзд заборонено', '3.20'],
    21: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.21.svg', 'Поворот праворуч заборонено', '3.21'],
    22: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.22.svg', 'Поворот ліворуч заборонено', '3.22'],
    23: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.23.svg', 'Розворот заборонено', '3.23'],
    24: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.24.svg', 'Обгін заборонено', '3.24'],
    25: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.25.svg', 'Кінець заборони обгону', '3.25'],
    26: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.26.svg', 'Обгін вантажним автомобілям заборонено', '3.26'],
    27: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.27.svg', 'Кінець заборони обгону вантажним автомобілям', '3.27'],
    28: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.28.svg', 'Обмеження максимальної швидкості', '3.28'],
    29: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.29.svg', 'Кінець обмеження максимальної швидкості', '3.29'],
    30: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.30.svg', 'Зона обмеження максимальної швидкості', '3.30'],
    31: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.31.svg', 'Кінець зони обмеження максимальної швидкості', '3.31'],
    32: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.32.svg', 'Подачу звукового сигналу заборонено', '3.32'],
    33: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.33.svg', 'Зупинку заборонено', '3.33'],
    34: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.34.svg', 'Стоянку заборонено', '3.34'],
    35: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.35.svg', 'Стоянку заборонено в непарні числа місяця', '3.35'],
    36: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.36.svg', 'Стоянку заборонено в парні числа місяця', '3.36'],
    37: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.37.svg', 'Зона обмеженої стоянки', '3.37'],
    38: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.38.svg', 'Кінець зони обмеженої стоянки', '3.38'],
    39: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.39.svg', 'Митниця', '3.39'],
    40: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.40.svg', 'Контроль', '3.40'],
    41: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.41.svg', 'Контроль', '3.41'],
    42: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.42.svg', 'Кінець усіх заборон і обмежень', '3.42'],
    43: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.43.svg', 'Небезпека', '3.43'],
    44: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.44.svg', 'Рух зазначених транспортних засобів заборонено', '3.44'],
    45: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/3.45.svg', 'Рух зазначених транспортних засобів заборонено', '3.45']
};

let blacklist = [];
let count = 0;
let randomIndex = 0;

function nextImage() {
    const photo = document.getElementById('sign-photo');
    const number = document.getElementById('number');
    const answer = document.getElementById('answer');
    const counter = document.getElementById('counter');

    if (count === 45) {
        alert('Всі знаки показані');
        return;
    }

    blacklist.push(randomIndex);

    do {
        randomIndex = Math.floor(Math.random() * 45+1);
    } while (blacklist.includes(randomIndex));

    count++;
    counter.innerHTML = `Знаків: ${count}/45`;

    photo.setAttribute('src', signs[randomIndex][0]);
    number.innerHTML = signs[randomIndex][2];
    answer.innerHTML = '';
};

function backImage() {
    const photo = document.getElementById('sign-photo');
    const number = document.getElementById('number');
    const answer = document.getElementById('answer');
    const counter = document.getElementById('counter');

    if (blacklist.length <= 45) {
        alert('Немає попереднього знаку');
        return;
    }

    randomIndex = blacklist.pop();

    count--;
    counter.innerHTML = `Знаків: ${count}/45`;

    photo.setAttribute('src', signs[randomIndex][0]);
    number.innerHTML = signs[randomIndex][2];
    answer.innerHTML = '';
};

function showAnswer() {
    const answer = document.getElementById('answer');

    answer.innerHTML = signs[randomIndex][1];
};