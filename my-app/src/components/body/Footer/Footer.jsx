import "./footer.css";
// import { FaTelegramPlane, FaViber, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Години роботи</h3>
        <ul>
          <li>ПН 15:00-21:00</li>
          <li>ВТ 08:00-15:00</li>
          <li>СР 15:00-21:00</li>
          <li>ЧТ 08:00-15:00</li>
          <li>ПТ 15:00-21:00</li>
          <li>СБ 08:00-15:00</li>
          <li>НД вихідний</li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Контакти</h3>
        <p>Телефон: +380 12 345 67 89</p>
        <p>Email: info@email.com.ua</p>
      </div>

      <div className="footer-column">
        <h3>Соцмережі</h3>
        <div className="social-icons">
          <a href="." target="_blank" rel="noopener noreferrer"></a>
          <a href="." target="_blank" rel="noopener noreferrer"></a>
          <a href="." target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div>
    </footer>
  );
}
