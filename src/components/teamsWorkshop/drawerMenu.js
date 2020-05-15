import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Controlpoint';
import GroupWork from '@material-ui/icons/Groupwork';
// import Equalizer from '@material-ui/icons/Equalizer';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from '@material-ui/core/Icon'
import DescriptionIcon from '@material-ui/icons/Description';
import PropTypes from "prop-types"


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  
});

export default function TemporaryDrawer({children}) {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [section, setSection] = useState(0)

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
      <ListItem button key={'Sumar Puntos'} onClick={()=> {setSection(0)}}>
          <ListItemIcon> <InboxIcon /></ListItemIcon>
          <ListItemText primary={'Sumar Puntos'} />
        </ListItem>
        <ListItem button key={'Agregar Equipos'} onClick={()=> {setSection(1)}}>
          <ListItemIcon> <GroupWork /></ListItemIcon>
          <ListItemText primary={'Agregar Equipos'} />
        </ListItem>
        <ListItem button key={'Gráficas'} onClick={()=> {setSection(2)}}>
          <ListItemIcon> <DescriptionIcon /></ListItemIcon>
          <ListItemText primary={'Gráficas'} />
        </ListItem>
      </List>
    </div>
  )


  const sections = children => {
    return children.filter((e, index) => section === index ) 
  }

  return (
    <div style={{color: 'black', fontSize:'50px'}}>
      <Icon color='inherit' fontSize='inherit' onClick={toggleDrawer('left', true)}> 
        <MenuIcon fontSize='inherit' color='inherit' />
      </Icon>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
      <div className='admin-body' style={{background: ''}}>
        {sections(children)}
      </div>
    </div>
  );
}


TemporaryDrawer.propTypes = {
  children: PropTypes.node.isRequired,
}