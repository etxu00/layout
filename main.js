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
      if (name === 'style') {
        $menu.classList.remove('invert', 'rounded', 'circle');
      }
      $menu.classList.add(value ? value : '');
      showOptions(value);
    });
  });
  $checkbox.forEach(input => {
    input.addEventListener('change', event => {
      const className = event.target.value;
      $menu.classList.toggle(className);
    });
  });
}

function showOptions(value) {
  const $labels = $(`label[class*="_"]`);
  if ($labels.length) {
    $labels.forEach(label => label.hidden = !label.classList.contains(`_${value}`));
  }
}

document.addEventListener('DOMContentLoaded', function () {
  init();
});