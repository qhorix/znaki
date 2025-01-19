const signs = {
    1: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.1.svg', 'Рух прямо', '4.1'],
    2: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.2.svg', 'Рух праворуч', '4.2'],
    3: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.3.svg', 'Рух ліворуч', '4.3'],
    4: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.4.svg', 'Рух прямо або праворуч', '4.4'],
    5: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.5.svg', 'Рух прямо або ліворуч', '4.5'],
    6: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.6.svg', 'Рух праворуч або ліворуч', '4.6'],
    7: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.7.svg', 'Об’їзд перешкоди з правого боку', '4.7'],
    8: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.8.svg', 'Об’їзд перешкоди з лівого боку', '4.8'],
    9: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.9.svg', 'Об’їзд перешкоди з правого або лівого боку', '4.9'],
    10: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.10.svg', 'Круговий рух', '4.10'],
    11: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.11.svg', 'Рух легкових автомобілів', '4.11'],
    12: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.12.svg', 'Обмеження мінімальної швидкості', '4.12'],
    13: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.13.svg', 'Кінець обмеження мінімальної швидкості', '4.13'],
    14: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.14.svg', 'Доріжка для велосипедистів', '4.14'],
    15: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.15.svg', 'Кінець доріжки для велосипедистів', '4.15'],
    16: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.16.svg', 'Доріжка для пішоходів', '4.16'],
    17: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.17.svg', 'Доріжка для пішоходів і велосипедистів', '4.17'],
    18: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.18.svg', 'Суміжні пішохідна та велосипедна доріжки', '4.18'],
    19: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.19.svg', 'Доріжка для вершників', '4.19'],
    20: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.20.1.svg', 'Напрямок руху транспортних засобів з небезпечними вантажами', '4.20.1'],
    21: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.20.2.svg', 'Напрямок руху транспортних засобів з небезпечними вантажами', '4.20.2'],
    22: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.20.3.svg', 'Напрямок руху транспортних засобів з небезпечними вантажами', '4.20.3'],
    23: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.21.svg', 'Рух із застосуванням ланцюгів проти ковзання', '4.21'],
    24: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.22.svg', 'Кінець ділянки руху із застосуванням ланцюгів проти ковзання', '4.22'],
    25: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.23.svg', 'Дорога для суміщеного руху легкових автомобілів та велосипедистів', '4.23'],
    26: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/4.24.svg', 'Кінець дороги для суміщеного руху легкових автомобілів та велосипедистів', '4.24']
};

let blacklist = [];
let count = 0;
let randomIndex = 0;

function nextImage() {
    const photo = document.getElementById('sign-photo');
    const number = document.getElementById('number');
    const answer = document.getElementById('answer');
    const counter = document.getElementById('counter');

    if (count === 26) {
        alert('Всі знаки показані');
        return;
    }

    blacklist.push(randomIndex);

    do {
        randomIndex = Math.floor(Math.random() * 26+1);
    } while (blacklist.includes(randomIndex));

    count++;
    counter.innerHTML = `Знаків: ${count}/26`;

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
    counter.innerHTML = `Знаків: ${count}/26`;

    photo.setAttribute('src', signs[randomIndex][0]);
    number.innerHTML = signs[randomIndex][2];
    answer.innerHTML = '';
};

function showAnswer() {
    const answer = document.getElementById('answer');

    answer.innerHTML = signs[randomIndex][1];
};