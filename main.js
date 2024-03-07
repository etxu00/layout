function init() {
  console.info("init()")
  const $menu = document.querySelector('[data-layout="menu"]');
  const $inputRadio = document.querySelectorAll('input[type="radio"]');
  $inputRadio.forEach((input) => {
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
}

document.addEventListener('DOMContentLoaded', function () {
  init();
});
