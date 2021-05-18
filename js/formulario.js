  
function formulario() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("nombre").value;
  let edad = document.getElementById("edad").value;
  let email = document.getElementById("email").value;

  edad = parseInt(edad);

  if (edad == "" || nombre == "" || apellido == "" || email == "") {
    alert(`Por favor ingrese todos los campos`);
    VaciarCampo();
    }else {
    if (edad >= 18) {
      alert(`Hola ${nombre} ${apellido} has aplicado correctamente te contactaremos en ${email}`);
      VaciarCampo();
    } else {
      if (edad <= 18) {
        alert(`Hola ${nombre} ${apellido} no cumples con la edad requerida`);
        VaciarCampo();
      }
    }
  }
}

