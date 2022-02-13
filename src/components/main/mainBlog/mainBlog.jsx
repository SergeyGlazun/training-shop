import { Link } from 'react-router-dom';

import { arrMainBlog } from '../../../db/mainBlog';

import './mainblog.scss';

const MainBlog = () =>{
    return(
        <div className='mainBlog'>
            <div className="blogHeader">
            <div className='title'>LATEST FROM BLOG</div>
            <Link to='/blog' className='link'>
                SEE ALL
            </Link>
            </div>

            <div className='blogContener'>
                {arrMainBlog.map(({ id, imageSrc, name, title, text }) => (       
                <div className='blogItem' key={id}>
                <img  src={imageSrc} alt={name} className='blogItemImg' />
            
                  <div className='blogContenerText'>
                    <div className='blogTitle'>{title}</div>
                    <div className='blogText'>{text}</div>
                  </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default MainBlog;