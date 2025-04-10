import React from 'react'
// import { BrowserRouter as  Route } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import Signup from './components/Signup';
import Login from './components/Login';

import Center from './components/Center'
import Header from './components/Header'
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation} from 'react-router-dom';
import InvoiceInfo from './components/InvoiceInfo';
import invoiceSlice from './redux/invoiceSlice';
import { useDispatch } from 'react-redux';
import FeaturesDropdown from './components/FeaturesDropdown';


function App() {
  const location = useLocation()
  const dispatch = useDispatch()

  const onDelete = (id) => {
    dispatch(invoiceSlice.actions.deleteInvoice({id : id }))
  }

  return (
    <div className=' dark:bg-[#141625] duration-300 min-h-screen bg-[#f8f8fb]'>
      <Header />
      <Navbar />
 
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          < Route element={<Center />} path='/home' />
          < Route element={<InvoiceInfo  onDelete={onDelete} />} path='/home/invoice' />
          < Route element={<Signup />} path='/signup' />
          < Route element={<Login />} path='/' />
        < Route element={<FeaturesDropdown />} path='/FeaturesDropdown' />
        < Route element={<Center />} path='/home' />
        </Routes>
      </AnimatePresence>

    </div>
  )
}

export default App