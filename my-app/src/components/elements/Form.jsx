import "./Form.css";

export default function Form({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2>
            <strong>ЗАЛИШТЕ</strong> ВАШІ КОНТАКТИ
          </h2>
          <p>Ми передзвонимо Вам найближчим часом</p>

          <form className="contact-form">
            <input type="text" name="name" placeholder="Ваше Ім'я" required />
            <input type="tel" name="phone" placeholder="380" required />
            <input type="email" name="email" placeholder="Email" required />
            <button type="submit">ВІДПРАВИТИ</button>
          </form>

          <p className="privacy">
            Ми гарантуємо безпеку Ваших персональних даних
          </p>
        </div>
      </div>
    </>
  );
}
