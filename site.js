
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
let songNames = [];

let i = 0;


let audioUpload = document.querySelector('#audio-upload');


function songSystem() {
    audioUpload.addEventListener("change", storeSongs);
}

function storeSongs() {
    let file = audioUpload.files[0];  
    if (!file) return;

    
    songs[i] = URL.createObjectURL(file);
    songNames[i] = file.name;

    songNames[i] = songNames[i].slice(0, -4);

    localStorage.setItem("songs", JSON.stringify(songs));
    localStorage.setItem("songNames", JSON.stringify(songNames));



    console.log(songs[i]);
    console.log(songNames[i]);
    i++;

    displaySongs();
}

function displaySongs() {
    let songList = document.querySelector('.song-list'); 
    
    songList.innerHTML = '';
    
    let j = 0;
    while (j < i) {
        
        let songDiv = document.createElement('div');
        songDiv.className = 'song-item'; 
        
        
        songDiv.innerHTML = `
            <span>${songNames[j]}</span>
            <audio src="${songs[j]}" controls></audio>
        `;
        
        
        songList.appendChild(songDiv);
        j++;
    }
}

songSystem();
