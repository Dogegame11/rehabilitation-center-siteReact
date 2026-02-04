import { useState } from "react";
import "./Form.css";

const TIME_SLOTS = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

export default function Form({ isVisible, onClose }) {
  const [loading, setLoading] = useState(false);

  if (!isVisible) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const payload = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      date: form.date.value,
      time: form.time.value,
    };

    try {
      const res = await fetch("http://localhost:3000/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();

      alert("Заявку надіслано");
      form.reset();
      onClose();
    } catch {
      alert("Помилка при відправці");
    }

    setLoading(false);
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>

        <h2>
          <strong>ЗАЛИШТЕ</strong> ВАШІ КОНТАКТИ
        </h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" placeholder="Ваше імʼя" required />

          <input name="phone" placeholder="+380 XX XXX XX XX" required />

          <input name="email" placeholder="Email (необовʼязково)" />

          <input type="date" name="date" required />

          <select name="time" required>
            <option value="">Оберіть час</option>
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <button disabled={loading}>{loading ? "..." : "ВІДПРАВИТИ"}</button>
        </form>
      </div>
    </div>
  );
}
