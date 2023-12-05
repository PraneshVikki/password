const passwordGenerator = document.querySelector('#passwordGe');
const passwordLength = document.querySelector('#passwordLen');
const number = document.querySelector('#number');
const capital = document.querySelector('#Capital');
const smLetter = document.querySelector('#smLetter');
const symbol = document.querySelector('#symbol');
const gp = document.querySelector('#gp');
const copy = document.querySelector('#Copy');
const frm = document.querySelector('#frm');
const bubble = document.querySelector('.bubble');
copy.addEventListener('click',async()=>{
    const pass = passwordGenerator.value;
    if (pass){
        await navigator.clipboard.writeText(pass);
        alert('Code copied')
    }
    else{
        alert("There is no password to copy");
    }
})

function generator(min,max){
    const limit = max - min +1;
    return String.fromCharCode(Math.floor(Math.random()*limit)+min);
}

function gnnum(){
    return generator(48,57)
}
function gnCap(){
    return generator(65,90)
}
function gnSm(){
    return generator(90,122)
}
function gnSym(){
    const symbols="~!@#$%^&*()_+|}{<>*./";
    return symbols[Math.floor(Math.random()*symbols.length)];
}

const functionArray = [
    {
        ele:number,
        fun:gnnum
    },
    {
        ele:capital,
        fun:gnCap
    },
    {
        ele:smLetter,
        fun:gnSm
    },
    {
        ele:symbol,
        fun:gnSym
    }
]
frm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const limit = passwordLength.value;
    let generatePassword = '';
    const funArray = functionArray.filter(({ele})=>ele.checked);
    for (let i = 0 ;i<limit; i++){
        const index = Math.floor(Math.random()*funArray.length)
        const letter = funArray[index].fun();
        generatePassword+=letter;
    }
    passwordGenerator.value = generatePassword;
    
})

function createBubbl() {
    const span = document.createElement('span');
    var size = Math.random() * 60;
    span.style.width = 20 + size + 'px';
    span.style.height = 20 + size + 'px';
    span.style.left = Math.random() * innerWidth + 'px';
    bubble.appendChild(span);
    console.log("bubble");

    setTimeout(() => {
        span.remove();
    }, 4000);
}

setInterval(createBubble, 50);