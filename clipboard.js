function clipboard(selectors, options, callback) {

  let defaultOptions = {
    position: 'beforebegin',
    template: '<div class="clipboard"><button class="clipboard-button" type="button">Copy</button></div>'
  };

  options = {
    ...defaultOptions,
    ...options
  };

  document.querySelectorAll(selectors).forEach(function (element) {

    let template = document.createElement('template');
    template.insertAdjacentHTML('afterbegin', options.template);
    let clipboard = template.firstChild;

    element.insertAdjacentElement(options.position, clipboard);

    clipboard.addEventListener('click', function() {
      let text = element.innerText;
      if (text.length == 0) {
        text = element.value;
      }
      let textarea = document.createElement('textarea');
      document.body.appendChild(textarea);
      textarea.value = text;
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    });

    if (typeof callback == 'function') {
      callback(clipboard, element);
    }

  });

}
