function getWeekDay(date) {
    return ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'][date.getDay()];
}

let date = new Date(2014, 0, 3);
console.log( getWeekDay(date) );