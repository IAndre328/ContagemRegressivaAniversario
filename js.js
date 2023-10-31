'use strict';
const elementById = id => document.querySelector(`#${id}`);

const daysElement = elementById("dias");
const hoursElement = elementById("horas");
const minutesElement = elementById("minutos");
const secondsElement = elementById("segundos");

let currentDate = new Date();

let currentYear = currentDate.getFullYear();
const myBirthday = new Date(currentYear, 10, 15);

const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
const getDaysInYear = year => isLeapYear(year) ? 366 : 365;

const daysInYear = getDaysInYear(currentYear);
console.log(`O ano ${currentYear} tem ${daysInYear} dias.`);

function updateCountdown(dev = false) {
    if (!dev){
    currentDate = new Date();
    }

    const difference = myBirthday - currentDate;

    // dias
    const daysDifference = difference / (1000 * 60 * 60 * 24);
    const daysInt = parseInt(daysDifference);
    daysElement.textContent = daysInt;

    //horas
    const hoursDifference = (daysDifference - daysInt) * 24;
    const hoursInt = parseInt(hoursDifference);
    hoursElement.textContent = hoursInt;

    // minutos
    const minutesDifference = (hoursDifference - hoursInt) * 60;
    const minutesInt = parseInt(minutesDifference);
    minutesElement.textContent = minutesInt;

    //segundos
    const secondsDifference = (minutesDifference - minutesInt) * 60;
    const secondsInt = parseInt(secondsDifference);
    secondsElement.textContent = secondsInt;
}

let loop = setInterval(updateCountdown, 1000);

// area dev

// Função para definir a data de teste
function setDateForTesting(year, month, day) {
    const testingDate = new Date(year, month - 1, day); // O mês é indexado a partir de 0
    currentDate = testingDate;
    loop = setInterval(updateCountdown(true),1000);
}

// Restaure a função Date.now para o comportamento normal
function resetDate() {
    Date.now = () => new Date().getTime();
}


// Quando terminar de testar, redefina a data atual para a data do sistema

