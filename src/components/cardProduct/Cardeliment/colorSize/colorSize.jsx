import React from 'react';
import './colorSize.scss';
import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import heart from '../../../../pages/productPage/productInformationPage/mainProductItem/img/heart.svg';
import scale from '../../../../pages/productPage/productInformationPage/mainProductItem/img/scale.svg';

import { addProduct, removeProduct, sumAddProductPrise, deleteProductPrise } from '../../../../reducers';

const ColorSize = ({ dataProductCard }) => {
  const dispatch = useDispatch();
  const prise = dataProductCard.price;
  const name = dataProductCard.name;
  const items = useSelector(state => state.toolkit.arrProduct)
  let filteredArray = [];

  const [colors, colorCheck] = useState(dataProductCard.images[0].color);
  const [size, sizeCheck] = useState(dataProductCard.sizes[0]);
  const [img, imgCheck] = useState(dataProductCard.images[0].url);

  if (dataProductCard !== undefined) {
    dataProductCard.images.forEach(item => {
      if (!filteredArray.some((element) => element.color === item.color)) {
        filteredArray.push(item);
      }
    });
  }

  const Id = `${dataProductCard.id}-${colors}-${size}`;

  function compareProduct() {
    return items.find(
      (item) => item.Id === `${dataProductCard.id}-${colors}-${size}`
    );
  }

  // useEffect(() => {
  //   colorCheck(dataProductCard.images[0].color);
  //   sizeCheck(dataProductCard.sizes[0]);
  //   imgCheck( dataProductCard.images[0].url);
  // },
  //   [dataProductCard]
  // );


  return (
    <>
      <div className='colorItem'>
        {

          filteredArray.map(({ url, color, id }) => (
            <div key={id} onClick={() => { colorCheck(color); imgCheck(url) }}>
              <img src={`https://training.cleverland.by/shop${url}`} alt='imgUser' className={colors === color ? "colorImg coloChek" : "colorImg coloChekHover"} />
            </div>
          ))
        }
      </div>

      <div className='sizeBtn'>
        {
          dataProductCard.sizes.map((item, id) => (
            <button key={id}
              type='button'
              onClick={() => sizeCheck(item)}
              className={item === size ? "coloChek size" : "coloChekHover size"}
            >{item}</button>
          ))
        }
      </div>

      <div className='pay'>
        {!compareProduct() ?
          <button type='button'
            className='payBtn'
            onClick={() => {
              dispatch(sumAddProductPrise(prise));
              dispatch(addProduct({ name, colors, size, img, prise, Id, quantity: 1 }))
            }}
          >
            ADD TO CARD
          </button>
          :
          <button type='button'
            className='payBtn'
            onClick={() => {
              dispatch(deleteProductPrise(prise));
              dispatch(removeProduct(compareProduct()))
            }}

          >
            REMOVE TO CARD
          </button>
        }
        <div className='heard'>
          <img className='heartImg' src={heart} alt='heart' />
        </div>
        <div className='heard'>
          <img src={scale} alt='scale' className='scaleImg' />
        </div>

      </div>
    </>
  );
}

export default ColorSize;