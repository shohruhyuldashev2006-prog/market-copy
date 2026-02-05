import './footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import vk from '../../img/vk.png';
import logo from '../../img/logo.png';
function Footer() {
  return (
    <>
      <div className="container">
        <div className="content">
          <img src={logo} width={200} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            faucibus egestas elit, at eleifend elit ornare ut.
          </p>
        </div>
        <div className="footer-nav">
          <ul className="footer-links">
            <h3>Основные ссылки</h3>
            <li>О компании</li>
            <li>Каталог</li>
            <li>Доставка</li>
            <li>Оплата</li>
          </ul>
          <ul className="footer-links">
            <h3>Категории</h3>
            <li>Мужская одежда</li>
            <li>Женская одежда</li>
            <li>Детская одежда</li>
            <li>Для животных</li>
          </ul>
          <ul className="footer-links">
            <h3>ПОЛЕЗНЫЕ ССЫЛКИ</h3>
            <li>Таблица размеров</li>
            <li>Блог о моде</li>
            <li>Наша миссия</li>
          </ul>
          <div className="footer-links">
            <h3>СОЦ СЕТИ</h3>
            <div className="social-media">
              <img width={16} src={vk} alt="" />
              <p>VK.com</p>
            </div>
            <div className="social-media">
              <FacebookIcon />
              <p>Facebook</p>
            </div>
            <div className="social-media">
              <InstagramIcon />
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Copyright">
        <div className="ContaIner">
          <h3>Copyright © 2019. Все права защищены</h3>
          <p>Политика приватности</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
