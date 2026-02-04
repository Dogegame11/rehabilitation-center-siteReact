import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header>
      <div className="column-left">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Головна
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Про спеціаліста
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sertificates"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Сертифікати
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="column-center">
        <div className="logo">
          <img src={logo} alt="Логотип" />
        </div>
      </div>

      <div className="column-right">
        <ul>
          <li>
            <NavLink
              to="/prices"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Ціни
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Контакти
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
