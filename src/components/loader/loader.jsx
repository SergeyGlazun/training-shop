import './loader.scss';
export const Loader = () => (
    <div className='blockSpiner'>
        <div className="lds-ellipsis" data-test-id='loader' ><div></div><div></div><div></div><div></div></div>
    </div>

)