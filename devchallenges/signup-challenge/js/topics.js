const verificarSeleccionado = (arrButtons, btnClicked) => {
  for (const button of arrButtons) {
    if (button.classList.contains('seleccionado') && button != btnClicked) {
      button.classList.remove('seleccionado');
      btnClicked.classList.add('seleccionado');

      return true;
    } else if (
      button == btnClicked &&
      button.classList.contains('seleccionado')
    ) {
      button.classList.remove('seleccionado');
      return true;
    }
  }
  return false;
};

const buttons = Array.from(document.querySelectorAll('.btn-topics'));

buttons.forEach((boton) => {
  boton.addEventListener('click', () => {
    if (!verificarSeleccionado(buttons, boton)) {
      boton.classList.add('seleccionado');
    }
  });
});
