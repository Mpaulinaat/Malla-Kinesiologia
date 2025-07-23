document.querySelectorAll('.ramo').forEach(ramo => {
  const id = ramo.dataset.id;

  if (localStorage.getItem(id)) {
    ramo.classList.add('aprobado');
  }

  ramo.addEventListener('click', () => {
    if (ramo.classList.contains('bloqueado')) return;

    ramo.classList.toggle('aprobado');

    if (ramo.classList.contains('aprobado')) {
      localStorage.setItem(id, true);
    } else {
      localStorage.removeItem(id);
    }
  });
});
