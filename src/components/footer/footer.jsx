import React from "react";

import FooteJoin from "./footerJoin";
import FooteInformation from "./footerInformation";
import FooterCard from "./footerCard";
import './footer.scss';

const Footer = () =>{
    return(
        <footer className='footer' data-test-id='footer'>
               <FooteJoin/>
               <FooteInformation/>
                <FooterCard/>
        </footer>
    )
}

export default Footer;