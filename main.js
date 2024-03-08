const $ = selector => {
  const tmp = document.querySelectorAll(selector)
  if (!tmp.length) {
    return null
  }
  return tmp.length === 1 ? tmp[0] : tmp
}

function init() {
  const $menu = $('[data-layout="menu"]');
  const $inputRadio = $('input[type="radio"]');
  const $checkbox = $('input[type="checkbox"]');
  $inputRadio.forEach(input => {
    input.addEventListener('change', event => {
      const value = event.target.value;
      const name = event.target.name;
      if (name === 'density') {
        $menu.classList.remove('min', 'compact', 'normal', 'comfortable');
      }
      if (name === 'mode') {
        $menu.classList.remove('menu', 'tree', 'dropdown', 'panel', 'list', 'carousel', 'grid', 'table', 'fullscreen');
      }
      $menu.classList.add(value ? value : '');
    });
  });
  $checkbox.forEach(input => {
    input.addEventListener('change', event => {
      const className = event.target.value;
      $menu.classList.toggle(className);
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  init();
});
