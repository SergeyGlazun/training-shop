import './filterString.scss';



const FilterString = ({ countSetings, sizeArr, colorArr, brendArr, priceArr }) => {

    function chekFilter(arr, title) {
        return (
            <span>
                {title}
                {
                    arr.map((item, id) => (
                        <span key={id}>{item}{id !== item.length - 1 ? `, ` : ``}</span>
                    ))
                }
            </span>
        )
    }

    return (
        <div className='filterChekString'>
            <span className='countChek'>{countSetings} items found</span>
            {colorArr.length > 0 ? chekFilter(colorArr, 'Color:') : ""}
            {sizeArr.length > 0 ? chekFilter(sizeArr, 'Size:') : ""}
            {brendArr.length > 0 ? chekFilter(brendArr, 'Brand:') : ""}
            {priceArr.length > 0 ? chekFilter(priceArr, 'Price:') : ""}
        </div>
    );
}

export default FilterString;