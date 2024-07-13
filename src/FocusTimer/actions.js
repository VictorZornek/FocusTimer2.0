import * as elements from "./elements.js"
import state from "./state.js"
import { countdown, updateDisplay } from "./timer.js"

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    countdown()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    
    state.minutes = 10
    state.seconds = 0
    
    updateDisplay(10, 0)
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

