function setValue(val) {
  const style = val === 'normal' ? 'normal' : `"${val}"`
  document.body.style.fontFeatureSettings = style;
}

chrome.runtime.onMessage.addListener((request) => {
  if (!('type' in request)) return true;

  const CHROME_APP_ID = '__font-feature_settings__';

  if (request.type == "font-feature-setting") {
    const $select = document.getElementById(CHROME_APP_ID);
    setValue(request.val);

    if ($select == null) {
      const $s = document.createElement('select');
      const f = document.createDocumentFragment();

      $s.id = CHROME_APP_ID;
      $s.style.position = 'fixed';
      $s.style.top = '1rem';
      $s.style.right = '1rem';
      $s.style.padding = '.5rem';
      $s.style.fontFeatureSettings = "normal"
      $s.addEventListener('change', (e) => {
        setValue(e.target.value);
      });

      request.settings.forEach(setting => {
        const $child = document.createElement('option');
        $child.value = setting.val;
        $child.textContent = setting.text;
        $child.selected = setting.val === request.val;
        f.appendChild($child);
      });

      $s.appendChild(f);
      document.body.append($s);
    } else {
      $select.options[request.settings.findIndex(el => request.val === el.val)];
    }
  }

  return true;
});
