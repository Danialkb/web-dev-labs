function formatDate(date) {
    let diff = new Date() - date;
    if (diff < 1000) {
        return 'right now';
    }
    let sec = Math.floor(diff / 1000);
    if (sec < 60) {
        return sec + ' sec. ago';
    }
    let min = Math.floor(diff / 60000);
    if (min < 60) {
        return min + ' min. ago';
    }

    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = String(date.getFullYear()).slice(-2);
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}
