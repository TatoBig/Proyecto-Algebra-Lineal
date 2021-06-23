import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Paper, makeStyles, Typography, Box, Grid, Zoom, Divider } from '@material-ui/core/'
import Card from '../components/visual/Card'
import { OptionButton } from '../components/visual/Buttons'
import { motion } from 'framer-motion'
import Opcion1 from '../components/code/Opcion1'
import Opcion2 from '../components/code/Opcion2'
import Opcion3 from '../components/code/Opcion3'

const useStyles = makeStyles((theme) => ({
  divider: {
    marginTop: theme.spacing(2)
  }
}))

export default function Home() {
  const [checked, setChecked] = useState(0)
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
                      fullWidth
                      onClick={() => handleChange(1)}
                      text="Opción 1"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <OptionButton
                      fullWidth
                      onClick={() => handleChange(2)}
                      text="Opción 2"
                    />
                    <motion.div animate={{ scale: 0.5 }} />
                  </Grid>
                  <Grid item xs={12}>
                    <OptionButton
                      fullWidth
                      onClick={() => handleChange(3)}
                      text="Opción 3"
                    />
                  </Grid>
                </Grid>
              </Box>
              <Divider className={classes.divider}/>
              <Typography variant="h6" color="initial" align="center">
                Santiago José Navas Maldonado 1551619
              </Typography>
              <Typography variant="h6" color="initial" align="center">
                Paolo Giovanni Veliz Sulecio 1543219
              </Typography>
              <Typography variant="h6" color="initial" align="center">
                Luis Hervert Damian Martinez 1504419
              </Typography>
            </Card>
          </Paper>
        </Zoom>
        <Opcion1
          returnMenu={() => handleChange(0)}
          checked={checked === 1}
        />
        <Opcion2
          returnMenu={() => handleChange(0)}
          checked={checked === 2}
        />
        <Opcion3
          returnMenu={() => handleChange(0)}
          checked={checked === 3}
        />
      </div>
    </React.Fragment>
  )
}
