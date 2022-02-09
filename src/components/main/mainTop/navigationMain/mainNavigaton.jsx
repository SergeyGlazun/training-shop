import React from 'react';
import { Link } from 'react-router-dom';

import './mainNavigation.scss';

import '../../../slider/slider.scss';

const SectionNavigationMain = () =>{
    return(
        <div className='sectionNavMain'>
        <div className='sectionNavMainTop'>
           <Link to='/women' className='btnTopLeft'>
             <div className='womenTopMain' type='button'>                     
                WOMEN      
             </div>
           </Link>

        <Link to='/men' className='btnTopRight'>
          <div className='menTopMain' type='button'>
             MEN
          </div>
        </Link>
        
        </div>
            <Link to='/accessories' className='btnTopBtn'>
              <div className='accessoriesTopMain' type='button'>
                  ACCESSORIES
               </div>
            </Link>
        </div>

    );
}

export default SectionNavigationMain;