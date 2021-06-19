import { useState } from 'react'

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

  const restaMatriz = (fila1, fila2) => {
    let nuevaFila = []
    for (let x = 0; x < fila1.length; x++) {
      nuevaFila.push(fila1[x] - fila2[x])
    }
    return nuevaFila
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
