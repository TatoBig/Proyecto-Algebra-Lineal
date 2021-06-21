import { MatrixDependencies } from 'mathjs'
import { useState } from 'react'
import { mathjs } from 'react'
export const useFunctions = () => {
  const [identidad3, setidentidad3] = useState([[1, 0, 0], [0, 1, 0], [0, 0, 1]])
  const [identidad4, setidentidad4] = useState([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]])
  //variable que va a recibir la matriz
  let matriz
  //matriz para el primer ejercicio
  let matrizb
  
  //matriz identidad
  //funcion que recibe la matriz
  const setMatriz = (matriz) => {
    this.matriz = matriz
  }
  //funciones para soperaciones entre filas
  const sumaMatriz = (fila1, fila2) => {
    let nuevaFila = []
    for (let x = 0; x < fila1.length; x++) {
      nuevaFila.push(fila1[x] + fila2[x])
    }
    return nuevaFila
  }
  //OPCION 1
  const SolucionPorInvertida = (matriz, b) =>{
  //  let x; 
  //  x = Matrix.inmultiply(InvertisMatriz(matriz),b);
   let ma = Matrix.inmultiply(Matrix.inverse(matriz),b); 
 //falta que se sumen las filas
 
  }
  //OPCION 2
//   Gauss Jordan pseudocodigo
// 1- Analizar
// ++si el resultado es verdadero
// ---multiplicar ese 1 por el numero de abajo
// ---restar la fila 2 con el resultado de la multiplicacion
// ---reemplazar la fila 2 con el resultado de la resta
// ++si el resultado es falso
// ---tomar la fila con el menor numero en la columna analizada
// ---dividir toda la fila por ese numero
// ---multiplicar ese 1 por el numero de abajo
// ---restar la fila 2 con el resultado de la multiplicacion
// ---reemplazar la fila 2 con el resultado de la resta
// +++++++++++++++
// 3- volver a analizar
// ----------------------------------------------------------------
// Analizar pseudocigo
// 1- Ordenar de menor a mayor
// 2. buscar el primer 1 en la columna deseada
// si encuentra 
// ++mandar que si encontró
// si no encuentra 
// ++mandar que no encontró

  const restaMatriz = (fila1, fila2) => {
    let nuevaFila = []
    for (let x = 0; x < fila1.length; x++) {
      nuevaFila.push(fila1[x] - fila2[x])
    }
    return nuevaFila
  }
  const InvertirMatriz = (matriz) => {
    return Matrix.inverse(matriz); 
  }
  const multiplicarMatriz = (fila, numero) => {
    let nuevaFila = []
    for (let x = 0; x < fila.length; x++) {
      nuevaFila.push(fila[x] * numero)
    }
    return nuevaFila
  }
  //funcion para reemplazar fila en una matriz
  const reemplazarFila = (matriz, nuevaFila, numeroDeFila) => {
    let nuevaMatriz = []
    matriz.map((fila, index) => {
      if (numeroDeFila === index) {
        nuevaMatriz.push(nuevaFila)
      } else {
        nuevaMatriz.push(fila)
      }
    })
    return nuevaMatriz
  }

  const nuevaFuncion = () => {
    const nuevaFuncion = 'nuevaFuncion'
    return nuevaFuncion
  }
  //funciones para resolver las matrices
  //

  return {
    reemplazarFila,
    multiplicarMatriz,
    restaMatriz,
    sumaMatriz,
    setMatriz,
    identidad3,
    identidad4,
    nuevaFuncion
  }
}
