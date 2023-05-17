import React from "react"
import {Navigate, Route, Routes, useLocation} from 'react-router-dom'
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Mariage from "./Components/Service/Mariage"
import Contact from "./Pages/Contact"
import Don from "./Pages/Don"
import RealPerso from "./Pages/RealPerso"
import Home from "./Pages/Home"
import Service from "./Pages/Service"
import GlobalStyle from "./Styles/Global"
import PageStyle from "./Styles/PageStyle"
import Documentaire from "./Components/Service/Documentaire"
import Evenement from "./Components/Service/Evenement"
import Corporate from "./Components/Service/Corporate"
import Fiction from "./Components/Service/Fiction"
import Patrimoine from "./Components/Service/Patrimoine"
import Button from "./Components/Button/Button"


function App(){
const location = useLocation();

    return (
        <div>
            <Header />
            {location.pathname === "/contact" ? "" : <Button />}
            <GlobalStyle />
            <PageStyle>
            <div id="bordertoppa"></div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/don" element={<Don />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/realperso" element={<RealPerso />} />
                <Route path="/service" element={<Service />} />
                <Route path="/service/mariage" element={<Mariage />} />
                <Route path="/service/corporate" element={<Corporate />} />
                <Route path="/service/evenement" element={<Evenement />} />
                <Route path="/service/fiction" element={<Fiction />} />
                <Route path="/service/documentaire" element={<Documentaire />} />
                <Route path="/service/patrimoine" element={<Patrimoine />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
            </PageStyle>
        </div>
    )
}

export default App