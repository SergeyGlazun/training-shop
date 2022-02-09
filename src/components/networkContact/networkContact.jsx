import React from 'react';
import PropTypes from 'prop-types';

import { dbNetworkContact } from '../../db/networkContact';

import './networkContact.scss';

 const NetworkContact = ({ size }) => {
    return (
      <div className='social-network'>
        { 
        dbNetworkContact.map(({ id, imageSrc, href }) => (
          <a href={href} className='social-network-item' key={id}>
            <img src={imageSrc} width={size} alt='imgUser' className='social-network-item-img' />
          </a>
        ))
        }
      </div>
    );
  };
  
  NetworkContact.propTypes = {
    size: PropTypes.oneOf(['14px', '18px']),
  };
  
  NetworkContact.defaultProps = {
    size: '14px',
  };

  export default NetworkContact;
