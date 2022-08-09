let navList = document.querySelector('.nav__list');
let audio = document.createElement('audio');
document.body.appendChild(audio);

// navList.addEventListener('click', (e) => {
//     console.log(e.target);
// })

let play = document.querySelector('.play');
let pause = document.querySelector('.pause');

play.addEventListener('click', () => {
    play.style.display = 'none';
    pause.style.display = 'block';    
    playAudio('forest');
});

pause.addEventListener('click', () => {
    play.style.display = 'block';
    pause.style.display = 'none'; 
    audio.pause();
});


function playAudio(bird) {
    audio.src = `./src/assets/audio/${bird}.mp3`;
    audio.autoplay = true;
    audio.currentTime = 0;
    audio.play();
}

