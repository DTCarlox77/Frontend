import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import Login from './pages/Login'
import Bienvenida from './pages/Bienvenida'

function App() {

  return (
    <BrowserRouter>
    
      <Routes>

        <Route Component={ Index } path='/' />
        <Route Component={ Login } path='/login' />
        <Route Component={ Bienvenida } path='/dinamica/:nombre' />

      </Routes>
    
    </BrowserRouter>
  )
}

export default App
