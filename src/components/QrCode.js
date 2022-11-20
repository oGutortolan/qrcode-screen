import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import { useParams } from "react-router-dom";
import logo from "../logo.png";
const QrCode = () => {
  const [src, setSrc] = useState("");
  const { qrCode, code } = useParams();

  useEffect(() => {
    generateQrCodeImg();
  }, []);

  const generateQrCodeImg = async () => {
    QRCode.toDataURL(
      qrCode,
      {
        errorCorrectionLevel: "H",
        type: "image/jpeg",
        quality: 0.3,
        width: 400,
        height: 400,
        margin: 1,
        borderRadius: "40px",
      },
      (err, url) => {
        if (err) throw Error();
        setSrc(url);
      }
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "42%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              height: "240px",
            }}
          >
            <img
              style={{
                height: "300px",
                width: "300px",
              }}
              src={logo}
            ></img>
          </div>
          <div
            style={{
              backgroundColor: "#F7931E",
              height: "700px",
              width: "900px",
              textAlign: "center",
              borderRadius: "40px",
              paddingTop: "1px",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "white",
                margin: "50px",
              }}
            >
              Use o QR Code para acessar o evento
            </h2>

            <img src={src}></img>

            <h1
              style={{
                textAlign: "center",
                color: "white",
                margin: "50px",
              }}
            >
              Abra o app Ubeen e escaneie o QR Code para localizar o evento ou
              acesse pelo código {code}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
