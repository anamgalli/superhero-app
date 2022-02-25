import React, { useContext } from "react";
import { TeamContext } from "../Context/TeamContext";
import AbilitiesTeam from "./AbilitiesTeam";
import ListOfHeroes from "./ListOfHeroes";
import './HeroCard.css';

const MyTeam = () => {

    const { team } = useContext(TeamContext);

    return(
        <main className="col-sm-12 col-md-8 col-lg-9 main-team py-5">
            {
                team.length === 0 
                ? 
                <p className="display-6">El equipo está vacío.</p>
                : (
                <div className="container container-team py-4">
                    <AbilitiesTeam />
                    <ListOfHeroes />
                </div> 
                )
            }
        </main>
    )
}

export default MyTeam;