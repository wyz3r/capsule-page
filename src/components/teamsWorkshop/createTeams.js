import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import firebase from './firebase'
const useStyles = makeStyles({
  card: {
    // minWidth: 275,
    height: '100%',
    margin: 15
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  pos: {
    marginBottom: 12,
  },
})



 const  createTeams = () => {
  const classes = useStyles()
  const [teamName, setTeamName] = useState('')
  const saveTeam = () => {
    firebase.firestore()
      .collection('teams')
      .doc(teamName)
      .set({
        puntos: 0
      })
      .then(() => { setTeamName('')// this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

  }
  return (
    <div className='createTeams-container'>
        <Card className={classes.card}>
          <CardContent>
              <Typography className={classes.title} >
                Crea un equipo
              </Typography>
              <TextField
                id="outlined-dense-multiline"
                label="Nombre del equipo"
                variant="outlined"
                multiline
                rowsMax="5"
                fullWidth
                value={teamName}
                className={classes.post}
                onChange={e => setTeamName(e.target.value)}
                />
            </CardContent>
          <CardActions className={classes.buttonContainer}>
            <Button onClick={() => saveTeam('')}  variant="contained" color="primary" size="large">Guardar</Button>
            <Button
              onClick={() => setTeamName('')}
              variant="contained"
              color="secondary"
              size="large">
                limpiar
            </Button>
          </CardActions>
        </Card>
    </div>
  )
}



export default createTeams
