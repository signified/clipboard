function clipboard(selectors, options = {}, callback) {

  const defaultOptions = {
    position: 'beforebegin',
    template: '<div class="clipboard"><button class="clipboard-button" type="button">Copy</button></div>'
  };

  const config = { ...defaultOptions, ...options };

  document.querySelectorAll(selectors).forEach((element) => {

    const container = document.createElement('div');
    container.insertAdjacentHTML('afterbegin', config.template);

    const template = container.firstChild;

    element.insertAdjacentElement(config.position, template);

    template.addEventListener('click', async () => {

      let text = '';

      if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
        text = element.value;
      } else {
        text = element.innerText.trim();
      }

      if (!text) return;

      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {
        console.error('Copy to clipboard failed:', error);
      }

    });

    if (typeof callback === 'function') {
      callback(template, element);
    }

  });

}
