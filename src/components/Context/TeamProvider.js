import React, { useState, useEffect } from "react";
import { TeamContext } from "./TeamContext";

const TeamProvider = ( { children }) => {

    const [isLogin, setIsLogin] = useState(false);
    const [team, setTeam] = useState([]);
    const [badHero, setBadHero] = useState(0);
    const [goodHero, setGoodHero] = useState(0);
    const [detailHero, setDetailHero] = useState([]);

    useEffect( () => {
        /* Comprobación de usuario registrado */
        localStorage.getItem('login') !== null && setIsLogin(true);
    }, [isLogin]);

    const Logout = () => {
        /* Al cerrar sesión se limpia el token del localStorage */
        setIsLogin(false);
        localStorage.clear();
    }

    const verifyHero = (hero, personality) => {
        /* Se verifica si el equipo está completo o si ya existe el héroe que se quiere agregar, caso contrario se procede con la verificación para agregar el héroe al equipo. */
        if (team.length === 6) {
            alert('No se pueden agregar más heroes al equipo. Máximo 6 integrantes.');
        } else if (heroExist(hero)) {
            alert('Ese héroe ya existe');
        } else {
            verifyPersonality(hero,personality);
        }
    }

    const heroExist = (hero) => {
        /* Se busca en el array de team, si existe el héroe que se quiere agregar. */
        let heroAdded = false;
        team.forEach( el => { 
            if (el.id === hero.id) {
                heroAdded = true;
            }
        });
        return heroAdded;
    }

    const verifyPersonality = (hero, personality) => {
        /* Ultima verificación para saber si ya está completo el cupo de héroes buenos y malos. Si no lo está se procede a agregarlo al equipo. */
        if ( personality === 'bad' ) {
            if ( badHero < 3 ) {
                setBadHero(badHero + 1);
                addHero(hero);
            } else {
                alert('No puede agregar más héroes malos.')
            }
        } else {
            if ( goodHero < 3 ) {
                setGoodHero(goodHero + 1);
                addHero(hero);
            } else {
                alert('No puede agregar más héroes buenos.')
            }
        }
    }

    const addHero = (hero) => {
        /* Se setea el equipo agregandole al array el nuevo héroe. */
        setTeam([...team, hero]);
        alert('Héroe agregado');
    }

    const deleteHeroOfTeam = (id, alignment) => {
        /* Al eliminar un héroe, se lo quita del equipo y se setea nuevamente el team con los héroes que quedan. Asimismo se verifica si el héroe a eliminar es bueno o malo, para setear la cantidad de héroes con esa personalidad que existen en el equipo. */
        const newTeam = team.filter( el => el.id !== id);
        if (alignment === 'bad') {
            setBadHero(badHero - 1);
        }
        if (alignment === 'good' || alignment === 'neutral') {
            setGoodHero(goodHero - 1);
        }
        setTeam(newTeam);
    }

    const showDetailsHero = (id) => {
        /* Se busca en el equipo el héroe que se quiere mostrar para setearlo en el estado correspondiente y que la página de detalles pueda acceder a él para cargar los datos. */
        const heroToShow = team.filter( el => el.id === id);
        setDetailHero(heroToShow[0]);
    }

    return(
        <TeamContext.Provider value={{ isLogin, setIsLogin, Logout, team, setTeam, verifyHero, deleteHeroOfTeam, showDetailsHero, detailHero }}>
            { children }
        </TeamContext.Provider>
    );

}

export default TeamProvider;