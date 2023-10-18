import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
        <img className='logo' src="../assets/images/cinema+digital+film+movie+multimedia+video+icon-1320186751465241961.svg" alt="logo" />
      <h1>MovieFlex</h1>
	  <NavLink to='/'>Se statistik</NavLink>
	  <NavLink to='/movies'>Se vårt utbud</NavLink>
      </header>
    )
}

export default Header