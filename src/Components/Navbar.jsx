import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Routes'
import { useEstadosGlobales } from './utils/global.context'


const Navbar = () => {
  const { providerValue } = useEstadosGlobales();
  const { handleTheme, state} = providerValue;

  return (
    <nav className={state.theme}>
      <button onClick={handleTheme}>DarkMode</button>
      <Link to={routes.home}>Home</Link>
      <Link to={routes.contact}>Contact</Link>
      <Link to={routes.favs}>Favorites</Link>
    </nav>
  )
}

export default Navbar;