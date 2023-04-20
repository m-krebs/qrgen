// HELP: https://stackoverflow.com/questions/33144234/chrome-extension-geturl-not-working-in-injected-file

// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

chrome.tabs.query({ active: true }, tabs => {
  const url = tabs[0].url;
  new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
})
