import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Details from './components/Details';
import LoginPage from './components/LoginPage';


 const App = () => {


  return (

    <>
    <Routes>
      <Route path='/' element={ <LoginPage/>}/>
      <Route path='/detail' element={ <Details/>}/>
    </Routes>
   
    </>
  )
}

export default App
