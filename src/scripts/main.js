document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(){
        let numeroMax = document.getElementById('max-number').value;
        numeroMax = parseInt(numeroMax);

        let numRand = Math.random() * numeroMax;
        numRand = Math.floor(numRand + 1);

        document.getElementById('resultado-valor').innerText = numRand;
        document.querySelector('.resultado').style.display = 'block';
    })
})