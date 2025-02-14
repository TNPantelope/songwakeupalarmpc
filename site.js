
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

// Song managing system

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
            <span class="songNameDiv">${songNames[j]}</span>
            <audio class="audioControls" src="${songs[j]}" controls></audio>
            <label class="switch" id="songSwitch">
                <input type="checkbox" id=>
                <span class="slider"></span>
            </label>
            <br/>
        `;
        
        
        songList.appendChild(songDiv);
        j++;
    }
}

songSystem();

// alarm managing system
function alarmPopupFn() {
    document.getElementById("setAlarmPopup").style.display = "flex";
}

function backgroundBtnPopupFn() {
    document.getElementById("setAlarmBackground").style.display = "block";
}

function alarmClosePopupFn() {
    document.getElementById("setAlarmPopup").style.display = "none";
    document.getElementById("setAlarmBackground").style.display = "none";
}

// set alarm input default value to current time
let now = new Date();
let hours = now.getHours().toString().padStart(2, '0');
let minutes = now.getMinutes().toString().padStart(2, '0');
let currentTime = `${hours}:${minutes}`;

document.querySelector('#alarmTime').value = currentTime;


// store and display alarms
let alarms = []; 
let alarmTime = document.getElementById('alarmTime');

let k = 0;

alarmTime.addEventListener("input", function(e) {
});

function alarmSystem() {
    let alarm = alarmTime.value;  
    if (!alarm) return;
   
    alarms[k] = alarm;
    localStorage.setItem("alarms", JSON.stringify(alarms));
    
    console.log(alarms[k]);

    k++;
    alarmClosePopupFn();
    displayAlarms();
}


function displayAlarms() {
    let alarmList = document.querySelector('.saved-alarms'); 
    alarmList.innerHTML = '';

    let j = 0;
    while (j < k) {

        let [hours, minutes] = alarms[j].split(':');
        let date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);
        
       
        let timeString = date.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit', 
            hour12: true 
        });
        
        let alarmDiv = document.createElement('div');
        alarmDiv.className = 'alarm-item'; 
        
        
        alarmDiv.innerHTML = `
            <br/>
            <div>${timeString}</span>
            <label class="switch" id="alarmSwitch">
                <input type="checkbox">
                <span class="slider"></span>
            </label>
            <br/>

        `;
        
        alarmList.appendChild(alarmDiv);
        j++;
    }
}

