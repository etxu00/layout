function init() {
  console.info("init()")
  const $menu = document.querySelector('[data-layout="menu"]');
  const $inputRadio = document.querySelectorAll('input[type="radio"]');
  $inputRadio.forEach((input) => {
    input.addEventListener('change', event => {
      const value = event.target.value;
      $menu.classList.remove('min', 'compact', 'normal', 'comfortable');
      $menu.classList.add(value ? value : '');
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  init();
});
