import './header.css';
import logo from '../../img/logo.png';
import basket from '../../img/basket.png';
import Page1 from '../main/Page1';
function Header() {
  return (
    <div>
      <div className="header-container">
        <ul className="header-menu">
          <li>
            <a href="#">Для мужчин</a>
          </li>
          <li>
            <a href="#">Для женщин</a>
          </li>
          <li>
            <a href="#">Для детей</a>
          </li>
        </ul>

        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        <ul className="header-menu">
          <li>
            <a href="#">Оплата</a>
          </li>
          <li>
            <a href="#">Доставка</a>
          </li>
        </ul>
        <div className="header-basket">
          <img src={basket} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
