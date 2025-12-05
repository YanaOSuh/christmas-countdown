function christmasCountdown() {
    const christmasDate = new Date("December 25,2026 00:00");
    const now = new Date();
    const diff = christmasDate - now;
    
    const msinSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;
    
    const displayHour = Math.floor((diff%msInDay)/msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/msinSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff <=0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        merryChristmas();
        document.body.style.backgroundImage = "url('https://cdn.glitch.global/070a6f17-a218-49ba-a495-4b22a1f205d8/cookies.jpg?v=1698145377294')";
        document.body.style.backgroundColor = "#d3d7e0";
    }
}
let timerID = setInterval(christmasCountdown, 1000);

const button = document.querySelector("#myButton");
const audio = document.querySelector("#myAudio");
button.addEventListener("click", () => {
    if(audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
})

function merryChristmas() {
  const heading = document.querySelector("h1");
  heading.textContent = "HO-HO-HO! MERRY CHRISTMAS!!!";
  heading.classList.add("red");
  const helicopter = document.querySelector(".christmasBall");
  helicopter.style.display = "none";
  audio.src="https://cdn.glitch.global/070a6f17-a218-49ba-a495-4b22a1f205d8/MChristmasAudio.mp3?v=1698145467028";
}

const prev = document.querySelector(".prev");
const play = document.querySelector(".play");
const next = document.querySelector(".next");
const audioSong = document.querySelector(".audio");
const songName = document.querySelector(".songName");

const songs = [
  {name:`Let it snow! Let it snow! Let it snow! - Dean Martin`,
  path:`https://cdn.glitch.global/070a6f17-a218-49ba-a495-4b22a1f205d8/deanMartin.mp3?v=1698149815295`},
  {name:`Happy New Year - ABBA`,
  path:`https://cdn.glitch.global/070a6f17-a218-49ba-a495-4b22a1f205d8/happyNY-ABBA.mp3?v=1698149799553`},
  {name:`Jingle Bells - Bobby Helms`,
  path:`https://cdn.glitch.global/070a6f17-a218-49ba-a495-4b22a1f205d8/jingleBells.mp3?v=1698149804790`},
  {name:`Rockin' Around The Christmas Tree - Meghan Trainor`,
  path:`https://cdn.glitch.global/070a6f17-a218-49ba-a495-4b22a1f205d8/RockinAround.mp3?v=1698149824608`},
];

let i = 0;

play.addEventListener("click", () => {
  if(audioSong.paused) {
    audioSong.play();
    play.classList.toggle("pause");
  }
  else {
    audioSong.pause();
    play.classList.toggle("pause");
  }
})
next.addEventListener("click", () => {
  i++;
  if(i > songs.length -1) {
    i = 0;
  }
  audioSong.src = songs[i].path;
  songName.textContent = songs[i].name;
  play.classList.add("pause");
  playSong();
})
prev.addEventListener("click", () => {
  i--;
  if(i < 0) {
    i = songs.length -1;
  }
  audioSong.src = songs[i].path;
  songName.textContent = songs[i].name;
  play.classList.add("pause");
  playSong();
})

function playSong(){
  if(audioSong.paused){
    audioSong.play();
  }
}

audioSong.addEventListener("ended", () => {
  i++;
  audioSong.src = songs[i].path;
  songName.textContent = songs[i].name;

  if(i > songs.length) {
    i = 0;
  }
  else if(audioSong.paused) {
    audioSong.play();
  }
  play.classList.toggle("pause");
})

const progressBar = document.querySelector(".progressBar");
const progress = document.querySelector(".progress");

audioSong.addEventListener("timeupdate", updateProgress);

function updateProgress(e) {
  const {duration, currentTime} = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`
}

progressBar.addEventListener("click", setProgress);

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audioSong.duration;

  audioSong.currentTime = (clickX / width) * duration;
}

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 500,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape":{
        "type":"image",
        "stroke":{
        "width": 0,
        "color":"#000000"
    },
    "polygon":{
        "nb_sides": 5
    },
    "image":{
      "src":"https://cdn.glitch.global/070a6f17-a218-49ba-a495-4b22a1f205d8/snowflake.png?v=1695811298601",
      "width":100,
      "height":100
  }
  },
      "opacity": {
        "value": 0.7,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 50,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 1.5,
        "direction": "bottom",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 300,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode":  "bubble"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 150,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 200,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });