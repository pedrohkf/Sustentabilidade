import "./DonationComponent.css";
import QR from "../../assets/qrcode.jpeg";

const DonationComponent = () => {
  return (
    <div className="donation-wrapper">
      <div className="donation-header">
        <h1 className="donation-title">Contribua com a Sustentabilidade!</h1>
        <p className="donation-text">
          Sua doação ajuda a manter a coleta e o descarte correto de lixo eletrônico.
        </p>
      </div>

      <div className="donation-content">
        {/* Seção de QR Code */}
        <div className="donation-qr">
          <img
            src={QR} // Imagem fake de QR Code
            alt="QR Code para Doação"
            className="donation-qr-image"
          />
          <p className="donation-qr-text">Aponte a câmera do seu celular para fazer sua doação!</p>
        </div>

        {/* Informações adicionais sobre a doação */}
        <div className="donation-info">
          <h2 className="donation-info-title">Por que doar?</h2>
          <ul className="donation-list">
            <li>Contribua para o meio ambiente e ajude na redução do lixo eletrônico.</li>
            <li>Receba um certificado de doador e ajude a fomentar a sustentabilidade.</li>
            <li>Tenha acesso a benefícios exclusivos para colaboradores.</li>
          </ul>
          <button className="donation-button">Faça sua doação</button>
        </div>
      </div>
    </div>
  );
};

export default DonationComponent;
