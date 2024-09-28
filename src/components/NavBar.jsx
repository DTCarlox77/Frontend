import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <h3>React</h3>
        <div>
            <ul>
                <li><Link to={'/'}>Principal</Link></li>
                <li><Link to={'/login'}>Iniciar sesión</Link></li>
            </ul>
            
            
        </div>
    </div>
  )
}

export default NavBar