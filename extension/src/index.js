chrome.tabs.query({ active: true }, tabs => {
	const url = tabs[0].url;
	const size = (() => { 
		const length = url.length;
		if (length>60) {
			if (length>150) return 300;
			return length*2;
		} else return 120 
	})();
  new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: size,
    height: size,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
})
