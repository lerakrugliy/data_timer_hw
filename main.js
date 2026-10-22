// 1. Створити функцію, яка повертає поточну дату та час.
const getCurrentDate = () => {
  return new Date();
};

console.log(getCurrentDate());

// 2. Створити функцію, яка приймає дату та повертає рік.
const getYear = (date) => {
  return date.getFullYear();
};

console.log(getYear(new Date()));

// 3. Створити функцію, яка приймає дату та повертає місяць.
const getMonth = (date) => {
  return date.getMonth() + 1;
};

console.log(getMonth(new Date()));

// 4. Створити функцію, яка приймає дату та повертає день місяця.
const getDay = (date) => {
  return date.getDate();
};

console.log(getDay(new Date()));

// 5. Створити функцію, яка приймає дату та повертає години.
const getHours = (date) => {
  return date.getHours();
};

console.log(getHours(new Date()));

// 6. Створити функцію, яка приймає дату та повертає хвилини.
const getMinutes = (date) => {
  return date.getMinutes();
};

console.log(getMinutes(new Date()));

// 7. Створити функцію, яка приймає дату та повертає секунди.
const getSeconds = (date) => {
  return date.getSeconds();
};

console.log(getSeconds(new Date()));

// 8. Створити функцію, яка перевіряє чи є дата вихідним днем (субота або неділя).
const isWeekend = (date) => {
  const day = date.getDay();

  return day === 0 || day === 6;
};

console.log(isWeekend(new Date()));

// 9. Створити функцію, яка порівнює дві дати та повертає різницю в днях.
const getDaysDifference = (date1, date2) => {
  const difference = Math.abs(date1 - date2);

  return Math.floor(difference / (1000 * 60 * 60 * 24));
};

console.log(getDaysDifference(new Date("2026-10-20"), new Date("2026-10-23")));
