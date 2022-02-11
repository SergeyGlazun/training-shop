import NetworkContact from "../../networkContact";

import './footeJoin.scss';

const FooteJoin = () =>{
    return(
        <div className="footerJoinContener">
            <div className="wrapper">
            <span className="footerText">BE IN TOUCH WITH US:</span>
            <div className="footerEmail">
                <input type="text" placeholder='Enter your email' className="footerInput"/>
                <button className="footerBtn" type='button'>JOIN US</button>
            </div>
            <NetworkContact/>
            </div>
        </div>
    );
}

export default FooteJoin;