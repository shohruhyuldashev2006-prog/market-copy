import React from 'react';
import girl from '../../img/girl.png';
import './card.css';
function Card2() {
  return (
    <>
      <div className="discounts">СКИДКИ ДО 90%</div>
      <div>
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
    </>
  );
}

export default Card2;
