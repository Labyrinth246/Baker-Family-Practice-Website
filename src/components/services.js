import React from "react";
import services from "./services.module.css";
import Header from "../header";
import YoutubeEmbed from "./YoutubeEmbed";
import { Link } from "react-router-dom";

function Services() {

    function Emsella() {
        window.open(
          "https://bodybybtl.com/solutions/btl-emsella/", "_blank");
      }

    return (
        <div className={services.container}>
            <Header/>
            <div className={services.services}>
                <div className={services.servicesGrid}>
                    <div className={services.title}>
                        <h1>Emsella Chair</h1>
                
                        <div className={services.description}>
                            <p>Emsella is a new breakthrough treamtment for urinary intontinence and confidence in mainly women. The Emsella Chair is designed to help strengthen the pelvic floor muscles for better urinary control and sexual wellness. It works by delivering eletrical stimulation to the pelvic floor muscles causing thousands of muscle contractions in a single session. These sessions are only 30 minutes long, with 6 total recommended sessions seperated by 2-3 days.</p>
                        </div>

                        <img
                        className={services.emsellaChair}
                        src="/images/emsella_fullpic.jpg"
                        alt="logo"
                        onClick={() => {Emsella();}}/>

                        <div className={services.short}>
                            <p>6 Sessions<br/>30 Minutes Long<br/>2-3 Day Breaks<br/>Done in 18 Days!<br/><Link onClick={() => {Emsella();}}>Learn More!</Link></p>
                        </div>

                    </div>

                    <div className={services.videoOne}>
                        <YoutubeEmbed embedId="mwwO0iQgY-c" />
                    </div>

                    <div className={services.videoTwo}>
                        <YoutubeEmbed embedId="2HLEVkT1LUU" />
                    </div>
                </div>
                
            
            </div>
        </div>
    );
}

export default Services;