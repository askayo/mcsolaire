import React, {useState, useEffect, useCallback, Suspense} from 'react'
import {Navigation} from './components/navigation'
import {Header} from './components/header'
import {Features} from './components/features'
import {About} from './components/about'
import {Services} from './components/services'
import {Gallery} from './components/gallery'
import {Testimonials} from './components/testimonials'
import {Team} from './components/Team'
import {Contact} from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import {Produit} from "./components/produit";
import {ModeEmploi} from "./components/ModeEmploi";
import {Faq} from "./components/faq";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
})

const App = () => {
    const [landingPageData, setLandingPageData] = useState({})

    function verifScroll(scrollY){

        if(scrollY < 500) return 0 ;
        return (scrollY-700)/1200;
    }

    useEffect(() => {
        setLandingPageData(JsonData);

        window.addEventListener(
            "scroll",
            () => {
                document.body.style.setProperty(
                    "--scroll",
                    verifScroll(window.scrollY)
                );
            },
            false
        );


    }, [])


    return (
        <div>
            <Navigation/>
            <Header data={landingPageData.Header}/>
            <ModeEmploi data={landingPageData.Services}/>
            <About data={landingPageData.About}/>
            <Produit data={landingPageData.About}/>
            <Services data={landingPageData.Services}/>
            <Caracteristiques/>
            <Gallery/>
            <Faq />
            {/*<Features data={landingPageData.Features}/>*/}

            {/*<div style={{height: '80vh'}}></div>*/}
            {/*<div style={{height: '110vh'}} id="features"></div>*/}

            <Testimonials data={landingPageData.Testimonials}/>
            <Team data={landingPageData.Team}/>

            <Contact data={landingPageData.Contact}/>

        </div>
    )
}

export default App
