import React from 'react'
import { Grid, Button, Divider, Typography, Box, IconButton, makeStyles } from '@material-ui/core/'
import { ArrowBack } from '@material-ui/icons/'
import { useFunctions } from './Functions'
import Input from '../visual/Input'
import { useForm } from 'react-hook-form'
import { create, all } from 'mathjs'
import { useState } from 'react'
import { SubmitButton } from '../visual/Buttons'

const config = {}
const math = create(all, config)

const useStyles = makeStyles(theme => ({
  title: {
    padding: 7
  }
}))

const Opcion1 = (props) => {
  const { returnMenu } = props
  const { invertirMatriz, multiplicarMatrices } = useFunctions()
  const matriz3x3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const matriz1x3 = [1, 2, 3]
  const { handleSubmit, control, formState: { errors }, setValue } = useForm({

    mode: 'onChange',
  })
  const classes = useStyles()

  const onSubmit = (data) => {
    let matrizA = []
    let matrizB = []
    let contador = 0
    let contadorGeneral = 0
    let fila = []
    for (const casilla in data) {
      console.log(`${data[casilla]}`);
      fila.push(data[casilla])
      contador++
      contadorGeneral++
      if (contadorGeneral < 10) {
        if (contador === 3) {
          contador = 0
          matrizA.push(fila)
          fila = []
        }
      } else {
        if (contador === 3) {
          fila.map(numero => {
            let auxArray = [numero]
            matrizB.push(auxArray)
          })
        }
      }
    }
    console.log(matrizA)
    console.log(matrizB)

    const matrizAInvertida = invertirMatriz(matrizA)
    console.log(multiplicarMatrices(matrizAInvertida, matrizB))
  }

  return (
    <React.Fragment>
      <Grid container spacing={0}>
        <Grid item xs={9}>
          {
            matriz3x3.map((cell, index) => (
              <Input
                key={index}
                error={errors.name}
                control={control}
                label={`${index + 1}`}
                name={`c${index}`}
              />
            ))
          }
        </Grid>
        <Grid item xs={3}>
          {
            matriz1x3.map((cell, index) => (
              <Input
                key={index}
                error={errors.name}
                control={control}
                label={`${index + 10}`}
                name={`c${index + 9}`}
              />
            ))
          }
        </Grid>
      </Grid>
      <SubmitButton
        text="Ingresar"
        onClick={handleSubmit(onSubmit)}
      />
    </React.Fragment>
  )
}

export default Opcion1
