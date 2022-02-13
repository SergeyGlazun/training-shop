import { Link } from 'react-router-dom';

import location from './img/location.svg';
import phone from './img/phone.svg';
import clock from './img/clock.svg';
import mail from './img/mail.svg';

import { arrFoterInformation } from '../../../db/footerInformation';
import { arrContacts } from '../../../db/dbContacts';

import './footerInformation.scss'
const FooteInformation = () =>{
    return(
        <div className='wrapper'>
            <div className='footerInf '>
            {arrFoterInformation.map(({ id, links }) => (
                <div className='footerInfItem ' key={id}>
                    {links.map(({ text, href }, index) => (
                    <Link  to={`/${href}`} data-test-id={`footer-nav-link-${href}`} className='link' key={index.toString()}>
                        {text}
                    </Link>
                    ))}
                </div>
                ))}

            <div className='footerInfItem'>
                <div className='link'>CONTACT US</div>
                <a href='!#' className='link'>
                    <img src={location} alt='locationMarker' className='locationMarker footerInfImg' />
                    <span>{arrContacts[1].data}</span>
                </a>
                <a href='!#' className='link'>
                    <img src={phone} alt='phone' className='phone footerInfImg' />
                    <span>{arrContacts[0].data}</span>
                </a>
                <a href='!#' className='link'>
                    <img src={clock} alt='clock' className='clock footerInfImg' />
                    <span>{arrContacts[2].data}</span>
                </a>
                <a href='!#' className='link'>
                    <img src={mail} alt='mail' className='mail footerInfImg' />
                    <span className='mailText'>info@clevertec.ru</span>
                </a>
                </div>

            </div>
        </div>
        
    );
}

export default FooteInformation;