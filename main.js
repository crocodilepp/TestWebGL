function copyTo() {
	var code = document.getElementById("code").value;
    var textarea = document.createElement("textarea");
	textarea.value = code;
    textarea.style.fontSize = '20px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}