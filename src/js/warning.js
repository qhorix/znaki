const signs = {
    1: ['https://green-way.com.ua//storage/app/media/books/pdd-ukr/znaki/1.1.svg', 'Небезпечний поворот праворуч', '1.1'],
    2: ['https://green-way.com.ua//storage/app/media/books/pdd-ukr/znaki/1.2.svg', 'Небезпечний поворот ліворуч', '1.2'],
    3: ['https://green-way.com.ua//storage/app/media/books/pdd-ukr/znaki/1.3.1.svg', 'Декілька поворотів', '1.3.1'],
    4: ['https://green-way.com.ua//storage/app/media/books/pdd-ukr/znaki/1.3.2.svg', 'Декілька поворотів', '1.3.2'],
    5: ['https://green-way.com.ua//storage/app/media/books/pdd-ukr/znaki/1.4.1.svg', 'Напрямок повороту', '1.4.1'],
    6: ['https://green-way.com.ua//storage/app/media/books/pdd-ukr/znaki/1.4.2.svg', 'Напрямок повороту', '1.4.2'],
    7: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.4.3.svg', 'Напрямок повороту', '1.4.3'],
    8: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.4.4.svg', 'Напрямок повороту', '1.4.4'],
    9: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.4.5.svg', 'Напрямок повороту', '1.4.5'],
    10: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.4.6.svg', 'Напрямок повороту', '1.4.6'],
    11: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.4.7.svg', 'Напрямок повороту', '1.4.7'],
    12: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.5.1.svg', 'Звуження дороги', '1.5.1'],
    13: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.5.2.svg', 'Звуження дороги', '1.5.2'],
    14: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.5.3.svg', 'Звуження дороги', '1.5.3'],
    15: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.6.svg', 'Крутий підйом', '1.6'],
    16: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.7.svg', 'Крутий спуск', '1.7'],
    17: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.8.svg', 'Виїзд на набережну або берег', '1.8'],
    18: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.9.svg', 'Тунель', '1.9'],
    19: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.10.svg', 'Нерівна дорога', '1.10'],
    20: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.11.svg', 'Пагорб', '1.11'],
    21: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.12.svg', 'Вибоїна', '1.12'],
    22: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.13.svg', 'Слизька дорога', '1.13'],
    23: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.14.svg', 'Викидання кам’яних матеріалів', '1.14'],
    24: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.15.svg', 'Небезпечне узбіччя', '1.15'],
    25: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.16.svg', 'Падіння каміння', '1.16'],
    26: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.17.svg', 'Боковий вітер', '1.17'],
    27: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.18.svg', 'Низьколітаючі літаки', '1.18'],
    28: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.19.svg', 'Перехрещення з рухом по колу', '1.19'],
    29: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.20.svg', 'Перехрещення з трамвайною колією', '1.20'],
    30: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.21.svg', 'Перехрещення рівнозначних доріг', '1.21'],
    31: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.22.svg', 'Перехрещення з другорядною дорогою', '1.22'],
    32: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.23.1.svg', 'Прилягання другорядної дороги', '1.23.1'],
    33: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.23.2.svg', 'Прилягання другорядної дороги', '1.23.2'],
    34: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.23.3.svg', 'Прилягання другорядної дороги', '1.23.3'],
    35: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.23.4.svg', 'Прилягання другорядної дороги', '1.23.4'],
    36: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.24.svg', 'Світлофорне регулювання', '1.24'],
    37: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.25.svg', 'Розвідний міст', '1.25'],
    38: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.26.svg', 'Двосторонній рух', '1.26'],
    39: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.27.svg', 'Залізничний переїзд із шлагбаумом', '1.27'],
    40: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.28.svg', 'Залізничний переїзд без шлагбаума', '1.28'],
    41: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.29.svg', 'Одноколійна залізниця', '1.29'],
    42: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.30.svg', 'Багатоколійна залізниця', '1.30'],
    43: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.31.1.svg', 'Наближення до залізничного переїзду', '1.31.1'],
    44: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.31.2.svg', 'Наближення до залізничного переїзду', '1.31.2'],
    45: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.31.3.svg', 'Наближення до залізничного переїзду', '1.31.3'],
    46: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.31.4.svg', 'Наближення до залізничного переїзду', '1.31.4'],
    47: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.31.5.svg', 'Наближення до залізничного переїзду', '1.31.5'],
    48: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/1.31.6.svg', 'Наближення до залізничного переїзду', '1.31.6'],
    49: ['https://green-way.com.ua//storage/app/media/books/pdd-ukr/znaki/1.32.svg', 'Пішохідний перехід', '1.32'],
    50: ['https://green-way.com.ua//storage/app/media/books/pdd-ukr/znaki/1.33.svg', 'Діти', '1.33'],
    51: ['https://green-way.com.ua//storage/app/media/books/pdd-ukr/znaki/1.34.svg', 'Виїзд велосипедистів', '1.34'],
    52: ['https://green-way.com.ua//storage/app/media/books/pdd-ukr/znaki/1.35.svg', 'Перегін худоби', '1.35'],
    53: ['https://green-way.com.ua//storage/app/media/books/pdd-ukr/znaki/1.36.svg', 'Дикі тварини', '1.36'],
    54: ['https://green-way.com.ua//storage/app/media/books/pdd-ukr/znaki/1.37.svg', 'Дорожні роботи', '1.37'],
    55: ['https://green-way.com.ua//storage/app/media/books/pdd-ukr/znaki/1.38.svg', 'Затори в дорожньому русі', '1.38'],
    56: ['https://green-way.com.ua//storage/app/media/books/pdd-ukr/znaki/1.39.svg', 'Аварійно-небезпечна ділянка (інша небезпека)', '1.39'],
    57: ['https://green-way.com.ua//storage/app/media/books/pdd-ukr/znaki/1.40.svg', 'Зміна покриття', '1.40'],
    58: ['https://green-way.com.ua//storage/app/media/books/pdd-ukr/znaki/1.41.svg', 'Місце (ділянка) концентрації дорожньо-транспортних пригод', '1.41']
};

let blacklist = [];
let count = 0;
let randomIndex = 0;

function nextImage() {
    const photo = document.getElementById('sign-photo');
    const number = document.getElementById('number');
    const answer = document.getElementById('answer');
    const counter = document.getElementById('counter');

    if (count === 58) {
        alert('Всі знаки показані');
        return;
    }

    blacklist.push(randomIndex);

    do {
        randomIndex = Math.floor(Math.random() * 58+1);
    } while (blacklist.includes(randomIndex));

    count++;
    counter.innerHTML = `Знаків: ${count}/58`;

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
    counter.innerHTML = `Знаків: ${count}/58`;

    photo.setAttribute('src', signs[randomIndex][0]);
    number.innerHTML = signs[randomIndex][2];
    answer.innerHTML = '';
};

function showAnswer() {
    const answer = document.getElementById('answer');

    answer.innerHTML = signs[randomIndex][1];
};