import React, { useState } from 'react'
import {
  BarChart, Bar, XAxis, YAxis,
} from 'recharts'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import firebase from './firebase'
import Title from '../../components/svg/tituloMarca'

const useStyles = makeStyles({
  grapContent: {
    width:'80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  titleContent: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: 30
  },
  buttonContent: {
    display: 'flex',
  },
  button: {
    background: '#00E085',
    border: 0,
    borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }, 
})


 function Graphs ()  {
  const classes = useStyles();
  const [dataR, setDataR] = useState([{
    'name': 'uno',
    'uno': '0'
  },
  {
    'name': 'dos',
    'dos': '0'
  },
  {
    'name': 'tres',
    'tres': '0'
  },
  {
    'name': 'cuatro',
    'cuatro': '0'
  }
]);
  const [nameTeams, setNameTeams ] = useState([
    {name: "dos", color: "#DFFB23"},
    {name: "leo", color: "#008FE7"},
    {name: "tres", color: "#FF7400"},
    {name: "yuss", color: "#FA2F94"}
  ])

  const reload =  () => {
    setNameTeams([])
    firebase.firestore()
      .collection('teams').get().then((docRef) => {
      const dataArray = []
      if (!docRef.empty) {
        docRef.forEach((doc) => {
          const {puntos, color} = doc.data()
          const barElementObject = {name: doc.id, [doc.id]: puntos}
          setNameTeams(oldArray => [...oldArray, {name: doc.id, color}]);
          dataArray.push(barElementObject)
        })
        setDataR(dataArray)
      } else {
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  })
  }
  return (
    <div className='graphs-container'>
      <div style={{display: 'flex',
    justifyContent: 'space-around',
    padding: 30}}>
        <div style={{width: '700px'}}>
          <Title />
        </div>
        <div className={classes.buttonContent}>
          <Button
            onClick={() => reload()}
            className={classes.button}
            variant="contained" >
            Recargar
          </Button>
        </div>
      </div>
      
      <BarChart
        width={1200}
        height={700}
        data={dataR}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="name" tick={{stroke: 'black', strokeWidth: 1}} />
        <YAxis tick={{stroke: 'black', strokeWidth: 1}} />
        {nameTeams.map( e => <Bar key={e.name + '1'}
          dataKey={e.name}
          stackId="a"
          fill={e.color} />)}
      </BarChart>
    </div>
  )
}



export default Graphs
