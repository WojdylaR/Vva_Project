import React from "react"
import {Route, Routes} from 'react-router-dom'
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Mariage from "./Components/Service/Mariage"
import Contact from "./Pages/Contact"
import Don from "./Pages/Don"
import Evenements from "./Pages/Evenements"
import Home from "./Pages/Home"
import Presentation from "./Pages/Presentation"
import Service from "./Pages/Service"
import GlobalStyle from "./Styles/Global"
import PageStyle from "./Styles/PageStyle"

function App(){
    return (
        <div>
            <Header />
            <GlobalStyle />
            <PageStyle>
            <div id="bordertoppa"></div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/don" element={<Don />} />
                <Route path="/presentation" element={<Presentation />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/evenements" element={<Evenements />} />
                <Route path="/service" element={<Service />} />
                <Route path="/service/mariage" element={<Mariage />} />
            </Routes>

            <Footer />
            </PageStyle>
        </div>
    )
}

export default App