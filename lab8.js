function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML +="Дата и время для локали России:" + today.toDateString('ru-RU') + "<br>";
    out.innerHTML +="Дата и время для локали Австралии:" + today.toDateString('en-AU') + "<br>";
    out.innerHTML +="Дата и время для локали Греции:" + today.toDateString('el-GR') + "<br>";
    out.innerHTML +="Дата и время для локали Франции:" + today.toDateString('fr') + "<br>";
    out.innerHTML +="Дата и время для локали Италии:" + today.toDateString('it') + "<br>";
}

function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birtday = new Date(inputDate.value);
    let daysCount = (today - birtday)/1000/60/60/24;
    let div = document.getElementById('div1')
    daysCount = Math.floor(daysCount);
    div.innerHTML = "Количество дней сдаты рождения:" + daysCount
}