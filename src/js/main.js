// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });
// import qrcode from 'lib/davidshimjs-qrcodejs/qrcode.js';

console.log("This should work");
// new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");
/*
function generateQRCode() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var url = tabs[0].url;
    var qrCode = new QRCode(document.getElementById("qrcode"), {
      text: url,
      width: 256,
      height: 256,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
  });
}
*/
document.addEventListener("DOMContentLoaded", function() {
//   generateQRCode();
});

chrome.commands.onCommand.addListener(function(command) {
  if (command === "generate_qr_code") {
    // generateQRCode();
  }
});





