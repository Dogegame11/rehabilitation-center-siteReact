import "./main.css";
import "../App.css";
import ContentWork from "../components/body/FirstBlock/ContentWork";
import AppointmentButton from "../components/elements/AppointmentButton";
import SecondBlock from "../components/body/SecondBlock/Reason-block";
import Form from "../components/elements/Form";
import { useState } from "react";
import Banner from "../components/body/BannerForm";
import photo from "../assets/background-art2.png";

function Greeting() {
  return (
    <div className="greeting">
      <h1>ReStart – це твоє перезавантаження і дії</h1>
      <p>
        Кінезіотерапія — це не просто вправи. Це індивідуальна програма з
        фокусом на ваш стан, мету та комфорт. Підходить і як лікування, і як
        профілактика — щоби рух приносив радість, а тіло працювало злагоджено.
      </p>
      <AppointmentButton name="Записатись на прийом" />
    </div>
  );
}

function ExampleBtn({ initialBtn, initialColorBtn }) {
  const [textBtn, setTextBtn] = useState(initialBtn);
  const [color, setColor] = useState(initialColorBtn);

  function DoSmth() {
    setTextBtn("Text has benn changed");
    setColor("btn-green");
  }
  return (
    <button className={color} onClick={DoSmth}>
      {textBtn}
    </button>
  );
}

export default function Home() {
  const [isFormVisible, setFormVisible] = useState(false);
  return (
    <>
      <main>
        {/* <ExampleBtn initialBtn="Click me" initialColorBtn="" /> */}
        <div className="background-wrapper">
          <div className="background-content">
            <div className="photo-container">
              <img src={photo} alt="Фото" class="photo" />
            </div>
            <Greeting />
            <ContentWork />
            <SecondBlock />
            <Form
              isVisible={isFormVisible}
              onClose={() => setFormVisible(false)}
            />
            <div className="btn-wrapper">
              <AppointmentButton name="Отримати відповідь" />
            </div>
            <Banner name="Втомились від Геморою???" />
          </div>
        </div>
      </main>
    </>
  );
}
