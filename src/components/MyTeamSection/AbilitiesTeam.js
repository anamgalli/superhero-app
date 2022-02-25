import React, { useContext } from "react";
import { TeamContext } from "../Context/TeamContext";
import './AbilitiesTeam.css';

const AbilitiesTeam = () => {

    const { team } = useContext(TeamContext);
    const reducer = (a,b) => a + b;

    /* Se obtienen los powerstat individuales de cada héroe del equipo. Se utiliza parseInt para pasar los datos a tipo número para luego poder sumarlos y obtener el total de cada uno. */

    const intelligenceTeam = team.map( el => parseInt(el.powerstats.intelligence));
    const strengthTeam = team.map( el => parseInt(el.powerstats.strength));
    const speedTeam = team.map( el => parseInt(el.powerstats.speed));
    const durabilityTeam = team.map( el => parseInt(el.powerstats.durability));
    const powerTeam = team.map( el => parseInt(el.powerstats.power));
    const combatTeam = team.map( el => parseInt(el.powerstats.combat));
    const weightTeam = team.map( el => parseInt(el.appearance.weight[1]));
    const heightTeam = team.map( el => parseInt(el.appearance.height[1]));

    /* Se suman los pesos y las alturas de cada miembro del equipo con reduce y se divide el total por la cantidad de héroes para obtener el promedio. */

    const averageWeight = Math.round((weightTeam.reduce(reducer) / team.length));
    const averageHeight = (heightTeam.reduce(reducer) / team.length) / 100;

    /* Array de objetos con cada habilidad y su suma total */

    const powerstatsTeam = [
        {
            ability: 'Inteligencia',
            total: intelligenceTeam.reduce(reducer)
        },
        {
            ability: 'Fuerza',
            total: strengthTeam.reduce(reducer)
        },
        {
            ability: 'Velocidad',
            total: speedTeam.reduce(reducer)
        },
        {
            ability: 'Durabilidad',
            total: durabilityTeam.reduce(reducer)
        },
        {
            ability: 'Poder',
            total: powerTeam.reduce(reducer)
        },
        {
            ability: 'Combate',
            total: combatTeam.reduce(reducer)
        },
    ];

    /* Se utiliza sort para generar un nuevo array de los valores totales de habilidades ordenados de mayor a menor, que es el que se utiliza para mostrar los powerstats ordenados. */

    const orderPowerstatsTeam = powerstatsTeam.sort( (a, b) => b.total - a.total);

    return(
        <div className="row mb-5">
            <div className="col-sm-5 col-lg-6 flex-column align-self-center detail-team">
                <p className="display-6">Habilidad especial: <span>{orderPowerstatsTeam[0].ability}</span></p>
                <p className="display-6">Peso promedio: {averageWeight}Kg</p>
                <p className="display-6">Altura promedio: {averageHeight.toString().slice(0,4)}m</p>
            </div>
            <div className="col-sm-7 col-lg-6 abilities-team">
                {
                    orderPowerstatsTeam.map( (el, index) => 
                        <div className="div-progress-bar mb-2" key={index}>
                            <p className="mb-0">{el.ability}</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: `${Math.round((el.total * 100) / 600)}%` }} aria-valuenow={el.total}  aria-valuemin="0" aria-valuemax="1000">{el.total}</div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default AbilitiesTeam;