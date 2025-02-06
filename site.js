
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
let i = 0;

let audioUpload = document.querySelector('#audio-upload');


function songSystem() {
    audioUpload.addEventListener("change", storeSongs);
}

function storeSongs() {
    let file = audioUpload.files[0];  

    if (!file) return;

    songs[i] = URL.createObjectURL(file);
    localStorage.setItem("songs", JSON.stringify(songs));
    console.log(songs[i]);
    i++;

}

function displaySongs() {
    let j = 0;

    while (j < i ) {
    console.log(songs[j])
    j++;
    }
}

songSystem();
//displaySongs();