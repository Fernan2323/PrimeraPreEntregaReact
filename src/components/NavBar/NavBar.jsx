import { Link, NavLink } from 'react-router-dom'

import CarWidget from '../CarWidget/CarWidget'
import './navbar.css'

const NavBar = () => {
  return (
    <header>
       <Link className='link-logo' to='/'>
       <h1>
            ProX Gaming Shop
        </h1>
        </Link> 
        
        <nav>
            <ul>
                <li> <NavLink className='navlink-li' to='/'>Inicio</NavLink></li>
                <li> <NavLink className='navlink-li' to='categorias/2'>Tarjetas graficas</NavLink></li>
                <li> <NavLink className='navlink-li' to='categorias/3'>Procesadores</NavLink></li>
                <li> <NavLink className='navlink-li' to='categorias/4' >Memorias</NavLink></li>
                
            </ul>
        </nav>
        <CarWidget/>
    </header>
    
  )
}

export default NavBar