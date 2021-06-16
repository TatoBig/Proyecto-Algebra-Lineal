import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Button, Paper, makeStyles, Typography, Box, Grid } from '@material-ui/core/'
import Card from '../components/visual/Card'
import { OptionButton } from '../components/visual/Buttons'

const useStyles = makeStyles((theme) => ({

}))

export default function Home() {
  const [selectedId, setSelectedId] = useState(null)
  const classes = useStyles()
  return (
    <React.Fragment>
      <div className={styles.container}>
        <Card
          title="Proyecto de Álgebra Lineal."
        >
          <Box display="flex" justifyContent="center">
            <Grid container spacing={3} direction="column">
              <Grid item xs={12}>
                <OptionButton
                  text="Opción 1"
                />
              </Grid>
              <Grid item xs={12}>
                <OptionButton
                  text="Opción 2"
                />
              </Grid>
              <Grid item xs={12}>
                <OptionButton
                  text="Opción 2"
                />
              </Grid>
            </Grid>
          </Box>
        </Card>
      </div>
    </React.Fragment>
  )
}
