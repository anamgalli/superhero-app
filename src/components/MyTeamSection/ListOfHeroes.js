import React, { useContext } from "react";
import { TeamContext } from "../Context/TeamContext";
import HeroCard from "./HeroCard";
import './HeroCard.css';


const ListOfHeroes = () => {

    const { team } = useContext(TeamContext);

    return(
        <div className="row g-3 cards-team">
            {
                team.map( el => <HeroCard hero={el} key={el.id}/>)
            }
        </div>
    )

}

export default ListOfHeroes;