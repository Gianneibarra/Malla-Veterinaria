document.querySelectorAll('.materia').forEach(materia => {
  materia.addEventListener('click', () => {
    if (materia.classList.contains('desbloqueada') || materia.dataset.correlativas === "") {
      materia.classList.toggle('tachada');
      desbloquearMaterias();
    }
  });
});

function desbloquearMaterias() {
  document.querySelectorAll('.materia').forEach(materia => {
    if (materia.dataset.correlativas) {
      const previas = materia.dataset.correlativas.split(',');
      const completadas = previas.every(id => 
        document.querySelector(.materia[data-id="${id}"])?.classList.contains('tachada')
      );
      if (completadas) {
        materia.classList.add('desbloqueada');
      }
    }
  });
}

// Desbloquear las materias sin correlativas al inicio
desbloquearMaterias();
