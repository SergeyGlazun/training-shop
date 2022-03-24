import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {selectedProduct} from '../../../../reducers/selectedProductType';
import './mainNavigation.scss';

import '../../../slider/slider.scss';

const SectionNavigationMain = () =>{
   const dispatch = useDispatch();
    return(
        <div className='sectionNavMain'>
        <div className='sectionNavMainTop'>
           <Link to='/women' className='btnTopLeft'>
             <div className='womenTopMain' type='button' onClick={() => dispatch(selectedProduct("women"))}>                     
                WOMEN      
             </div>
           </Link>

        <Link to='/men' className='btnTopRight'>
          <div className='menTopMain' type='button' onClick={() => dispatch(selectedProduct("men"))}>
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