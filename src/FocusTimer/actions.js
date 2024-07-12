export function toggleRunning() {
    console.log('estamos no togglerunning')
    document.documentElement.classList.toggle('running')
}

export function reset() {
    console.log('reset aplicação')
    document.documentElement.classList.remove('running')
}

export function addMinutes() {
    console.log('adiciona 5 minutos no timer')
}

export function subMinutes() {
    console.log('subtrai 5 minutos no timer')
}