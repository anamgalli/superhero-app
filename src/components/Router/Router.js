import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TeamContext } from "../Context/TeamContext";
import Header from "../Header/Header";
import Search from "../SearchSection/Search";
import MyTeam from "../MyTeamSection/MyTeam";
import Login from "../LoginSection/Login";
import DetailHero from "../DetailHeroSection/DetailHero";
import PageNotFound from "../PageNotFound/PageNotFound";

const Router = () => {

    const { isLogin } = useContext(TeamContext);
    
    return (
        <BrowserRouter>
            <div className="app py-5">
                <div className="container glass-container">
                    <div className="row general-row">
                        <Header />
                        <Routes>
                            {
                                isLogin &&
                                <>
                                    <Route path='/hero/:heroName' element={<DetailHero />} />
                                    <Route path='/search' element={<Search />} />
                                    <Route path='/my-team' element={<MyTeam />} />
                                </>
                            }
                            <Route path='/' element={<Login />} />
                            <Route path='*' element={<PageNotFound />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}
 
export default Router;