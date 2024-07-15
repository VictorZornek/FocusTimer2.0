import state from "./state.js"
import { countdown, updateDisplay } from "./timer.js"
import * as elements from './elements.js'
import * as sounds from './sounds.js'


export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    countdown()
}

export function reset() {
    state.isRunning = false
    stopAllSounds()
    elements.resetAllClassButtons(treeButton, 'treeSoundActivated', rainButton, 'rainSoundActivated', tentButton, 'tentSoundActivated', fireButton, 'fireButtonActivated')
    document.documentElement.classList.remove('running')
    
    state.minutes = 25
    state.seconds = 0
    
    updateDisplay(25, 0)
}

export function addMinutes() { // add 5 min no timer
    
    if(state.minutes > 55) {
        return
    }
    
    state.minutes += 5

    updateDisplay(state.minutes, state.seconds)
}

export function subMinutes() {  // sub 5 min no timer
    
    if(state.minutes < 5) {
        return
    }
    
    state.minutes -= 5

    updateDisplay(state.minutes, state.seconds)
}


const treeButton = elements.treeButton
const rainButton = elements.rainButton
const tentButton = elements.tentButton
const fireButton = elements.fireButton


export function treeSound() {
    state.isMute = elements.treeButton.classList.toggle('treeSoundActivated')
    elements.resetClassButtons(rainButton, 'rainSoundActivated', tentButton, 'tentSoundActivated', fireButton, 'fireSoundActivated')
    
    if(state.isMute) {
        stopAllSounds()
        sounds.treeSound.play()
        return
    }

    sounds.treeSound.pause()
}

export function rainSound() {
    state.isMute = elements.rainButton.classList.toggle('rainSoundActivated')
    elements.resetClassButtons(treeButton, 'treeSoundActivated', tentButton, 'tentSoundActivated', fireButton, 'fireSoundActivated')

    if(state.isMute) {
        stopAllSounds()
        sounds.rainSound.play()
        return
    }

    sounds.rainSound.pause()
}

export function tentSound() {
    state.isMute = elements.tentButton.classList.toggle('tentSoundActivated')
    elements.resetClassButtons(treeButton, 'treeSoundActivated', rainButton, 'rainSoundActivated', fireButton, 'fireSoundActivated')

    if(state.isMute) {
        stopAllSounds()
        sounds.tentSound.play()
        return
    }

    sounds.tentSound.pause()
}

export function fireSound() {
    state.isMute = elements.fireButton.classList.toggle('fireSoundActivated')
    elements.resetClassButtons(treeButton, 'treeSoundActivated', rainButton, 'rainSoundActivated', tentButton, 'tentSoundActivated')

    if(state.isMute) {
        stopAllSounds()
        sounds.fireSound.play()
        return
    }

    sounds.fireSound.pause()
}

export function stopAllSounds() {
    sounds.treeSound.pause()
    sounds.rainSound.pause()
    sounds.tentSound.pause()
    sounds.fireSound.pause()
}