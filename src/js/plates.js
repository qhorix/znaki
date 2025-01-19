const signs = {
    1: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.1.1.svg', 'Відстань до об’єкта', '7.1.1'],
    2: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.1.2.svg', 'Відстань до об’єкта', '7.1.2'],
    3: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.1.3.svg', 'Відстань до об’єкта', '7.1.3'],
    4: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.1.4.svg', 'Відстань до об’єкта', '7.1.4'],
    5: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.2.1.svg', 'Зона дії', '7.2.1'],
    6: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.2.2.svg', 'Зона дії', '7.2.2'],
    7: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.2.3.svg', 'Зона дії', '7.2.3'],
    8: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.2.4.svg', 'Зона дії', '7.2.4'],
    9: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.2.5.svg', 'Зона дії', '7.2.5'],
    10: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.2.6.svg', 'Зона дії', '7.2.6'],
    11: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.2.7.svg', 'Зона дії', '7.2.7'],
    12: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.3.1.svg', 'Напрямок дії', '7.3.1'],
    13: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.3.2.svg', 'Напрямок дії', '7.3.2'],
    14: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.3.3.svg', 'Напрямок дії', '7.3.3'],
    15: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.4.1.svg', 'Час дії', '7.4.1'],
    16: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.4.2.svg', 'Час дії', '7.4.2'],
    17: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.4.3.svg', 'Час дії', '7.4.3'],
    18: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.4.4.svg', 'Час дії', '7.4.4'],
    19: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.4.5.svg', 'Час дії', '7.4.5'],
    20: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.4.6.svg', 'Час дії', '7.4.6'],
    21: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.4.7.svg', 'Час дії', '7.4.7'],
    22: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.5.1.svg', 'Вид транспортного засобу', '7.5.1'],
    23: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.5.2.svg', 'Вид транспортного засобу', '7.5.2'],
    24: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.5.3.svg', 'Вид транспортного засобу', '7.5.3'],
    25: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.5.4.svg', 'Вид транспортного засобу', '7.5.4'],
    26: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.5.5.svg', 'Вид транспортного засобу', '7.5.5'],
    27: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.5.6.svg', 'Вид транспортного засобу', '7.5.6'],
    28: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.5.7.svg', 'Вид транспортного засобу', '7.5.7'],
    29: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.5.8.svg', 'Вид транспортного засобу', '7.5.8'],
    30: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.5.9.svg', 'Вид транспортного засобу', '7.5.9'],
    31: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.6.1.svg', 'Спосіб поставлення транспортного засобу на стоянку', '7.6.1'],
    32: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.6.2.svg', 'Спосіб поставлення транспортного засобу на стоянку', '7.6.2'],
    33: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.6.3.svg', 'Спосіб поставлення транспортного засобу на стоянку', '7.6.3'],
    34: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.6.4.svg', 'Спосіб поставлення транспортного засобу на стоянку', '7.6.4'],
    35: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.6.5.svg', 'Спосіб поставлення транспортного засобу на стоянку', '7.6.5'],
    36: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.6.6.svg', 'Спосіб поставлення транспортного засобу на стоянку', '7.6.6'],
    37: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.6.7.svg', 'Спосіб поставлення транспортного засобу на стоянку', '7.6.7'],
    38: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.7.svg', 'Стоянка з непрацюючим двигуном', '7.7'],
    39: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.8.svg', 'Напрямок головної дороги', '7.8'],
    40: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.9.svg', 'Смуга руху', '7.9'],
    41: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.10.svg', 'Кількість поворотів', '7.10'],
    42: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.11.svg', 'Поромна переправа', '7.11'],
    43: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.12.svg', 'Ожеледиця', '7.12'],
    44: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.13.svg', 'Вологе покриття', '7.13'],
    45: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.14.svg', 'Платні послуги', '7.14'],
    46: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.15.svg', 'Місце для огляду автомобілів', '7.15'],
    47: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.16.svg', 'Пішоходи з порушенням зору', '7.16'],
    48: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.17.svg', 'Особи з інвалідністю', '7.17'],
    49: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.18.svg', 'Крім осіб з інвалідністю', '7.18'],
    50: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.19.svg', 'Обмеження тривалості стоянки', '7.19'],
    51: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.20.svg', 'Обмеження по температурі', '7.20'],
    52: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.21.1.svg', 'Вид небезпеки', '7.21.1'],
    53: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.21.2.svg', 'Вид небезпеки', '7.21.2'],
    54: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.21.3.svg', 'Вид небезпеки', '7.21.3'],
    55: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.21.4.svg', 'Вид небезпеки', '7.21.4'],
    56: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.21.5.svg', 'Вид небезпеки', '7.21.5'],
    57: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.22.svg', 'Лижники', '7.22'],
    58: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.23.svg', 'Місце для зарядки електромобілів', '7.23'],
    59: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.24.svg', 'Евакуатор', '7.24'],
    60: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.25.svg', 'Острівець безпеки', '7.25'],
    61: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.26.svg', 'Строк застосування денних ходових вогнів (ближнього світла фар)', '7.26'],
    62: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.27.svg', 'Нанесення розмітки', '7.27'],
    63: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.28.1.svg', 'Вид громадського транспорту', '7.28.1'],
    64: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.28.2.svg', 'Вид громадського транспорту', '7.28.2'],
    65: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.28.3.svg', 'Вид громадського транспорту', '7.28.3'],
    66: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.28.4.svg', 'Вид громадського транспорту', '7.28.4'],
    67: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.29.1.svg', 'Напрямок руху велосипедистів', '7.29.1'],
    68: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.29.2.svg', 'Напрямок руху велосипедистів', '7.29.2'],
    69: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.29.3.svg', 'Напрямок руху велосипедистів', '7.29.3'],
    70: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.29.4.svg', 'Напрямок руху велосипедистів', '7.29.4'],
    71: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.29.5.svg', 'Напрямок руху велосипедистів', '7.29.5'],
    72: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/7.29.6.svg', 'Напрямок руху велосипедистів', '7.29.6']
};

let blacklist = [];
let count = 0;
let randomIndex = 0;

function nextImage() {
    const photo = document.getElementById('sign-photo');
    const number = document.getElementById('number');
    const answer = document.getElementById('answer');
    const counter = document.getElementById('counter');

    if (count === 72) {
        alert('Всі знаки показані');
        return;
    }

    blacklist.push(randomIndex);

    do {
        randomIndex = Math.floor(Math.random() * 72+1);
    } while (blacklist.includes(randomIndex));

    count++;
    counter.innerHTML = `Знаків: ${count}/72`;

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
    counter.innerHTML = `Знаків: ${count}/72`;

    photo.setAttribute('src', signs[randomIndex][0]);
    number.innerHTML = signs[randomIndex][2];
    answer.innerHTML = '';
};

function showAnswer() {
    const answer = document.getElementById('answer');

    answer.innerHTML = signs[randomIndex][1];
};