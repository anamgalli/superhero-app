import React, { useContext } from "react";
import { TeamContext } from "../Context/TeamContext";
import "./MatchHeroDetail.css";

const MatchHeroDetail = ( {data} ) => {

    const { verifyHero } = useContext(TeamContext);

    return(
        <div className="row row-match-hero">
            {
                data && data.map( (el) => {
                    const personality = el.biography.alignment;
                    return(
                        <div className="col-12 match-hero p-3 mb-3" key={el.id}>
                            <div className="info-match-hero">
                                <img src={el.image.url} alt={el.name} className="me-4 img-match-hero"/>
                                <div>
                                    <p className="title-match-hero mb-1">{el.name}</p>
                                    <p className="description">Personalidad: <span>{ personality === 'bad' ? 'Malo' : 'Bueno'}</span></p>
                                </div>
                            </div>
                            <button className="btn btn-add-hero" onClick={ () => verifyHero(el, personality) }>Agregar</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MatchHeroDetail;