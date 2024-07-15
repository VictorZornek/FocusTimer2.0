import * as elements from './elements.js'
import state from './state.js'
import * as actions from './actions.js'
import { kitchenTimer } from './sounds.js'


export function countdown() {
    clearTimeout(state.countdownId)

    if(state.isRunning == false) {
        return
    }

    let minutes = state.minutes
    let seconds = state.seconds

    state.seconds--

    if(seconds <= 0) {
        state.seconds = 59
        state.minutes--
    }

    if(minutes < 0) {
        actions.stopAllSounds()
        kitchenTimer.play()
        actions.reset()
        return
    }
    
    updateDisplay(minutes, seconds)
    
    state.countdownId = setTimeout(() => countdown(), 1000)

}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    elements.minutes.textContent = String(minutes).padStart(2, "0")
    elements.seconds.textContent = String(seconds).padStart(2, "0")
} 