import "./AppointemntButton.css";
import { useState } from "react";
import Form from "./Form";

export default function AppointmentButton({ name }) {
  const [isClicked, setisClicked] = useState(false);

  return (
    <div className="button-info" style={{ position: "relative" }}>
      <button onClick={() => setisClicked(true)}>{name}</button>
      <Form isVisible={isClicked} onClose={() => setisClicked(false)} />
    </div>
  );
}
