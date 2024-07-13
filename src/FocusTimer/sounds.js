import * as elements from './elements.js'

const treeButton = elements.treeButton
const rainButton = elements.rainButton
const tentButton = elements.tentButton
const fireButton = elements.fireButton

export function treeSound() {
    elements.treeButton.classList.toggle('treeSoundActivated')
    elements.resetClassButtons(rainButton, 'rainSoundActivated', tentButton, 'tentSoundActivated', fireButton, 'fireSoundActivated')
}

export function rainSound() {
    elements.rainButton.classList.toggle('rainSoundActivated')
    elements.resetClassButtons(treeButton, 'treeSoundActivated', tentButton, 'tentSoundActivated', fireButton, 'fireSoundActivated')
}

export function tentSound() {
    elements.tentButton.classList.toggle('tentSoundActivated')
    elements.resetClassButtons(treeButton, 'treeSoundActivated', rainButton, 'rainSoundActivated', fireButton, 'fireSoundActivated')
}

export function fireSound() {
    elements.fireButton.classList.toggle('fireSoundActivated')
    elements.resetClassButtons(treeButton, 'treeSoundActivated', rainButton, 'rainSoundActivated', tentButton, 'tentSoundActivated')
}

