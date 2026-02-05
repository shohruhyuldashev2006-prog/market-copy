import './Page1.css';
import running_shoes from '../../img/running_shoes.png';
function Page1() {
  return (
    <div>
      <div className="container1">
        <div className="first-screen-text">
          <h3>Зимняя распродажа</h3>
          <h1>СКИДКИ ДО 90%</h1>
          <input type="submit" value={'СМОТРЕТЬ МОДЕЛИ'} />
        </div>
        <div className="first-screen-image">
          <img src={running_shoes} alt="" />
          <div className="first-text">
            <span>9 900 ₽ </span>
            <strong>1 900 ₽ </strong>
          </div>
        </div>
      </div>
      <div className="first-screen-slider">
        <div className="first-screen-slider-controls">
          <span></span>
        </div>
        <div className="first-screen-slider-controls">
          <span></span>
        </div>
        <div className="first-screen-slider-controls">
          <span></span>
        </div>
        <div className="first-screen-slider-controls">
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Page1;
