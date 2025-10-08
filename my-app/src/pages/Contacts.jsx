import "./contacts.css";
import Banner from "../components/body/BannerForm";

export default function Contacts() {
  return (
    <>
      <div className="container">
        <div className="left-side">
          <div className="header">
            <h3>
              ОЗДОРОВЧИЙ ЦЕНТР КІНЕЗІТЕРАПІЇ ЗДОРОВИЙ РУХ ЗАЛ М. ЛІВОБЕРЕЖНА
            </h3>
            <p1>
              Адреса: м. Лівобережна, вул. Євгена Сверстюка 11а, БЦ НОВИЙ, 12
              поверх, офіс 1210
            </p1>
            <div>
              <b>Контактні телефони:</b>
            </div>
            <div>+38 (067) 689-91-17</div>
            <div>
              <b>Режим роботи:</b>
            </div>
            <div>ПН-СБ: 8:00-21-00</div>
          </div>
        </div>
        <div className="right-side">
          <img
            src="https://zdorovy-ruh.com.ua/wp-content/uploads/2019/07/contact-cont-bg_1.png"
            alt=""
          />
        </div>
      </div>

      <Banner name="Хочете позбутися від болю раз і назавжди?" />
    </>
  );
}
