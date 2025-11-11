const QRCode = require('qrcode-svg');
const fs = require('fs');

function generateProfessionalQR() {
  const config = {
    content: "https://devbydev.co.uk",
    padding: 4,
    width: 400,
    height: 400,
    color: "#2D3748",
    background: "transparent",
    ecl: "H",                
    join: true,
    pretty: true,
    title: "devbydev - Secure Payments",
    description: "Scan to experience seamless payments with devbydev"
  };

  const qrcode = new QRCode(config);
  let svg = qrcode.svg();
  
  fs.writeFileSync('./assets/devbydev-qr-code.svg', svg);
  console.log("Professional devbydev QR code generated: devbydev-qr-code.svg");
}

generateProfessionalQR();