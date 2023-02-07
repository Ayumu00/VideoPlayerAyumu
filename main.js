// View Button
const cameraBack = document.querySelector(".view>button")
const viewIcon = document.querySelector(".view>button>span")
const viewOnOff = document.querySelector(".view-on-off")
const viewText = document.querySelectorAll(".view-text")

// Video Forward and Backward Button
const forwardButton = document.querySelector(".forward")
const backwardButton = document.querySelector(".backward")

// PlayBackSpeed
const SpeedPlay = document.querySelector(".speed>button")
const SpeedPlayIcon = document.querySelector(".speed>button>span")
const SpeedPlayText = document.querySelectorAll(".speed-text")
const SpeedPlayTextAmount = document.querySelector(".speed-amount")

// Mirror Button
const mirrorButton = document.querySelector(".mirror>button")
const mirrorIcon = document.querySelector(".mirror>button>span")
const mirrorOnOff = document.querySelector(".mirror-on-off")
const mirrorText = document.querySelectorAll(".mirror-text")

// Video Loop
const videoLoopButton = document.querySelector(".looping>button")
const videoLoopIcon = document.querySelector(".looping>button>span")
const videoLoopOnOff = document.querySelector(".loop-on-off")
const videoLoopText = document.querySelectorAll(".loop-text")

// Video Play Paused
const vidBackFile = document.querySelector(".video-back-cam")
const vidFrontFile = document.querySelector(".video-front-cam")
const playPause = document.querySelector(".play-pause>button")
const playPauseSpan = document.querySelector(".play-pause>button>span")

// Video Progress
const progressRange = document.querySelector(".progress>input[type='range']")
const ProgressTextCurrent = document.querySelector(".current-time")
const ProgressTextDuration = document.querySelector(".duration-time")

// Center Play Button
const centerPlayButton = document.querySelector(".center>span")
const centerPlayButtonDiv = document.querySelector(".center")

// Full Screen Button
const fullScreenButton = document.querySelector(".fullscreen>button")
const fullScreenButtonText = document.querySelector(".fullscreen>button>span")
const videoEntireContainer = document.querySelector(".video-container")

// Get Video Title
const VideoTitleChange = document.querySelector(".title-video")

// Volume Button
const volumeContainer = document.querySelector(".volume")
const volumeButtonSpan = document.querySelector(".volume>button>span")
const volumeRangeContainer = document.querySelector(".volume-range")
const volumeRange = document.querySelector(".volume-range>input[type='range']")

// Opacity
const opacityContainer = document.querySelector(".main-container")
const opacityControlsBottomDiv = document.querySelector(".bottom")

function cameraAngle(){
    if (vidBackFile.style.cssText.includes("visible")){
        vidBackFile.style.cssText = "visibility:hidden"
        vidFrontFile.style.cssText = "visibility:visible"
        viewIcon.style.cssText = "color:white;"
        viewText.forEach(colorText => colorText.style.cssText = "color: white")
        vidBackFile.muted = true
        vidFrontFile.muted = false
        viewOnOff.innerText = "FRONT"
    } else {
        vidBackFile.style.cssText = "visibility:visible"
        vidFrontFile.style.cssText = "visibility:hidden"
        viewIcon.style.cssText = "color:yellow;"
        viewText.forEach(colorText => colorText.style.cssText = "color: yellow")
        vidBackFile.muted = false
        vidFrontFile.muted = true
        viewOnOff.innerText = "BACK"
    }
}

function playPausedButton(){
    if (playPauseSpan.innerText == "play_arrow"||centerPlayButton.innerText == "replay"){
        centerPlayButton.innerText = "play_circle"
        playPauseSpan.innerText = "pause"
        vidBackFile.play()
        vidFrontFile.play()
        opacityContainer.classList.add("opacity-hide")
        centerPlayButton.style.cssText = "visibility:hidden"
    } else {
        playPauseSpan.innerText = "play_arrow"
        vidBackFile.pause()
        vidFrontFile.pause()
        opacityContainer.classList.remove("opacity-hide")
        centerPlayButton.style.cssText = "visibility:visible" 
    }
}

function VideoProgressFunction(){
    timeBasedFormat()
    vidFrontFile.currentTime = this.value
    vidBackFile.currentTime = this.value
}

function timeBasedFormat(){
    // Time
    //Duration Hours:Minutes:Seconds
    let hours = Math.floor(vidFrontFile.currentTime/3600)
    let minutes = Math.floor(vidFrontFile.currentTime / 60 % 60)
    let seconds = Math.floor(vidFrontFile.currentTime % 60)
    //CurrentTime Hours:Minutes:Seconds
    let hoursD = Math.floor(vidFrontFile.duration/3600)
    let minutesD = Math.floor(vidFrontFile.duration / 60 % 60)
    let secondsD = Math.floor(vidFrontFile.duration % 60)

    ProgressTextCurrent.innerText = `${hours>0?hours+":":""}${minutes<10?"0"+minutes:minutes}:${seconds<10?"0"+seconds:seconds}`
    ProgressTextDuration.innerText = `${hoursD>0?hoursD+":":""}${minutesD<10?"0"+minutesD:minutesD}:${secondsD<10?"0"+secondsD:secondsD}`
}

function videoUpdateTime(){
    timeBasedFormat()
    progressRange.value = Math.floor(vidFrontFile.currentTime)
    progressRange.max = Math.floor(vidFrontFile.duration)
}

function mirrorFunction(){
    if (mirrorIcon.style.cssText.includes("yellow")){
        mirrorIcon.style.cssText = "color:white"
        mirrorText.forEach(colorText => colorText.style.cssText = "color:white")
        vidFrontFile.classList.remove("mirrorTrans")
        vidBackFile.classList.remove("mirrorTrans")
        mirrorOnOff.innerText = "OFF"
    } else {
        mirrorIcon.style.cssText = "color:yellow"
        mirrorText.forEach(colorText => colorText.style.cssText = "color:yellow")
        vidFrontFile.classList.add("mirrorTrans")
        vidBackFile.classList.add("mirrorTrans")
        mirrorOnOff.innerText = "ON"
    }
}

function videoLoopFunction(){
    if (videoLoopIcon.style.cssText.includes("yellow")){
        videoLoopIcon.style.cssText = "color:white"
        videoLoopText.forEach(colorText=>colorText.style.cssText = "color:white")
        vidBackFile.loop = false;
        vidFrontFile.loop = false;
        videoLoopOnOff.innerText = "OFF"
    } else {
        videoLoopIcon.style.cssText = "color:yellow"
        videoLoopText.forEach(colorText=>colorText.style.cssText = "color:yellow")
        vidBackFile.loop = true;
        vidFrontFile.loop = true;
        videoLoopOnOff.innerText = "ON"
    }
}

// Variable for this function only
let mode="1.5"
function SpeedPlayBackFunction(){
    if (mode == "1.5"){
        SpeedPlayIcon.style.cssText = "color:yellow"
        SpeedPlayText.forEach(colorText=>colorText.style.cssText="color:yellow")
        SpeedPlayTextAmount.innerText = "1.5X"
        vidBackFile.playbackRate = 1.5
        vidFrontFile.playbackRate = 1.5
        mode = "2.0"
    } else if (mode == "2.0") {
        SpeedPlayIcon.style.cssText = "color:yellow"
        SpeedPlayText.forEach(colorText=>colorText.style.cssText="color:yellow")
        SpeedPlayTextAmount.innerText = "2X"
        vidBackFile.playbackRate = 2.0
        vidFrontFile.playbackRate = 2.0
        mode = "0.5"
    } else if (mode == "0.5"){
        SpeedPlayIcon.style.cssText = "color:yellow"
        SpeedPlayText.forEach(colorText=>colorText.style.cssText="color:yellow")
        SpeedPlayTextAmount.innerText = "0.5X"
        vidBackFile.playbackRate = 0.5
        vidFrontFile.playbackRate = 0.5
        mode = "1.0"
    } else {
        SpeedPlayIcon.style.cssText = "color:white"
        SpeedPlayText.forEach(colorText=>colorText.style.cssText="color:white")
        SpeedPlayTextAmount.innerText = "1X"
        vidBackFile.playbackRate = 1.0
        vidFrontFile.playbackRate = 1.0
        mode = "1.5"
    }
}

function fullscreenFunction(){
    if (fullScreenButtonText.innerText == "fullscreen"){
        document.documentElement.requestFullscreen()
        screen.orientation.lock("landscape")
        fullScreenButtonText.innerText="close_fullscreen"
    } else {
        screen.orientation.unlock()
        document.exitFullscreen()
        fullScreenButtonText.innerText="fullscreen"
    }
}

function volumeRangeOnInputFunction(){
    vidBackFile.volume = this.value/100
    vidFrontFile.volume = this.value/100
    if (this.value == "0"){
        volumeButtonSpan.innerText = "volume_mute"
    } else {
        volumeButtonSpan.innerText = "volume_up"
    }
}

function bindKeys(e){
    if (e.keyCode == "109"){
        mirrorFunction()
    } else if (e.keyCode == "108"){
        videoLoopFunction()
    } else if (e.keyCode == "115"){
        SpeedPlayBackFunction()
    } else if (e.keyCode == "107"){
        cameraAngle()
    }
}

// View Button
cameraBack.addEventListener("click",cameraAngle)

// Video Play Paused Button
playPause.addEventListener("click",playPausedButton)

// Video Progress
progressRange.oninput = VideoProgressFunction
vidBackFile.addEventListener("timeupdate", videoUpdateTime)
vidFrontFile.addEventListener("timeupdate", videoUpdateTime)

// Mirror Button
mirrorButton.addEventListener("click", mirrorFunction)

// Video Loop Button
videoLoopButton.addEventListener("click", videoLoopFunction)

// PlayBackSpeed Button
SpeedPlay.addEventListener("click", SpeedPlayBackFunction)

// Center Play Button
centerPlayButtonDiv.addEventListener("click",playPausedButton)

// Full Screen Button
fullScreenButton.addEventListener("click", fullscreenFunction)

// When Video End
vidBackFile.addEventListener("ended",()=>{
    centerPlayButton.style.cssText = "visibility:visible"
    centerPlayButton.innerText = "replay"
    playPauseSpan.innerText = "replay"
    opacityContainer.classList.remove("opacity-hide")
})
vidFrontFile.addEventListener("ended",()=>{
    centerPlayButton.style.cssText = "visibility:visible"
    centerPlayButton.innerText = "replay"
    playPauseSpan.innerText = "replay"
})

// Forward and Backward Button in 3 SECONDS forward and backward
forwardButton.addEventListener("click",()=>{
    vidBackFile.currentTime = vidBackFile.currentTime + 3
    vidFrontFile.currentTime = vidFrontFile.currentTime + 3
})
backwardButton.addEventListener("click",()=>{
    vidBackFile.currentTime = vidBackFile.currentTime - 3
    vidFrontFile.currentTime = vidFrontFile.currentTime - 3
})

// Volume Button
volumeContainer.addEventListener("mouseover",()=>{
    volumeRangeContainer.style.cssText = "position:relative;visibility:visible;"
})
volumeContainer.addEventListener("mouseleave",()=>{
    volumeRangeContainer.style.cssText = "position:absolute;visibility:hidden;"
})
volumeButtonSpan.addEventListener("click",()=>{
    if (volumeButtonSpan.innerText == "volume_up"){
        volumeButtonSpan.innerText = "volume_mute"
        vidBackFile.muted = true
        vidFrontFile.muted = true
        volumeRange.value = 0
    } else {
        if (vidBackFile.style.cssText.includes("visible")){
            vidBackFile.muted = false
            vidBackFile.volume = 0.5
            vidFrontFile.muted = true
        } else {
            vidBackFile.muted = true
            vidFrontFile.muted = false
            vidFrontFile.volume = 0.5
        }
        volumeButtonSpan.innerText = "volume_up"
        volumeRange.value = 50
    }
})
volumeRange.oninput = volumeRangeOnInputFunction

// Changes the video title depending to the video file name, only if MP4
let titleName = vidFrontFile.src.split("/").slice(-1)[0].split(".mp4")[0]
VideoTitleChange.innerText = titleName

// Back Video Mute by Default
vidBackFile.muted = true

// Bind keys
window.addEventListener("keypress",bindKeys)

// Opacity
opacityControlsBottomDiv.addEventListener("mouseover", ()=>{
    opacityContainer.classList.remove("opacity-hide")
})
opacityControlsBottomDiv.addEventListener("mouseleave", ()=>{
    if (playPauseSpan.innerText == "pause"){
        opacityContainer.classList.add("opacity-hide")
    }
})