document.querySelectorAll('.materia input').forEach(input => {
  input.addEventListener('change', () => {
    document.querySelectorAll('.materia').forEach(materia => {
      const correlativa = materia.getAttribute('data-correlativa');
      if (correlativa !== 'ninguna') {
        const correlativaCheck = document.getElementById(correlativa);
        const actual = materia.querySelector('input');
        actual.disabled = !correlativaCheck.checked;
      }
    });
  });
});
