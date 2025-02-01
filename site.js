

let clock = document.querySelector('.clock')

function updateTime() {
    let currentTime = new Date();
    clock.innerHTML = currentTime.toLocaleTimeString('en-US');
    setTimeout(updateTime, 1000);
}
updateTime();