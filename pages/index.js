import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Button, Paper, makeStyles, Typography, Box, Grid, FormControlLabel, Switch, Slide, Zoom, Grow, Fade, Collapse } from '@material-ui/core/'
import Card from '../components/visual/Card'
import { OptionButton } from '../components/visual/Buttons'
import { motion } from 'framer-motion'
import Opcion1 from '../components/code/option1'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  wrapper: {
    width: '100%',
  },
  paper: {
    width: 700
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}))

export default function Home() {
  const [checked, setChecked] = useState(0)
  const [showMenu, setShowMenu] = useState(true)
  const classes = useStyles()

  const handleChange = (check) => {
    setChecked(-1)
    setTimeout(() => {
      setChecked(check)
    }, 200)
  }

  return (
    <React.Fragment>
      <div className={styles.container}>
        <Zoom in={checked === 0} mountOnEnter unmountOnExit>
          <Paper>
            <Card
              title="Proyecto de Álgebra Lineal."
            >
              <Box display="flex" justifyContent="center">
                <Grid container spacing={3} direction="column">
                  <Grid item xs={12}>
                    <OptionButton
                      onClick={() => handleChange(1)}
                      text="Opción 1"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <OptionButton
                      onClick={() => handleChange(2)}
                      text="Opción 2"
                    />
                    <motion.div animate={{ scale: 0.5 }} />
                  </Grid>
                  <Grid item xs={12}>
                    <OptionButton
                      onClick={() => handleChange(3)}
                      text="Opción 2"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Paper>
        </Zoom>
        <Zoom in={checked === 1} mountOnEnter unmountOnExit>
          <Paper elevation={4} className={classes.paper}>
            <Opcion1/>
          </Paper>
        </Zoom>
        <Zoom in={checked === 2} mountOnEnter unmountOnExit>
          <Paper elevation={4} className={classes.paper}>
            <Typography variant="h1" color="initial">Opción 2</Typography>
            <OptionButton
              text="Regresar"
              onClick={() => handleChange(0)}
            />
          </Paper>
        </Zoom>
        <Zoom in={checked === 3} mountOnEnter unmountOnExit>
          <Paper elevation={4} className={classes.paper}>
            <Typography variant="h1" color="initial">Opción 3</Typography>
            <OptionButton
              text="Regresar"
              onClick={() => handleChange(0)}
            />
          </Paper>
        </Zoom>
      </div>
    </React.Fragment>
  )
}
