import React from "react"
import {Route, Routes} from 'react-router-dom'
import Header from "./Components/Header"
import Contact from "./Pages/Contact"
import Don from "./Pages/Don"
import Evenements from "./Pages/Evenements"
import Home from "./Pages/Home"
import Prestations from "./Pages/Prestations"
import Service from "./Pages/Service"
import GlobalStyle from "./Styles/Global"
import PageStyle from "./Styles/PageStyle"

function App(){
    return (
        <div>
            <Header />
            <GlobalStyle />
            <PageStyle>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/don" element={<Don />} />
                <Route path="/prestations" element={<Prestations />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/evenements" element={<Evenements />} />
                <Route path="/service" element={<Service />} />
            </Routes>
            </PageStyle>
        </div>
    )
}

export default App