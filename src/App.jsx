import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './User'
import Create from './Create'
import Update from './Update'
import Login from '../src/Login/Login'
import Register from './Login/Register/Register'
import Export from './Export'
import Import from './Import'
import TaskManager from './TaskManager'



function App() {

  return (
   <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/Create' element={<Create/>}></Route>
        <Route path='/Update/:id' element={<Update/>}></Route>
        <Route path='/export' element={<Export/>}></Route>
        <Route path='/import' element={<Import/>}></Route>
        <Route path='/taskManager' element={<TaskManager/>}></Route>


        
      </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App;
