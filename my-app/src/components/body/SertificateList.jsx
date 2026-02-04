import { certificates } from "../../data/certificates.js";
import "./SertificateList.css";

export default function CertificatesList() {
  return (
    <div className="certificates-container">
      {certificates.map((cert) => (
        <a
          key={cert.id}
          href={cert.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src={cert.cover}
            alt={cert.title}
            className="certificate-cover"
          />
          <p className="certificate-title">{cert.title}</p>
        </a>
      ))}
    </div>
  );
}
