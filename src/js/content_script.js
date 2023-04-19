console.log("How about this?")
(async () => {
    const src = chrome.extension.getURL('lib/davidshimjs-qrcodejs/qrcode.js');
    const contentScript = await import(src);
    const qrCode = new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");
    console.log(qrCode);
    console.log("is this even working?")
})();
