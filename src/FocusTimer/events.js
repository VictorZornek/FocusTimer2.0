import * as actions from './actions.js'

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(action === undefined) {
            return
        }

        actions[action]() // para chamar a função referente ao clique do botão
    })
}