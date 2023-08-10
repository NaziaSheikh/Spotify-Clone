console.log("Welcome to Spotify")

//initialize variables
let songIndex = 0;
let audioElement = new Audio("anti-hero.mp3");
let masterPlay = document.getElementById("masterPlay");
let myprogress = document.getElementById("myprogress");
let tab=document.getElementById("mutab");
let songs = [
    {songName: "Anti-Hero", filePath:"SPOTIFY/anti-hero.mp3", coverPath: "SPOTIFY/taylor.jgp"},
    {songName: "Anti-Hero", filePath:"SPOTIFY/anti-hero.mp3", coverPath: "SPOTIFY/taylor.jgp"},
    {songName: "Anti-Hero", filePath:"SPOTIFY/anti-hero.mp3", coverPath: "SPOTIFY/taylor.jgp"},
    {songName: "Anti-Hero", filePath:"SPOTIFY/anti-hero.mp3", coverPath: "SPOTIFY/taylor.jgp"},
    {songName: "Anti-Hero", filePath:"SPOTIFY/anti-hero.mp3", coverPath: "SPOTIFY/taylor.jgp"},
    {songName: "Anti-Hero", filePath:"SPOTIFY/anti-hero.mp3", coverPath: "SPOTIFY/taylor.jgp"},
    {songName: "Anti-Hero", filePath:"SPOTIFY/anti-hero.mp3", coverPath: "SPOTIFY/taylor.jgp"},
    {songName: "Anti-Hero", filePath:"SPOTIFY/anti-hero.mp3", coverPath: "SPOTIFY/taylor.jgp"},
    {songName: "Anti-Hero", filePath:"SPOTIFY/anti-hero.mp3", coverPath: "SPOTIFY/taylor.jgp"}
]


//handle play pause button
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        tab.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        tab.style.opacity=0;
    }
})
//forprogress bar timeing

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogress.value=progress;
})
myprogress.addEventListener('change',()=>{
    audioElement.currentTime=myprogress.value * audioElement.duration/100;
})