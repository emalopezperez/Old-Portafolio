export default function validarContact(valores) {

  let errores = {};

  // Validar el nombre del usuario
  if (!valores.nombre) {
    errores.nombre = "el nombre es obligatorio";
  } else if (valores.nombre.length < 5) {
    errores.nombre = 'el nombre debe ser de al menos 5 caracteres'
  }

  // validar el email
  if (!valores.email) {
    errores.email = "El email es Obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
    errores.email = "email no válido"
  }

  // Validar el asunto del usuario
  if (!valores.asunto) {
    errores.mensaje = "el asunto es obligatorio";
  } else if (valores.asunto.length <= 5) {
    errores.asunto = 'el asunto debe ser de al menos 5 caracteres'
  }

  if (!valores.numero) {
    errores.numero = "El número es obligatorio";
  } else if (!/^\d{9}$/.test(valores.numero)) {
    errores.numero = "El número de teléfono no es válido.";
  }

  // Validar el mensaje del usuario
  if (!valores.mensaje) {
    errores.mensaje = "el mensaje es obligatorio";
  } else if (valores.mensaje.length <= 15) {
    errores.mensaje = 'el mensaje debe ser de al menos 15 caracteres'
  }

  return errores
}