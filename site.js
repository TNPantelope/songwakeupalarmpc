
// The clock
let clock = document.querySelector('.clock');
function updateTime() {
    let currentTime = new Date();
    let timeString = currentTime.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        //second: '2-digit',
    });
    
    
    let [time, meridiem] = timeString.split(' ');
    clock.innerHTML = `${time}<span class="meridiem">${meridiem.toLowerCase()}</span>`;
    setTimeout(updateTime, 1000);
}
updateTime();

// Song manage system

let songs = [];

function storeMp3File() {
    let songInput = document.getElementById('mp3-upload');
    console.log(songInput);


}