const changeBgColor = (value) => {
    const background = document.querySelector('#content');
    background.style.backgroundColor = value;
    localStorage.setItem('bgColor', value);
    console.log(localStorage);
}

const changeFontColor = (value) => {
    const font = document.querySelector('#content');
        font.style.color = value;
        localStorage.setItem('fontColor', value);
}

const changeFontSize = (value) => {
    const font = document.querySelectorAll('#content p');
    for (let i=0; i< font.length; i+=1) {
        font[i].style.fontSize = value;
    }
    localStorage.setItem('fontSize', value);
}

const changeLineHeight = (value) => {
    const font = document.querySelectorAll('#content p');
    for (let i=0; i<font.length; i+=1) {
        font[i].style.lineHeight = value;
    }
    localStorage.setItem('lineHeight', value);
}

const changeFontFamily = (value) => {
    const font = document.querySelector('#content');
    font.style.fontFamily = value;
    localStorage.setItem('fontFamily', value);
}

let bgColorButtons = document.querySelectorAll('#bg-color button');
for (let i=0; i<bgColorButtons.length; i += 1) {
    bgColorButtons[i].addEventListener('click', (event) => {
        changeBgColor(event.target.innerHTML);
        // console.log(event.target.innerHTML);
    });
}

let fontColorButtons = document.querySelectorAll('#font-color button');
for (let i=0; i<fontColorButtons.length; i += 1) {
    fontColorButtons[i].addEventListener('click', (event) => {
        changeFontColor(event.target.innerHTML);
        // console.log(event.target.innerHTML);
    })
}

let fontSizeButtons = document.querySelectorAll('#font-size button');
for (let i=0; i<fontSizeButtons.length; i += 1) {
    fontSizeButtons[i].addEventListener('click', (event) => {
        changeFontSize(event.target.innerHTML);
        // console.log(event.target.innerHTML);
    })
}

let lineHeightButtons = document.querySelectorAll('#line-height button');
for (let i=0; i<lineHeightButtons.length; i += 1) {
    lineHeightButtons[i].addEventListener('click', (event) => {
        changeLineHeight(event.target.innerHTML);
        // console.log(event.target.innerHTML);
    })
}

let fontFamilyButtons = document.querySelectorAll('#font-family button');
for (let i=0; i<fontFamilyButtons.length; i+=1) {
    fontFamilyButtons[i].addEventListener('click', (event) => {
        changeFontFamily(event.target.innerHTML);
        // console.log(event.target.innerHTML);
    })
}

const showLocalStorageInfos = () => {
    let bgColor = localStorage.getItem('bgColor');
    if (bgColor) {changeBgColor(bgColor)}

    let fontColor = localStorage.getItem('fontColor');
    if (fontColor) {changeFontColor(fontColor)}
    
    let fontSize = localStorage.getItem('fontColor');
    if (fontSize) {changeFontSize(fontSize)}

    let lineHeigth = localStorage.getItem('lineHeigth');
    if(lineHeigth) {changeLineHeight(lineHeigth)}

    let fontFamily = localStorage.getItem('fontFamily');
    if (fontFamily) {changeFontFamily(fontFamily)}
}

showLocalStorageInfos();