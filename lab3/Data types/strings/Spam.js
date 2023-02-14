function checkSpam(str) {
    let newStr = str.toLowerCase();
    return newStr.includes('viagra') || newStr.includes('xxx');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );