import React, { useContext } from "react";
import { TeamContext } from "../Context/TeamContext";
import { NavLink } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {

    const { isLogin } = useContext(TeamContext);

    return(
        <nav className="col-sm-12 navbar mt-5">
            <ul className="nav flex-column">
                <li className="nav-item mb-2">
                    <NavLink to="/" className="nav-link"><i className="fas fa-user-circle"></i>Login</NavLink>
                </li>
                {
                    /* Si el usuario está registrado se muestra el menú completo, caso contrario sólo se muestra la página de Login en la barra de navegación. */
                    isLogin && 
                    <>
                        <li className="nav-item mb-2">
                            <NavLink to="/my-team" className="nav-link"><i className="fas fa-users"></i>Mi equipo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/search" className="nav-link"><i className="fas fa-search"></i>Buscar</NavLink>
                        </li>
                    </>
                }
            </ul>
        </nav>
    )
}

export default NavBar;