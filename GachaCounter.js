let pullEl = document.getElementById("pull-el")
let saveEl = document.getElementById("save-el")
let count = 0

function pull() {
    count += 1
    pullEl.textContent = count
}

function tenpull() {
    count += 10
    pullEl.textContent = count
}

function save() {
    let pullStr = count + " - "
    saveEl.textContent += pullStr
    pullEl.textContent = 0
    count = 0
}