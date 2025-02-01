

let clock = document.querySelector('.clock')

function updateTime() {
    let currentTime = new Date();
    clock.innerHTML = currentTime.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    setTimeout(updateTime, 1000);
}
updateTime();