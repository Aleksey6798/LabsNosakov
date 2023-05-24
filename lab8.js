function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML +="Дата и время для локали России:" + today.toDateString('ru-RU') + "<br>";
    out.innerHTML +="Дата и время для локали Австралии:" + today.toDateString('en-AU') + "<br>";
    out.innerHTML +="Дата и время для локали Греции:" + today.toDateString('el-GR') + "<br>";
    out.innerHTML +="Дата и время для локали Франции:" + today.toDateString('fr') + "<br>";
    out.innerHTML +="Дата и время для локали Италии:" + today.toDateString('it') + "<br>";
}