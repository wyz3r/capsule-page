import React, { useState, useRef, useEffect} from 'react'
import { makeStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import Icon from '@material-ui/core/Icon';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'

import firebase from './firebase'

const useStyles = makeStyles({
  card: {
    // minWidth: 275,
    height: '100%',
    margin: 15,
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
  puntos: {
    fontSize: 64,
    punto: {
      color: 'red',
    }
  },
  pos: {
    marginBottom: 12,
    width: '50%'
  },

  formControl: {
    marginTop: 15,
    marginBottom: 35,
    minWidth: 120,
    width: '100%'
  },
  selectEmpty: {
   
  },
})



 const  createTeams = () => {
  const classes = useStyles()
  const [pointTeam, setPointTeam] = useState(0)
  const [values, setValues] = useState({
    team: ''
  })
  const [arrayTeam, setArrayTeam] =  useState([])

  // input values states  
  const inputLabel = useRef(null)
  const [labelWidth, setLabelWidth] = useState(0)
  useEffect(() => {
    firebase.firestore()
      .collection('teams')
      .get().then(function(doc) {
      if (!doc.empty) {
          const idTeams = doc.docs.map(({id}) => id )
          setArrayTeam(idTeams)
      } else {
          console.log("No such document!");
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    })
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [])

  const handleChange = (event) => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }))
  }
  

  const sendPoint = () => {
    if (values.team === '') return
    firebase.firestore()
    .collection('teams')
    .doc(values.team)
    .update({
      puntos: firebase.firestore.FieldValue.increment(pointTeam)
    })
    .then(() => {
      setValues({team: ''})
      setPointTeam(0)
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
  }

  return (
    <div className='createTeams-container' style={{height: '100%'}}>
        <Card className={classes.card}>
          <CardContent>
              <Typography className={classes.title} >
                Sumale unos puntos 
              </Typography>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                  Equipo
                </InputLabel>
                <Select
                  value={values.team}
                  onChange={handleChange}
                  labelwidth={labelWidth}
                  inputProps={{
                    name: 'team',
                    id: 'outlined-age-simple',
                  }}
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  {arrayTeam.map(e => <MenuItem key={e} value={e}>{e}</MenuItem>)}
                </Select>
             </FormControl>
             <div className={classes.puntos}>
             <TextField
                id="outlined-dense-multiline"
                label="puntos"
                variant="outlined"
                type="number"
                value={pointTeam}
                className={classes.pos}
                />
                <Icon
                  className={classes.puntos.punto}
                  onClick={() => setPointTeam(parseInt(pointTeam + 1))}
                  color='inherit'
                  fontSize='inherit'
                > 
                  <AddCircleOutlineIcon
                    fontSize='inherit'
                    color='inherit' />
                </Icon>
                <Icon color='inherit'
                  fontSize='inherit' 
                  onClick={() => setPointTeam(parseInt(pointTeam - 1))}
                > 
                  <RemoveCircleIcon fontSize='inherit' color='inherit' />
                </Icon>
             </div>
            </CardContent>
          <CardActions className={classes.buttonContainer}>
            <Button 
              onClick={() => sendPoint()}
              variant="contained"
              color="primary"
              size="large">Enviar
              
            </Button>
            <Button
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