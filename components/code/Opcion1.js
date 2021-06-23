import React, { useState, useEffect } from 'react'
import { Grid, Button, Divider, Typography, Box, IconButton, makeStyles, Paper, Zoom, Slide } from '@material-ui/core/'
import { ArrowBack } from '@material-ui/icons/'
import { useFunctions } from './Functions'
import Input from '../visual/Input'
import { useForm } from 'react-hook-form'
import { SubmitButton } from '../visual/Buttons'
import MatrixKeys from '../visual/MatrixKeys'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Header from '../visual/Header'
import ResultDialog from '../visual/ResultDialog'

const useStyles = makeStyles(theme => ({
  submit: {
    marginTop: theme.spacing(2)
  },
  paper: {
    width: 880,
    padding: theme.spacing(4)
  },
  result: {
    marginTop: theme.spacing(3)
  },
  row: {
      margin: theme.spacing(2)
  }
}))

const matriz3x3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const matriz1x3 = [1, 2, 3]

const schema = yup.object().shape({
  c0: yup.string().required('Falta dato'),
  c1: yup.string().required('Falta dato'),
  c2: yup.string().required('Falta dato'),
  c3: yup.string().required('Falta dato'),
  c4: yup.string().required('Falta dato'),
  c5: yup.string().required('Falta dato'),
  c6: yup.string().required('Falta dato'),
  c7: yup.string().required('Falta dato'),
  c8: yup.string().required('Falta dato'),
  c9: yup.string().required('Falta dato'),
  c10: yup.string().required('Falta dato'),
  c11: yup.string().required('Falta dato')
})

const Opcion1 = (props) => {
  const { returnMenu, checked } = props
  const { invertirMatriz, multiplicarMatrices } = useFunctions()
  const [open, setOpen] = useState(false)
  const [resultMatrix, setResultMatrix] = useState([])
  const { handleSubmit, control, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  const classes = useStyles()

  const onSubmit = (data) => {
    let matrizA = []
    let matrizB = []
    let contador = 0
    let contadorGeneral = 0
    let fila = []
    for (const cell in data) {
      fila.push(data[cell])
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
    const matrizAInvertida = invertirMatriz(matrizA)
    const resultado = multiplicarMatrices(matrizAInvertida, matrizB)
    setResultMatrix(resultado)
    setOpen(true)
  }

  const getError = (index) => {
    switch (index) {
      case 0:
        return errors.c0
      case 1:
        return errors.c1
      case 2:
        return errors.c2
      case 3:
        return errors.c3
      case 4:
        return errors.c4
      case 5:
        return errors.c5
      case 6:
        return errors.c6
      case 7:
        return errors.c7
      case 8:
        return errors.c8
      case 9:
        return errors.c9
      case 10:
        return errors.c10
      case 11:
        return errors.c11
    }
  }

  return (
    <React.Fragment>
      <Zoom in={checked} mountOnEnter unmountOnExit>
        <Paper elevation={4} className={classes.paper}>
          <Header
            returnMenu={returnMenu}
            title="Opcion 1"
          />
          <Grid container spacing={0}>
            <Box display="flex">
              <Grid item>
                <MatrixKeys columns={3} rows={3} title="Matriz A">
                  {
                    matriz3x3.map((cell, index) => (
                      <Input
                        key={index}
                        error={getError(index)}
                        control={control}
                        name={`c${index}`}
                      />
                    ))
                  }
                </MatrixKeys>
              </Grid>
              <Grid item>
                <MatrixKeys columns={1} rows={3} title="Matriz B">
                  {
                    matriz1x3.map((cell, index) => (
                      <Input
                        key={index}
                        error={getError(index + 9)}
                        control={control}
                        name={`c${index + 9}`}
                      />
                    ))
                  }
                </MatrixKeys>
              </Grid>
            </Box>
          </Grid>
          <Box display="flex" flexDirection="row-reverse" className={classes.submit}>
            <SubmitButton
              text="Ingresar"
              onClick={handleSubmit(onSubmit)}
            />
          </Box>
        </Paper>
      </Zoom>
      <ResultDialog
        open={open}
        onClose={() => setOpen(false)}
        setOpen={setOpen}
      >
        <MatrixKeys columns={1} rows={3} title="Matriz X">
          <Box className={classes.result}>
            {
              resultMatrix.map((row, index) => (
                <Typography variant="h3" color="initial" key={index} className={classes.row} align="center">
                  {Math.round(row[0] * 100) / 100}
                </Typography>
              ))
            }
          </Box>
        </MatrixKeys>
      </ResultDialog>
    </React.Fragment>
  )
}

export default Opcion1
