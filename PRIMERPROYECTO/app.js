const contenedor = document.getElementById('contenedor-barras');
let arreglo = [];

// 1. Generar un arreglo aleatorio al cargar la página
function generarArreglo() {
    contenedor.innerHTML = '';
    arreglo = [];
    for (let i = 0; i < 40; i++) {
        let valor = Math.floor(Math.random() * 100) + 10;
        arreglo.push(valor);
        
        const barra = document.createElement('div');
        barra.classList.add('barra');
        barra.style.height = `${valor * 2.5}px`;
        contenedor.appendChild(barra);
    }
}

// 2. Función para pausar el ciclo y crear la animación
const pausar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 3. Algoritmo de ordenamiento con animación visual
async function iniciarOrdenamiento() {
    let barras = document.getElementsByClassName('barra');
    
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo.length - i - 1; j++) {
            
            // Pintar de rojo los dos elementos que se están comparando
            barras[j].style.backgroundColor = '#ff4d4d';
            barras[j + 1].style.backgroundColor = '#ff4d4d';
            
            await pausar(30); // Pausa de 30 milisegundos

            // Evaluar lógica: Si el elemento de la izquierda es mayor, se intercambian
            if (arreglo[j] > arreglo[j + 1]) {
                let temp = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = temp;
                
                // Actualizar la altura en pantalla
                barras[j].style.height = `${arreglo[j] * 2.5}px`;
                barras[j + 1].style.height = `${arreglo[j + 1] * 2.5}px`;
            }
            
            // Regresar las barras a su color original
            barras[j].style.backgroundColor = '#4CAF50';
            barras[j + 1].style.backgroundColor = '#4CAF50';
        }
        // Pintar de azul el elemento que ya quedó ordenado al final
        barras[arreglo.length - 1 - i].style.backgroundColor = '#008CBA';
    }
}

generarArreglo();