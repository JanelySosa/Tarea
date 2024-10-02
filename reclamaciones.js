// Objeto para almacenar datos de reclamación
const datosReclamacion = {};

// Función para validar detalles del reclamo
function validarDetallesReclamo(detalles) {
  return detalles.length >= 10 && detalles.length <= 500;
}

// Evento para validar formulario de reclamaciones
document.getElementById('formulario-reclamaciones-2').addEventListener('submit', (e) => {
  e.preventDefault();
  const camposRequeridos = [
    'montoReclamo',
    'asunto',
    'numeroBoleta',
    'detallesReclamo',
    'pedido',
  ];
  const errores = validarCamposRequeridos(camposRequeridos);
  if (errores.length > 0) {
    alert(errores.join('\n'));
  } else {
    const correoElectronico = document.getElementById('correoElectronico').value;
    const telefono = document.getElementById('telefono').value;
    const numeroBoleta = document.getElementById('numeroBoleta').value;
    const detallesReclamo = document.getElementById('detallesReclamo').value;
    if (!validarCorreo(correoElectronico)) {
      alert('Correo electrónico inválido');
    } else if (!validarTelefono(telefono)) {
      alert('Teléfono inválido');
    } else if (!validarNumeroBoleta(numeroBoleta)) {
      alert('Número de boleta inválido');
    } else if (!validarDetallesReclamo(detallesReclamo)) {
      alert('Detalles del reclamo inválidos');
    } else {
      datosReclamacion = {
        montoReclamo: document.getElementById('montoReclamo').value,
        asunto: document.getElementById('asunto').value,
        numeroBoleta: document.getElementById('numeroBoleta').value,
        detallesReclamo: document.getElementById('detallesReclamo').value,
        pedido: document.getElementById('pedido').value,
      };
      localStorage.setItem('datosReclamacion', JSON.stringify(datosReclamacion));
      fetch('/api/reclamaciones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosReclamacion),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
  }
});