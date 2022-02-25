import React, { useContext } from "react";
import { TeamContext } from "../Context/TeamContext";

import './DetailHero.css';

const DetailHero = () => {

    const { detailHero } = useContext(TeamContext);
    
    const hero = detailHero;
    const appearance = hero.appearance;

    return(
        <main className="col-sm-12 col-md-8 col-lg-9 main-detail">
            <div className="row align-items-center row-detail ">
                <div className="col-md-12 col-lg-5 col-img-detail">
                    <img src={hero.image.url} alt="" className="img-detail" />
                </div>
                <div className="col-md-12 col-lg-7 col-detail">
                    <p className="display-6 name-hero pt-2">{hero.name}</p>
                    <p className="alias-hero"><span className="title-detail">Alias: </span>
                        {
                            hero.biography.aliases.map( (el, index) => <span className="list-detail" key={index}>{el}</span>)
                        }
                    </p>
                    <p className="weight-hero"><span className="title-detail">Peso: </span>
                        {
                            appearance["weight"].map( (el, index) => <span className="list-detail" key={index}>{el}</span>)
                        }
                    </p>
                    <p className="height-hero"><span className="title-detail">Altura: </span>
                        {
                            appearance["height"].map( (el, index) => <span className="list-detail" key={index}>{el}</span>)
                        }
                    </p>
                    <p className="eyes-hero"><span className="title-detail">Color de ojos: </span>{appearance["eye-color"]}</p>
                    <p className="hair-hero"><span className="title-detail">Color de cabello: </span>{appearance["hair-color"]}</p>
                    <p className="work-hero"><span className="title-detail">Lugar de trabajo: </span>{hero.work.base}</p>
                </div>
            </div>
        </main>
    )

}

export default DetailHero;