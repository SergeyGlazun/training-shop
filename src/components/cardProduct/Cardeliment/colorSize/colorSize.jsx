import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct, sumAddProductPrise } from '../../../../reducers/actionBasket';
import heart from '../../../../pages/productPage/productInformationPage/mainProductItem/img/heart.svg';
import scale from '../../../../pages/productPage/productInformationPage/mainProductItem/img/scale.svg';

import './colorSize.scss';

const ColorSize = ({ dataProductCard }) => {
  const dispatch = useDispatch();
  const price = dataProductCard.price;
  const name = dataProductCard.name;
  const items = useSelector((state) => state.toolkit.arrProduct);
  let filteredArray = [];

  const [colors, setColors] = useState(dataProductCard.images[0].color);
  const [size, setSize] = useState(dataProductCard.sizes[0]);
  const [img, setImg] = useState(dataProductCard.images[0].url);

  if (dataProductCard !== undefined) {
    dataProductCard.images.forEach((item) => {
      if (!filteredArray.some((element) => element.color === item.color)) {
        filteredArray.push(item);
      }
    });
  }

  const Id = `${dataProductCard.id}-${colors}-${size}`;

  function compareProduct() {
    return items.find((item) => item.Id === `${dataProductCard.id}-${colors}-${size}`);
  }

  return (
    <>
      <div className='colorItem'>
        {filteredArray.map(({ url, color, id }) => (
          <div
            key={id}
            onClick={() => {
              setColors(color);
              setImg(url);
            }}
          >
            <img
              src={`https://training.cleverland.by/shop${url}`}
              alt='imgUser'
              className={`colorImg ${colors === color ? 'coloChek' : 'coloChekHover'}`}
            />
          </div>
        ))}
      </div>

      <div className='sizeBtn'>
        {dataProductCard.sizes.map((item, id) => (
          <button
            key={id}
            type='button'
            onClick={() => setSize(item)}
            className={`size ${item === size ? 'coloChek' : 'coloChekHover'}`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className='pay'>
        {!compareProduct() ? (
          <button
            type='button'
            className='payBtn'
            onClick={() => {
              dispatch(sumAddProductPrise(price));
              dispatch(addProduct({ name, colors, size, img, price, Id, quantity: 1 }));
            }}
          >
            ADD TO CARD
          </button>
        ) : (
          <button
            type='button'
            className='payBtn'
            onClick={() => {
              dispatch(removeProduct(compareProduct()));
            }}
          >
            REMOVE TO CARD
          </button>
        )}
        <div className='heard'>
          <img className='heartImg' src={heart} alt='heart' />
        </div>
        <div className='heard'>
          <img src={scale} alt='scale' className='scaleImg' />
        </div>
      </div>
    </>
  );
};

export default ColorSize;
