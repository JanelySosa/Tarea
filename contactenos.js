// Objeto para almacenar datos del formulario de contacto
const datosContacto = {};

// Evento para validar formulario de contacto
document.getElementById('formulario-tercero').addEventListener('submit', (e) => {
  e.preventDefault();
  const camposRequeridos = [
    'campo1',
    'campo2',
    'campo3',
    // Agrega más campos según sea necesario
  ];
  const errores = validarCamposRequeridos(camposRequeridos);
  if (errores.length > 0) {
    alert(errores.join('\n'));
  } else {
    datosContacto = {
      campo1: document.getElementById('campo1').value,
      campo2: document.getElementById('campo2').value,
      campo3: document.getElementById('campo3').value,
      // Agrega más campos según sea necesario
    };
    fetch('/api/contactenos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datosContacto),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }
});