import React,{useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'

import {Box} from '@mui/material'
import Header from './components/header'
import HomePage from './components/home';
import Cocktile from './components/cocktile';
import Detailed from './components/detailed/index';

const App = () => {



  return (
    <>
      <Header/>
      <Box sx={{marginTop:10}}>
       <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/cocktail/:id' element={<Cocktile/>} />
        <Route path='/detailed/:id' element={<Detailed/>} />

        <Route path='/*' element={<h1>Invalid page</h1>}/>
      </Routes>
  
      </Box>
     
    </>
  )
}

export default App