import React from 'react'
import { Button, makeStyles } from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
}))

export const OptionButton = (props) => {
  const { text, onClick } = props
  const classes = useStyles()
  return (
    <React.Fragment>
      <Button className={classes.button} fullWidth onClick={onClick}>
        {text}
      </Button>
    </React.Fragment>
  )
}
