import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useFunctions } from './Functions'
import Button from '@material-ui/core/Button'
import Input from '../visual/Input'
import { useForm } from 'react-hook-form'

const Opcion2 = () => {
  const { solveByGaussJordan } = useFunctions()
  const matriz4x5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  const { handleSubmit, control, formState: { errors }, setValue } = useForm({
    mode: 'onChange',
  })

  const onSubmit = (data) => {
    console.log(data)
  }


  const resolve = () => {
    let gaussJordanMatrix = [
      [1, -2, 2, -3, 15],
      [3, 4, -1, 1, -6],
      [2, -3, 2, -1, 17],
      [1, 1, -3, -2, -7]
    ];

    console.log(solveByGaussJordan(gaussJordanMatrix))
    // let solvedMatrix = Gordan.solveByGaussJordan(gaussJordanMatrix);
    // console.log(solvedMatrix)
  }

  return (
    <React.Fragment>
      {
        matriz4x5.map((cell, index) => (
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

export default Opcion2
