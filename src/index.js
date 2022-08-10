let navList = document.querySelector('.nav__list');
let controller = document.querySelector('.controller');
let audio = document.createElement('audio');
let main = document.querySelector('.main');
let isPlaying = false;

audio.src = `./src/assets/audio/forest.mp3`;
audio.currentTime = 0;
document.body.appendChild(audio);

controller.addEventListener('click', playMusic);

navList.addEventListener('click', (e) => {
    if (!e.target.dataset.item) return;
    main.style.background = `url('./src/assets/img/${e.target.dataset.item}.jpg')`;
    audio.src = `./src/assets/audio/${e.target.dataset.item}.mp3`;
    audio.currentTime = 0;
    if (isPlaying) audio.play();
})

function playMusic() {
    controller.classList.toggle('play');
    controller.classList.toggle('pause');
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
    } else {
        audio.pause();
        isPlaying = false;
    }
}