import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  input: {
    width: 50,
  }
}))

export default function FormInput(props) {
  const classes = useStyles()
  const {
    className,
    control,
    error,
    fullWidth,
    label,
    name,
    variant,
  } = props
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          className={className}
          error={error !== undefined}
          fullWidth={fullWidth}
          helperText={error && error.message}
          label={label}
          margin="normal"
          autoComplete="new-password"
          variant={variant}
          {...field}
        />
      )}
    />
  )
}
