export const controls = document.getElementById('controls')

export const sounds = document.getElementById('sounds')

export const minutes = document.getElementById('minutes')

export const seconds = document.getElementById('seconds')

export const treeButton = document.getElementById('tree')

export const rainButton = document.getElementById('rain')

export const tentButton = document.getElementById('tent')

export const fireButton = document.getElementById('fire')



export function resetClassButtons(firstButton, firstButtonClass, secondButton, secondButtonClass, thirdButton, thirdButtonClass) {
    firstButton.classList.remove(firstButtonClass)
    secondButton.classList.remove(secondButtonClass)
    thirdButton.classList.remove(thirdButtonClass)
}