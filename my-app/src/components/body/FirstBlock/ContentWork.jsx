import { useState, useRef } from "react";
import items from "./item.json";
import "./ContentWork.css";

function Modalcard({ name, description }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouse = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(false);
  };

  return (
    <li
      className="modal-card"
      onClick={handleMouse}
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      {name}
      {isOpen && (
        <div className="modal-popup">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      )}
    </li>
  );
}

export default function ContentWork() {
  return (
    <div className="content-work">
      <h2>З чим працюємо:</h2>
      <ul>
        {items.map((item) => (
          <Modalcard
            key={item.name}
            name={item.name}
            description={item.description}
          />
        ))}
      </ul>
    </div>
  );
}
