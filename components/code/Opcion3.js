import React from 'react'
import Button from '@material-ui/core/Button'

const Opcion3 = () => {

  const funcion = () => {
    console.log('Podes hacer pruebas aqui en la funcion')
  }

  return (
    <React.Fragment>
      <h1>Aqui podes hacer todo lo de html</h1>
      <h1>La altura se va automatica si vas escribiendo mas</h1>
      <h1>El ancho si queres lo cambias en el index</h1>
      <h1>En lo primero, useStyles, cambias width de Op3</h1>
      <Button variant="outlined" color="default" onClick={() => funcion()}>
        Boton por si queres probar algo
      </Button>
    </React.Fragment>
  )
}

export default Opcion3
