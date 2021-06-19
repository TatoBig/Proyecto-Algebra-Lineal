/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useFunctions } from './functions'
import Button from '@material-ui/core/Button'
import Input from '../visual/Input'
import { useForm } from 'react-hook-form'


const option1 = () => {
  const {
    identidad3,
    identidad4,
    sumaMatriz,
    restaMatriz,
    multiplicarMatriz,
    reemplazarFila,
    nuevaFuncion
  } = useFunctions()
  const matriz3x3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const { handleSubmit, control, formState: { errors }, setValue } = useForm({
    mode: 'onChange',
  })

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <React.Fragment>
      {
        matriz3x3.map((cell, index) => (
          <Input
            key={index}
            error={errors.name}
            control={control}
            label={`${index + 1}`}
            name={`cell${index}`}
          />
        ))
      }
      <Button variant="text" color="default" onClick={handleSubmit(onSubmit)}>
        Ingresar
      </Button>
    </React.Fragment>
  )
}

export default option1
