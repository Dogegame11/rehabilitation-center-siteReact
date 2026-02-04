import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/body/Footer/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Prices from "./pages/Prices";
import Contacts from "./pages/Contacts";
import Sertificates from "./pages/Sertificates";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sertificates" element={<Sertificates />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}
