function generateQRCode(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) {
      new QRCode(element, {
        text: text,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    }
  }

document.addEventListener("DOMContentLoaded", function () {
  generateQRCode("qr-code-1", "https://example.com/model1");
  generateQRCode("qr-code-2", "https://example.com/model2");
  generateQRCode("qr-code-3", "https://example.com/model3");
  // Générez autant de QR codes que nécessaire, en utilisant les identifiants et les liens appropriés
});
