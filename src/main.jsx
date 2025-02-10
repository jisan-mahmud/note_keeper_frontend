import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Signup from './pages/Signup'
import Login from './pages/Login'
import NewNode from './pages/NewNode'
import NoteDetails from './component/NoteDetails'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='sign-up' element={<Signup/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='note/:id' element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
