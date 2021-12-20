function copyTo() {
    const isIos = navigator.userAgent.match(/ipad|iphone/i);
    const textarea = document.createElement('textarea');

      // create textarea
      textarea.value = '12345';

  // ios will zoom in on the input if the font-size is < 16px
  textarea.style.fontSize = '20px';
  document.body.appendChild(textarea);

  // select text
  /*if (isIos) {
    textarea.value = 'is ios';
    const range = document.createRange();
    range.selectNodeContents(textarea);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    textarea.setSelectionRange(0, 999999);
  } else {*/
    textarea.value = 'is not ios';
    textarea.select();
  //}

  // copy selection
  document.execCommand('copy');

  // cleanup
  //document.body.removeChild(textarea);
  }