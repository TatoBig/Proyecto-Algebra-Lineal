import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField } from '@material-ui/core'

export default function FormInput(props) {
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
