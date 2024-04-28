import { useContext, useEffect, useState } from 'react'
import{ useDispatch,useSelector} from "react-redux"
//components
import Header from './components/header/Header'
import Home from './components/Home/Home'
import DataProvider, { DataContext } from './context/DataProvider'
import { Box } from '@mui/material'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import DetailView from './components/details/DetailView'
import Cart from './components/cart/Cart'
import SellerPage from './components/pages/SellerPage'
import AdminPage from './components/pages/AdminPage'
import './App.css';
import SellerProducts from './components/pages/SellerProducts'
import SellerAddNewProducts from './components/pages/SellerAddNewProducts'


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
          <Route path ="/cart" element= {<Cart/>} />
          <Route path="/seller" element={<SellerPage/>}/>
          <Route path='/admin-panel' element={<AdminPage/>}/>
          <Route path="/allproducts" element={<SellerProducts/>}/>
          <Route path="/addnewproducts" element={<SellerAddNewProducts/>}/>
          {/* <DetailView /> */}
        </Routes>
        </Box>
       </BrowserRouter>
      </DataProvider>
    </>
  )
}

export default App
