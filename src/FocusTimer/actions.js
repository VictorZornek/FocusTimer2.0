import * as elements from "./elements.js"
import state from "./state.js"

export function toggleRunning() {
    console.log('estamos no togglerunning')
    document.documentElement.classList.toggle('running')
}

export function reset() {
    state.minutes = 10
    document.documentElement.classList.remove('running')
    
    console.log(state.minutes)
}

export function addMinutes() { // add 5 min no timer
    if(state.minutes > 90) {
        return
    }
    
    state.minutes += 5
    console.log(state.minutes)
}

export function subMinutes() {  // sub 5 min no timer
    if(state.minutes < 0) {
        return
    }

    state.minutes -= 5
    console.log(state.minutes)
}