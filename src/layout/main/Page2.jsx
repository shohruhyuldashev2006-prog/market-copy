import './page2.css';
import male from '../../img/male.png';
import woman from '../../img/woman.png';
import Card from './card';
import Card2 from './card2';
import Footer from '../footer/Footer';
function Page2() {
  return (
    <div className="page2-cotainer">
      <h1>БЕСПЛАТНАЯ ДОСТАВКА ОТ 3000₽</h1>
      <span>Сделайте заказ и получите подарок!</span>
      <div className="КОЛЛЕКЦИЯ">
        <div className="МУЖСКАЯ-КОЛЛЕКЦИЯ">
          <strong>
            МУЖСКАЯ <p> КОЛЛЕКЦИЯ</p>
          </strong>
          <span>Обувь, полуверы, костюмы</span>
          <input type="submit" value={'⤷'} />
          <div className="male-img">
            <img src={male} alt="" />
          </div>
        </div>
        <div className="ЖЕНСКАЯ-КОЛЛЕКЦИЯ">
          <strong>
            ЖЕНСКАЯ <p> КОЛЛЕКЦИЯ</p>
          </strong>
          <span>Обувь, полуверы, костюмы</span>
          <input type="submit" value={'⤷'} />
          <div className="female-img">
            <img src={woman} alt="" />
          </div>
        </div>
      </div>
      <Card />
      <div className="СКИДКИ-И-ПОДАРКИ">
        <div className="ПОДАРКИ">
          <h1>ПОЛУЧАЙТЕ СКИДКИ И ПОДАРКИ</h1>
          <input type="text" placeholder="Ваш e-mail" />
          <button>ПОДПИСАТЬСЯ</button>
        </div>
      </div>
      <Card2 />
      <Footer />
    </div>
  );
}

export default Page2;
