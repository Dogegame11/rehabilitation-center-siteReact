import Button from "../elements/AppointmentButton";
import "./BannerForm.css";

export default function BannerForm({ name }) {
  return (
    <>
      <div className="container">
        <div className="left-side">
          <h1 className="titleFont">{name}</h1>
          <p>Запишіться на прийом до наших фахівців!</p>
        </div>
        <div className="right-side">
          <Button name="Записатись на прийом" />
        </div>
      </div>
    </>
  );
}
