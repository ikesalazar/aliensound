const melodys = document.querySelectorAll(".melody")
melodys.forEach(mel => {
    mel.addEventListener("change", () => playMelody(mel))
})

function playMelody(mel){
    const melodybts = document.getElementById(mel.dataset.sound)
    if(mel.checked){
        melodybts.currentTime = 0
        melodybts.play()
        melodybts.loop = true
    }else{melodybts.pause()}
}

const effects = document.querySelectorAll(".effect")
effects.forEach(efcc => {
    efcc.addEventListener("click", () => playEffect(efcc))
})

function playEffect(efcc){
    const effectbts = document.getElementById(efcc.dataset.sound)
    effectbts.currentTime = 0
    effectbts.play()
}

const beats = document.querySelectorAll(".beat")
beats.forEach(bt => {
    bt.addEventListener("click", () => playBeat(bt))
})

function playBeat(bt){
    const beatbts = document.getElementById(bt.dataset.sound)
    beatbts.currentTime = 0
    beatbts.play()
}