import { arrContacts } from "../../../db/dbContacts";
import './contact.scss';

const Contacts = () =>{
    return (
        <div className='contacts'>
            {
     arrContacts.map(({ id, href, data, imageSrc }) => (
      <a href={href} className='contacts-item' key={id}>
        <img src={imageSrc} alt='imgUser' className='contacts-item-img' />
        <span>{data}</span>
      </a>
    ))
    }
        </div>
    )
}

export default Contacts;