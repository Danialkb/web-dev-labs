function getSecondsToTomorrow() {
    let now = new Date();
    let secsToday = (now.getHours() * 60 + now.getMinutes()) * 60 + seconds;
    return 86400 - secsToday;
}

console.log(getSecondsToTomorrow())