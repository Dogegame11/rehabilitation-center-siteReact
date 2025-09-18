import data from "./reasons.json";
import "./Reason-block.css";
import img1 from "../../../assets/icons/back-pain.png";
import img2 from "../../../assets/icons/restore.png";
import img3 from "../../../assets/icons/sport.png";

const icons = [img1, img2, img3];

function Reasons() {
  return (
    <ul className="reason-block">
      {data.map((item, index) => (
        <li key={index}>
          <img src={icons[index]} alt={item.text} className="icon" />
          <p className="text">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default function SecondBlock() {
  return (
    <>
      <h1>Для кого?</h1>
      <div className="reason-block">
        <Reasons />
      </div>
    </>
  );
}
