import React, {useState} from 'react'
import Drawer from '@material-ui/core/Drawer'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

const Menulateral = () => {
  const [openObject, setOpenObject] = useState({
    brian: false,
    category: false,
    consumer: false,
    mota: false,
  })
  const handleClick = (id) => {
    openObject[id] = !openObject[id]
    setOpenObject({...openObject})
  }
  return (
      <Drawer variant="permanent" className='drawer-menu' >
        <div className='aux-drawermenu' />
        <div style={{width:250}}>
        <List>
          <ListItem button key={1} onClick={() => handleClick('brian')}>
            <ListItemText primary='BRIAN THE BRAIN' />
            {openObject.brian ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openObject.brian} timeout="auto" unmountOnExit>
            <List component="div" disablePadding style={{paddingLeft: '32px'}}>
              <ListItem button component="a" href="#proporcionar-información-y-fomentar-la-interaccion" >
                <ListItemText primary="Proporcionar información y fomentar la interaccion" />
              </ListItem>
              <ListItem button component="a" href="#mejorar-experiencia-de-consumo" >
                <ListItemText primary="Mejorar experiencia de consumo" />
              </ListItem>
              <ListItem button component="a" href="#prolongar-la-vida-util" >
                <ListItemText primary="Prolongar la vida útil" />
              </ListItem>
              <ListItem button component="a" href="#preservar-el-medio-ambiente" >
                <ListItemText primary="Preservar el medio ambiente" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button key={1} onClick={() => handleClick('category')}>
            <ListItemText primary='CATEGORY EXPLORER' />
            {openObject.category ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openObject.category} timeout="auto" unmountOnExit>
            <List component="div" disablePadding style={{paddingLeft: '32px'}}>
              <ListItem button component="a" href="#macro-fuerzas" >
                <ListItemText primary="Macro fuerzas" />
              </ListItem>
              <ListItem button component="a" href="#audios-explorer" >
                <ListItemText primary="Audios Consumidores" />
              </ListItem>
              
            </List>
          </Collapse>
          <ListItem button key={1} onClick={() => handleClick('consumer')}>
            <ListItemText primary='CONSUMER EXPLORER' />
            {openObject.consumer ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openObject.consumer} timeout="auto" unmountOnExit>
            <List component="div" disablePadding style={{paddingLeft: '32px'}}>
              <ListItem button component="a" href="#necesidades" >
                <ListItemText primary="Necesidades" />
              </ListItem>
              <ListItem button component="a" href="#gallery-consumer" >
                <ListItemText primary="Galeria de materiales" />
              </ListItem>
              <ListItem button component="a" href="#video-consumer" >
                <ListItemText primary="Videos de consumidores" />
              </ListItem>
            </List>
          </Collapse>
          {/* <ListItem button key={1} onClick={() => handleClick('mota')}>
            <ListItemText primary='MOTA PACKS' />
            {openObject.mota ? <ExpandLess /> : <ExpandMore />}
          </ListItem> */}
          {/* <Collapse in={openObject.mota} timeout="auto" unmountOnExit>
            <List component="div" disablePadding style={{paddingLeft: '32px'}}>
              <ListItem button >
                <ListItemText primary="Starred" />
              </ListItem>
              <ListItem button >
                <ListItemText primary="Starred" />
              </ListItem>
              <ListItem button >
                <ListItemText primary="Starred" />
              </ListItem>
              <ListItem button >
                <ListItemText primary="Starred" />
                </ListItem>
              </List>
            </Collapse> */}
          </List>
        </div>
        
      </Drawer>
  )
}

export default Menulateral
