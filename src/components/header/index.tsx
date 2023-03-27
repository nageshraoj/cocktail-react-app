import React from 'react'
import {Toolbar, AppBar,Box,InputBase, Drawer,  Typography, IconButton,Divider,List,ListItem, ListItemButton,ListItemText } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import {MenuOpen,Menu,Search,Directions} from '@mui/icons-material'

const Header = () => {
  const [open,setOpen]=React.useState(false)
  const [cocktailName,setCocktailName]=React.useState('')
  const navigate= useNavigate()

  const updateCockTailName=(e:any)=>{
    e.preventDefault();
    setCocktailName(e.target.value)
    navigate(`/cocktail/${cocktailName}`)
  }


  return (
    <>
    <AppBar sx={{marginBottom:5}}>
      <Toolbar>
        <Menu onClick={()=>setOpen(!open)} sx={{cursor:'pointer'}} />
      <Typography variant='h5' sx={{marginLeft:3,cursor:'pointer'}} onClick={()=>navigate('/')} >
          Cocktile
      </Typography>
      <Box sx={{marginLeft:'auto'}}>
        {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
        <Menu />
      </IconButton> */}
      <InputBase   sx={{ ml: 1, flex: 1,backgroundColor:'#fff', borderRadius:'10px', padding: '0px 10px', maxWidth:'300px' }}
        placeholder="Cocktile search" value={cocktailName} onChange={updateCockTailName}
        inputProps={{ 'aria-label': 'Cocktile search"' }}/>
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <Search />
      </IconButton>
      </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        onClose={()=>setOpen(false)}
      >
          <List>
            <ListItem>
              <ListItemButton> 
                <ListItemText primary='Home' onClick={()=>navigate('/')} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton> 
                <ListItemText primary='Cocktiles' onClick={()=>navigate('/cocktail')}  />
              </ListItemButton>
            </ListItem>
          </List>
      </Drawer>
    </>
  )
}

export default Header