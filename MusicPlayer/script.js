const audio = document.getElementById("audio");
const songTitle = document.getElementById("song-title");
const artistName = document.getElementById("artist-name");
const coverImage = document.getElementById("cover-image");
const playPauseBtn = document.getElementById("play-pause");

const songs = [
    { title: "Dheema Dheema", artist: "Anirudh Ravinchander", src: "music/Dheema.mp3", cover: "images/01.jpg" },
    { title: "Vazhithunaiye", artist: "Sid Sriram", src: "music/Vazhithunaiye.mp3", cover: "images/02.jpg" },
    { title: "Yennai Izhukkuthadi", artist: "AR Rahman", src: "music/Yennai Izhukkuthadi.mp3", cover: "images/03.jpg" }
];

let currentSongIndex = 0;
let isPlaying = false;

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.innerHTML = "▶️";
    } else {
        audio.play();
        playPauseBtn.innerHTML = "⏸";
    }
    isPlaying = !isPlaying;
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSong();
}

function updateSong() {
    const song = songs[currentSongIndex];
    songTitle.innerText = song.title;
    artistName.innerText = song.artist;
    coverImage.src = song.cover;
    audio.src = song.src;
    audio.play();
    playPauseBtn.innerHTML = "⏸";
    isPlaying = true;
}

const progressBar = document.getElementById("progress-bar");


audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
});


function seekSong() {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
}

