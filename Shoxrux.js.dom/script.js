let body = document.body
let main = document.querySelector('.mainBox')

for(let i = 0; i <= 9; i++){
    // a create
let wrapperBox = document.createElement('div')
let imgTextBox = document.createElement('div')
let imgBox = document.createElement('div')
let imgInfoBox = document.createElement('div')
let textBox = document.createElement('div')
let img = document.createElement('img')
let h3 = document.createElement('h3')
let h5 = document.createElement('h5')
let h5_1 = document.createElement('h5')
let h6 = document.createElement('h6')


// b styling

wrapperBox.classList.add('wrapperBox')
imgTextBox.classList.add('imgTextBox')
imgBox.classList.add('imgBox')
imgInfoBox.classList.add('imgInfoBox')
textBox.classList.add('textBox')
h5_1.classList.add('h5_1')
img.classList.add('img')
 
img.src = "./img/Group 815.png"

h3.innerHTML = "Программа"
h6.innerHTML = `«Разработка мобильных <br> приложений»`
h5_1.innerHTML = `Разработчик мобильных приложений создаёт <br> приложения, которыми люди ежедневно пользуется <br> на смартфонах, умных часах и планшетах.`
h5.innerHTML = "24 месяца"


// c append
imgBox.append(img)
imgInfoBox.append(h6)
textBox.append(h5_1)
imgTextBox.append(imgBox, imgInfoBox)
wrapperBox.append(h3, imgTextBox, textBox, h5 )
main.append(wrapperBox) 
}

let discountBox = document.querySelector('.wrapperBox:nth-child(2)')
let discountBox1 = document.querySelector('.wrapperBox:nth-child(5)')
let discountBox2 = document.querySelector('.wrapperBox:nth-child(6)')

// for(let i = 0; i <= 3; i++){
let text = document.createElement('text')
let discount = document.createElement('discount')

discount.classList.add('discount')
text.classList.add('text')

text.innerHTML = '-10%'

discount.append(text)
discountBox.append(discount)
// discountBox1.append(discount)
// discountBox2.append(discount)

// }

let boxDisco = document.querySelectorAll('.box')
let colorBox2 = document.querySelector('.colorBox2')
console.log(colorBox2);

boxDisco.forEach(btn => {
    btn.onclick = () =>{
        if(btn === boxDisco[0]){
            colorBox2.style.left = "25%"
            colorBox2.style.bottom = '2px'
        } else if(btn === boxDisco[1]){
            colorBox2.style.left = '50%'
            colorBox2.style.bottom = '2px'
        } else if(btn === boxDisco[2]){
            colorBox2.style.left = '75%'
            colorBox2.style.bottom = '2px'
        }
    }
})


let cursor = document.querySelectorAll('.cursor')
let colorBox = document.querySelector('.colorBox')
console.log(colorBox);

cursor.forEach(btn => {
    btn.onclick = () =>{
        if(btn === cursor[0]){
            colorBox.style.left = "0"
            colorBox.style.bottom = '2px'
        } else if(btn === cursor[1]){
            colorBox.style.left = '215px'
            colorBox.style.bottom = '2px'
        } else if(btn === cursor[2]){
            colorBox.style.left = '440px'
            colorBox.style.bottom = '2px'
        } else if(btn === cursor[3]){
            colorBox.style.left = '625px'
            colorBox.style.bottom = '2px'
        }
    }
})


