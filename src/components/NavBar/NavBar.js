import CartWidget from "../CardWidget/CardWidget"
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {//Utilizo en la etiqueta nav una clase de bulma

    return (
        
        /*
            <nav className="container"> 
            <div className="contenedor-del-nav">
                <div className="navbar">
                    <button className="custom-button">Celulares</button>
                    <button className="custom-button">Tablets</button>
                    <button className="custom-button">Notebooks</button>
                </div>
                <div  className="cart-widget">
                    <CartWidget/>
                </div> 
            </div>
            </nav>
        */

        <nav className="NavBar">
            <Link to='/'>
                <h3>Ecommerce</h3>
            </Link>
            <div className="Categories">
                <NavLink to={`/category/celular`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
                <NavLink to={`/category/tablet`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablets</NavLink>
                <NavLink to={`/category/notebook`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Notebooks</NavLink>

            </div>
        </nav>
    )
}

export default NavBar//le saqué el ; y anduvo wtf CONSULTAR