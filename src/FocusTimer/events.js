import { sounds, controls } from './elements.js'
import * as actions from './actions.js'
import * as soundsMusic from './sounds.js'


export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(action === undefined) {
            return
        }

        actions[action]() // para chamar a função referente ao clique do botão
    })
}

export function registerSounds() {
    sounds.addEventListener('click', (event) => {
        const sound = event.target.dataset.action

        if(sound === undefined) {
            return
        }
        
        soundsMusic[sound]()
    })
}