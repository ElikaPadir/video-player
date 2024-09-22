let playerArea = document.querySelector(".myplayer")
let media = playerArea.querySelector("video")
let controls = playerArea.querySelector(".myplayer__controls")

let play = controls.querySelector(".play")
let rwd = controls.querySelector(".rewind")
let fwd = controls.querySelector(".forward")
let timerArea = controls.querySelector(".timer")
let currentTime = timerArea.querySelector(".currentTime")
let videoTime = timerArea.querySelector(".videoTime")
let timerBar = controls.querySelector(".controls__progressbar-current")
let volumeIcon = controls.querySelector(".volume .icon")
let volumeProgressBar = controls.querySelector(".volume .volume__progress")
let volumeProgressBarInput = volumeProgressBar.querySelector("input")
let fullscreen = controls.querySelector(".fullscreen .icon")





media.addEventListener("timeupdate" , function () {
    currentTime.textContent = getTime (media.currentTime)
    let braLength = ( media.currentTime / media.duration ) * 100
    timerBar.style = `background : linear-gradient(90deg, rgba(230,126,34,1) ${braLength}%, #e1e1e1 0%)`
    timerBar.value = braLength
    
})


play.addEventListener("click" , function () {
    videoTime.textContent = getTime(media.duration

    )
    
    if (media.paused){
        togglePlayIcon()
        media.play()
        
    }else{
        togglePlayIcon()
        media.pause()
    }


})

rwd.addEventListener("click", function () {
    media.currentTime = media.currentTime - 5
})

fwd.addEventListener("click", function () {
    media.currentTime = media.currentTime + 5
})


timerBar.addEventListener("input" , function () {
    media.currentTime = (this.value / 100 ) * media.duration
    
})


volumeIcon.addEventListener("click" , function () {
    volumeProgressBar.classList.toggle('active')    
})
volumeProgressBarInput.addEventListener("input" , function () {
    media.volume = this.value / 100
    this.style = `background: linear-gradient(90deg, rgba(230,126,34,1) ${this.value}%, #e1e1e1 0%);`
})

fullscreen.addEventListener("click" ,function () {
    if (!document.fullscreenElement) {
        playerArea.requestFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    
} )





function togglePlayIcon() {
    let icon = play.querySelector("i")
    icon.classList.toggle('ion-md-pause')
    icon.classList.toggle('ion-md-play')
}


function getTime (time) {
    let minutes = Math.floor(time / 60)
    let seconds = Math.floor(time - ( minutes * 60 ))

    let minuteValue
    let secondsValue
    
    if (minutes < 10) {
        minuteValue = '0' + minutes
    } else {
     minuteValue = minutes   
    }
    if (seconds < 10) {
        secondsValue = '0' + seconds
    } else {
     secondsValue = seconds   
    }

    return minuteValue + ':' + secondsValue
}