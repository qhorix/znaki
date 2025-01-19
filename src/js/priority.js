const signs = {
    1: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/2.1.svg', 'Дати дорогу', '2.1'],
    2: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/2.2.svg', 'Проїзд без зупинки заборонено', '2.2'],
    3: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/2.3.svg', 'Головна дорога', '2.3'],
    4: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/2.4.svg', 'Кінець головної дороги', '2.4'],
    5: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/2.5.svg', 'Перевага зустрічного руху', '2.5'],
    6: ['https://green-way.com.ua/storage/app/media/books/pdd-ukr/znaki/2.6.svg', 'Перевага перед зустрічним рухом', '2.6']
};

let blacklist = [];
let count = 0;
let randomIndex = 0;

function nextImage() {
    const photo = document.getElementById('sign-photo');
    const number = document.getElementById('number');
    const answer = document.getElementById('answer');
    const counter = document.getElementById('counter');

    if (count === 6) {
        alert('Всі знаки показані');
        return;
    }

    blacklist.push(randomIndex);

    do {
        randomIndex = Math.floor(Math.random() * 6+1);
    } while (blacklist.includes(randomIndex));

    count++;
    counter.innerHTML = `Знаків: ${count}/6`;

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
    counter.innerHTML = `Знаків: ${count}/6`;

    photo.setAttribute('src', signs[randomIndex][0]);
    number.innerHTML = signs[randomIndex][2];
    answer.innerHTML = '';
};

function showAnswer() {
    const answer = document.getElementById('answer');

    answer.innerHTML = signs[randomIndex][1];
};