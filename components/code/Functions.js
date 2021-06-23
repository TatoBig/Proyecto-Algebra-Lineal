import { MatrixDependencies, inv, create, all } from 'mathjs'
import { useState } from 'react'

const config = {}
const math = create(all, config)

export const useFunctions = () => {
  const [identidad3, setidentidad3] = useState([[1, 0, 0], [0, 1, 0], [0, 0, 1]])
  const [identidad4, setidentidad4] = useState([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]])
  const [steps, setSteps] = useState([])
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
  const SolucionPorInvertida = (matriz, b) => {
    //  let x; 
    //  x = Matrix.inmultiply(InvertisMatriz(matriz),b);
    let ma = Matrix.inmultiply(Matrix.inverse(matriz), b);
    //falta que se sumen las filas

  }

  const clearSteps = () => {
    setSteps([])
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
  const invertirMatriz = (matriz) => {
    return math.inv(matriz)
  }

  const multiplicarMatrices = (matrizA, matrizB) => {
    return math.multiply(matrizA, matrizB)
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

  //funciones para resolver las matrices
  //

  const addRows = (row1, row2, invert1, invert2) => {
    let row3 = []

    row3 = row1.map((item, i) => {
      return row1[i] * (invert1 ? -1 : 1) + row2[i] * (invert2 ? -1 : 1)
    })

    return row3
  }

  const divideRow = (row, value) => {
    return row.map(item => item / value)
  }

  const multiplyRow = (row, value) => {
    return row.map(item => item * value)
  }

  const fixedPrecisionMatrix = m => {
    return m.map(item => (
      [
        ...item.splice(0, item.length - 1),
        short(item[item.length - 1], 8)
      ]
    ))
  }

  const short = (n, decimals = 3) => {
    return Number(n.toFixed(decimals))
  }

  const solveByGaussJordan = (matrix, i = 0) => {
    if (i == matrix.length) {
      return fixedPrecisionMatrix(matrix)
    }

    let m = [...matrix]
    let currentRow = m[i]
    let pivot = currentRow[i]

    m[i] = divideRow(currentRow, pivot)

    m = m.map((item, mapIndex) => {
      if (mapIndex == i) { // ignore already processed row
        return item
      } else {
        return addRows(multiplyRow(m[i], -item[i]), item)
      }
    })


    setSteps(oldSteps => [...oldSteps, m])
    return solveByGaussJordan(m, i + 1)
  }

  return {
    reemplazarFila,
    multiplicarMatrices,
    restaMatriz,
    sumaMatriz,
    setMatriz,
    invertirMatriz,
    identidad3,
    identidad4,
    solveByGaussJordan,
    steps,
    clearSteps
  }
}
