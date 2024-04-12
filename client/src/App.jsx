import { useState } from 'react'

//components
import Header from './components/header/Header'
import Home from './components/Home/Home'
import DataProvider from './context/DataProvider'
import { Box } from '@mui/material'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DetailView from './components/details/DetailView'

function App() {

  return (
    <>
      <DataProvider>
      <BrowserRouter>
        <Header/>
        <Box style={{
          marginTop:54
        }}>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/product/:id" element = {<DetailView/>} />
          {/* <DetailView /> */}
        </Routes>
        </Box>
       </BrowserRouter>
      </DataProvider>
    </>
  )
}

export default App
