import React from 'react';

import { arrMainNews } from "../../../db/mainNews";

import './mainNews.scss';

const divStyle = {      
    backgroundImage: 'url(' + arrMainNews[0].imageSrc + ')',
  };

  const divStyle1 = {      
    backgroundImage: 'url(' + arrMainNews[1].imageSrc + ')',
  };

const MainNews = () =>{
   
    return (
        <div className='mainNews'>
        <div className='leftCard' style={divStyle}>
      
          <div className='btn' >         
            <div className='title'>{arrMainNews[0].title}</div>
            <div className='text'>{arrMainNews[0].text}</div>
          </div>
        </div>
        <div className='rightCard' style={divStyle1}>        
          <div className='btn' >
            <div className='title'>{arrMainNews[1].title}</div>
            <div className='text'>
            {arrMainNews[1].text} <span className='text-color'>{arrMainNews[1].text1}</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MainNews;