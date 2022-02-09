import { ArrHeaderPanelIcon } from "../../../db/headerPanelIcon";

import './headerPanelIcon.scss';

const HeaderPanelIcon = () =>{
    return (
        <div className='headerPanelIcon'>
             {ArrHeaderPanelIcon.map(({ id, imageSrc, href }) => (
        <a href={href} className='headerPanelIconItem' key={id}>
          <img src={imageSrc} alt='imgUser' className='headerPanelIconItemImg' />
        </a>
      ))}
        </div>
    )
}

export default HeaderPanelIcon;