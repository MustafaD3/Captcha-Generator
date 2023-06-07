let captcha = ""
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "X", "Y", "Z"]
const lengthElement = document.querySelector("#length")
const refreshButton = document.querySelector("#refresh")
const charactersContainer = document.querySelector("#characters")
const captchInput = document.querySelector("#captcha")
const submitButton = document.querySelector("#submit")
submitButton.addEventListener("click",control)
refreshButton.addEventListener("click",captchaGenerator)
function captchaGenerator(){
    captcha = ""
    charactersContainer.innerHTML = ""
    const length = Number(lengthElement.value)
    for(let i = 0;i<length;i++)characterGenerator()
}
function characterGenerator(){
    const random = Math.floor(Math.random() * characters.length)
    const randomC = Math.random() * 1 > 0.5 ? 1:0
    const characterEl = document.createElement("span")
    const character = !Boolean(randomC) ? characters[random].toLocaleLowerCase():characters[random]
    captcha+=character
    characterEl.innerHTML = character
    characterEl.style.color = colorGenerator()
    charactersContainer.append(characterEl)
}
function colorGenerator(){
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`
}
function control(){
    if(captchInput.value === captcha)alert("Captcha Doğrulandı")
    else alert("Captcha Yanlış")
}
captchaGenerator()