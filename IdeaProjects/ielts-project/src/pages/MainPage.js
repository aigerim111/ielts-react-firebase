import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "../components/HeroSection";
import CardSection from "../components/CardSection";
import InfoSection from "../components/InfoSection";

function MainPage(){
    return(
        <>
            <HeroSection />
            <CardSection />
            <InfoSection />
        </>
    )
}

export default MainPage