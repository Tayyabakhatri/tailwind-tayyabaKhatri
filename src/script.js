let btn = document.getElementById("btn");
let span = document.querySelectorAll('#counter span')
console.log(span)
let counter = document.getElementById("counter")
let go = document.getElementById("go")
let finalMessage = document.getElementsByClassName('final')

btn.addEventListener('click', () => {
    go.style.className = "name"
    go.innerText = "Get Ready"
    btn.style.display = "none"
    document.getElementById("counter").style.display = "block"
})
