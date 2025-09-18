import "./main.css";
import ContentWork from "../components/body/FirstBlock/ContentWork";
import AppointmentButton from "../components/elements/AppointmentButton";
import SecondBlock from "../components/body/SecondBlock/Reason-block";
import Form from "../components/elements/Form";
import { useState } from "react";
import Footer from "../components/body/Footer/Footer";

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

export default function Home() {
  const [isFormVisible, setFormVisible] = useState(false);
  return (
    <>
      <main>
        <Greeting />
        <ContentWork />
        <SecondBlock />
        <Form isVisible={isFormVisible} onClose={() => setFormVisible(false)} />
        <div className="btn-wrapper">
          <AppointmentButton name="Отримати відповідь" />
        </div>
        <Footer />
      </main>
    </>
  );
}
