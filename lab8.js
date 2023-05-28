function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML +="Дата и время для локали России:" + today.toLocaleDateString('ru-RU') + "," + today.toLocaleTimeString('ru-Ru') + "<br>";
    out.innerHTML +="Дата и время для локали Австралии:" + today.toLocaleDateString('en-AU') + "," + today.toLocaleTimeString('en-AU') + "<br>";
    out.innerHTML +="Дата и время для локали Греции:" + today.toLocaleDateString('el-GR') +  "," + today.toLocaleTimeString('el-GR') + "<br>";
    out.innerHTML +="Дата и время для локали Франции:" + today.toLocaleDateString('fr') + "," + today.toLocaleTimeString('fr') +  "<br>";
    out.innerHTML +="Дата и время для локали Италии:" + today.toLocaleDateString('it') + "," + today.toLocaleTimeString('it') +  "<br>";
}

function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birtday = new Date(inputDate.value);
    let daysCount = (today - birtday)/1000/60/60/24;
    let div = document.getElementById('div1')
    daysCount = Math.floor(daysCount);
    div.innerHTML = "Количество дней с даты рождения:" + daysCount
}
function Clear() {
    let a = document.getElementById('date1');
    a.value = "";
    let b = document.getElementById('div1');
    b.innerHTML = "Количество дней с даты рождения:"
        
        
}

    function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval (showTime, 1000);