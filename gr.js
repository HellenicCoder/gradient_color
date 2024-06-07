const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");

const getRandomColor = () =>{
    const randomHex = Math.floor(Math.random()* 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generateGradient = (isRandom) => {
    if(isRandom){
        colorInputs[0].value = getRandomColor();
        colorInputs[1].value = getRandomColor();
    }
    //let create a linear gradient by click on each btn input value
    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
    gradientBox.style.background = gradient;
    textarea.value = `background: ${gradient};`;
}
const copycode = () =>{//copy the text
    navigator.clipboard.writeText(textarea.value);
    copyBtn.innerText = "code copied";
    setTimeout(() =>copyBtn.innerText = "copy code", 1600);
}

colorInputs.forEach(input =>{
    //calling generateGradient function on each color inpyt click
    input.addEventListener("input", () =>generateGradient(false));
});

selectMenu.addEventListener("change", () =>generateGradient(false));
refreshBtn.addEventListener("click",() => generateGradient(true));
copyBtn.addEventListener("click",copycode)