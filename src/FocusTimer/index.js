import state from "./state.js"
import * as timer from './timer.js'
import * as events from './events.js'

export function start(minutes, seconds) {
    minutes = state.minutes
    seconds = state.seconds

    timer.updateDisplay()
    
    events.registerControls()
    events.registerSounds()

}