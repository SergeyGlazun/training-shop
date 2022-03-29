import NetworkContact from "../../networkContact";
import ForEmail from "../../Form/FormEmail/formEmail";
import './footeJoin.scss';

const FooteJoin = () => {
    return (
        <div className="footerJoinContener">
            <div className="wrapper">
                <span className="footerText">BE IN TOUCH WITH US:</span>
              
                <ForEmail classFooterEmail={"footerEmail"}
                 classInput={"footerInput"}
                 classButtonDisebleTrue={"footerBtnFalse"}
                 lassButtonDisebleFalse={"footerBtnTrue"}
                 classError={"error"}
                 idInput={'footer-mail-field'}
                 idButton={'footer-subscribe-mail-button'}
                 />
              
                <NetworkContact />
            </div>
        </div>
    );
}

export default FooteJoin;