// console.log('Hello, world')

// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.querySelector('.parrafito');
// const pid = document.querySelector('#pid');
// const input = document.querySelector('input');
// const title = document.getElementById('mainTitle');

// console.log(h1);

// console.log(
//     {
//         h1,p,parrafito,pid,input,title
//     }
// );

// console.log(input);

// h1.innerHTML =  'Voy cambiar el tirulo prrrrro';
// title.innerText = 'Ahora me llamo diferente' ;//este es mas seguro

// h1.classList.add('rojo');
// h1.classList.remove('verde');

// input.value = '456';

// const img = document.createElement('img');
// /*img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Escudo_de_Millonarios_temporada_2017.png/1024px-Escudo_de_Millonarios_temporada_2017.png');*/

// console.log(img);

// pid.append(img);
let countCLick = 0;
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btn');
const resultado = document.getElementById('resultado')

document.getElementById('form').addEventListener('submit',sumarInputValues);
//btn.addEventListener('click',btnOnClick)

function sumarInputValues(event){
    countCLick++;
    console.log('Le han dado click: ',countCLick,'veces.')
    event.preventDefault()
    let suma = Number(input1.value) + Number(input2.value);
    resultado.innerText = "el resultado es: "+suma;
}

