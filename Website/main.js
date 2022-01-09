let colorSelectorBox = document.querySelector('.color-creator-box');
let colorSelectorButton = document.querySelector('.color-creator-button');

function createNewColor() 
{
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blu = Math.floor(Math.random() * 256);

    let color = 'rgb(' + red + ',' + green + ',' + blu +')';
    console.log(color);
    
    colorSelectorBox.style.background = color;
    colorSelectorBox.innerHTML = color;     // text in middle of the box 
}

createNewColor();
colorSelectorButton.addEventListener('click', createNewColor); 