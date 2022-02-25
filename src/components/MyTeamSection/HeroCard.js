import React, { useContext } from "react";
import { TeamContext } from "../Context/TeamContext";
import { Link } from 'react-router-dom';
import './HeroCard.css';

const HeroCard = ( { hero } ) => {

    const { deleteHeroOfTeam, showDetailsHero } = useContext(TeamContext);

    return(

        <div className="col-sm-6 col-md-6 col-lg-4 col-card">

            <div className="card">
                <img src={hero.image.url} className="card-img-top" alt="" />
                <div className="card-body">
                    <p className="card-title h5">{hero.name}</p>
                    <div className="container-powerstats">
                        <span className="powerstat">Inteligencia: {hero.powerstats.intelligence}</span>
                        <span className="powerstat">Fuerza: {hero.powerstats.strength}</span>
                        <span className="powerstat">Velocidad: {hero.powerstats.speed}</span>
                        <span className="powerstat">Durabilidad: {hero.powerstats.durability}</span>
                        <span className="powerstat">Poder: {hero.powerstats.power}</span>
                        <span className="powerstat">Combate: {hero.powerstats.combat}</span>
                    </div>
                    <div className="div-btn-card">
                        <button className="btn btn-primary btn-card" onClick={() => deleteHeroOfTeam(hero.id, hero.biography.alignment)}>Eliminar</button>
                        <Link to={`/hero/${hero.name}`} onClick={() => showDetailsHero(hero.id)} className="btn btn-dark btn-card">Detalles</Link>
                    </div> 
                </div>
            </div>

        </div>
        
    )

}

export default HeroCard;