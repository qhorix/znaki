const signs = {
    1: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.1.svg', 'Пункт першої медичної допомоги', '6.1'],
    2: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.2.svg', 'Лікарня', '6.2'],
    3: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.3.svg', 'Телефон для виклику аварійної служби', '6.3'],
    4: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.4.svg', 'Вогнегасник', '6.4'],
    5: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.5.svg', 'Пункт технічного обслуговування', '6.5'],
    6: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.6.svg', 'Пункт миття автомобілів', '6.6'],
    7: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.7.1.svg', 'Автозаправні станції', '6.7.1'],
    8: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.7.2.svg', 'Автозаправні станції', '6.7.2'],
    9: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.7.3.svg', 'Електрозарядні станції', '6.7.3'],
    10: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.7.4.svg', 'Автозаправні станції', '6.7.4'],
    11: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.7.5.svg', 'Автозаправні та електрозарядні станції', '6.7.5'],
    12: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.7.6.svg', 'Автозаправні та електрозарядні станції', '6.7.6'],
    13: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.7.7.svg', 'Автозаправні та електрозарядні станції', '6.7.7'],
    14: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.8.svg', 'Телефон', '6.8'],
    15: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.9.svg', 'Пункт довідкової служби', '6.9'],
    16: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.10.svg', 'Дорожня станція патрульної поліції', '6.10'],
    17: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.11.svg', 'Туалет', '6.11'],
    18: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.12.svg', 'Питна вода', '6.12'],
    19: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.13.svg', 'Ресторан або їдальня', '6.13'],
    20: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.14.svg', 'Кафе', '6.14'],
    21: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.15.svg', 'Місце відпочинку', '6.15'],
    22: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.16.svg', 'Готель або мотель', '6.16'],
    23: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.17.svg', 'Туристична база', '6.17'],
    24: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.18.svg', 'Кемпінг', '6.18'],
    25: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.19.svg', 'Місце стоянки причепів у кемпінгу', '6.19'],
    26: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.20.svg', 'Ділянка для табору автотуристів і місце стоянки причепів у кемпінгу', '6.20'],
    27: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.21.svg', 'Пляж або басейн', '6.21'],
    28: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.22.svg', 'Визначні місця', '6.22'],
    29: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/6.23.svg', 'Шиномонтаж', '6.23']
    
};

let blacklist = [];
let count = 0;
let randomIndex = 0;

function nextImage() {
    const photo = document.getElementById('sign-photo');
    const number = document.getElementById('number');
    const answer = document.getElementById('answer');
    const counter = document.getElementById('counter');

    if (count === 29) {
        alert('Всі знаки показані');
        return;
    }

    blacklist.push(randomIndex);

    do {
        randomIndex = Math.floor(Math.random() * 29+1);
    } while (blacklist.includes(randomIndex));

    count++;
    counter.innerHTML = `Знаків: ${count}/29`;

    photo.setAttribute('src', signs[randomIndex][0]);
    number.innerHTML = signs[randomIndex][2];
    answer.innerHTML = '';
};

function backImage() {
    const photo = document.getElementById('sign-photo');
    const number = document.getElementById('number');
    const answer = document.getElementById('answer');
    const counter = document.getElementById('counter');

    if (blacklist.length <= 1) {
        alert('Немає попереднього знаку');
        return;
    }

    randomIndex = blacklist.pop();

    count--;
    counter.innerHTML = `Знаків: ${count}/29`;

    photo.setAttribute('src', signs[randomIndex][0]);
    number.innerHTML = signs[randomIndex][2];
    answer.innerHTML = '';
};

function showAnswer() {
    const answer = document.getElementById('answer');

    answer.innerHTML = signs[randomIndex][1];
};