import React from 'react';
import catalog from '../../img/catalog.png';
import './card.css';
import girl from '../../img/girl.png';

function Card() {
  return (
    <div>
      <div className="card-container">
        <div className="catalog-img"></div>
        <h1>Новые модели</h1>
      </div>

      <div className="ul-list">
        <div className="list-item">
          <img width={180} src={girl} alt="" />
          <h3>Коктейльное платье</h3>
          <p>₽ 40 000</p>
        </div>
        <div className="list-item">
          <img width={180} src={girl} alt="" />
          <h3>Коктейльное платье</h3>
          <p>₽ 40 000</p>
        </div>
        <div className="list-item">
          <img width={180} src={girl} alt="" />
          <h3>Коктейльное платье</h3>
          <p>₽ 40 000</p>
        </div>
        <div className="list-item">
          <img width={180} src={girl} alt="" />
          <h3>Коктейльное платье</h3>
          <p>₽ 40 000</p>
        </div>
      </div>

      <button className="button-model">ВСЕ МОДЕЛИ ⤷</button>
    </div>
  );
}

export default Card;
