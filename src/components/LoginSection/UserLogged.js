import React, { useContext } from "react";
import { TeamContext } from "../Context/TeamContext";

const UserLogged = () => {
    const { Logout } = useContext(TeamContext);
    return (
        <div className="container-user-logged">
            <p className="display-6 mb-sm-5">Sesión iniciada.</p>
            <button className="btn btn-dark" onClick={ () => Logout()}>Cerrar sesión</button>
        </div>
    );
}
 
export default UserLogged;