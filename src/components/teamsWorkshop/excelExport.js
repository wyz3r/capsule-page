import React, {useEffect, useState} from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import ReactExport from 'react-data-export'

import firebase from './firebase'

const ExcelFile = ReactExport.ExcelFile
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

function ExcelExport() {
  const classes = useStyles();
  const [values, setValues] = useState({
    age: '',
    name: 'hai',
  });
  const [dataset, setDataset] = useState([])
  const [opciones, setOpciones] = useState([])
  useEffect(() => {
    firebase.firestore()
      .collection('ideas').get().then((docRef) => {
      if (!docRef.empty) {
         docRef.forEach((doc) => {
          setOpciones(oldArray => [...oldArray, {age: doc.id, 'age-simple': doc.id}]);
        })
      } else {
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  })
  }, [])

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
    setDataset([])
    firebase.firestore()
      .collection(event.target.value).get().then((docRef) => {
      if (!docRef.empty) {
        
         docRef.forEach((doc) => {
          const {feedback, points} = doc.data()
          const obj = {
            'participante': doc.id,
            'feedback': (feedback === '' ? 'empty':feedback) ,
            'points': points
          }
          setDataset(oldArray => [...oldArray, obj]);
        })
      } else {
          console.log("No such document!");
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    })
  }
  console.log(dataset)
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-simple">Age</InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
        >
          {opciones.map((value) => {return ( <MenuItem key={value.age + 1} value={value.age}>{value.age}</MenuItem> )} )}
        </Select>
      </FormControl>
      <ExcelFile filename={values.age}>
                <ExcelSheet data={dataset} name={values.age}>
                    <ExcelColumn label="participante" value="participante"/>
                    <ExcelColumn label="feedback" value="feedback"/>
                    <ExcelColumn label="points" value="points"/>
                </ExcelSheet>
            </ExcelFile>
    </div>
  )
}

export default ExcelExport
