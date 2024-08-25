const inputText = document.getElementById('inputText')
const button = document.getElementById('mudar')
const div = document.getElementById('result')

function embaralhar(letra){
    
    const frase = letra.toLowerCase();

    if(frase.length ===0) return "Nenhuma letra Encontrada"

    const  inverter  = frase.split(' ').map(palavra => palavra.split('').reverse().join('')).join(' ');
    
    return  inverter;
}
button.addEventListener('click', function(){
    const inputValue = inputText.value.trim();

    if(inputText.value === ''){
        alert ('Insira qualquer texto')
    }else{
        const mostrar =  embaralhar(inputValue);
        div.textContent = mostrar;
    }
})