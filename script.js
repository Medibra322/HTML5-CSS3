//Fecha y el dia de la semana
const fechaDia = () => {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const clock = document.getElementById('clock');
    const formattedDate = `${daysOfWeek[dayOfWeek]}, ${day}/${month}/${year}`;
  
    clock.innerHTML = formattedDate;
  };
  
  setInterval(fechaDia);

//cambio de imágenes
  

function cambiar(){
    document.getElementById("img1").src="img/img1.jpg";
  }

  function volver(){
    document.getElementById("img1").src="img/img01.jpg";
  }

//Deshabilitar el boton hasta que se valide la aceptación de la condiciones generales de la wed

const botonEnvio = document.getElementById("btn1");
const casilla = document.getElementById("acepto");


casilla.addEventListener("change",habilitarBoton);

function habilitarBoton() {
 

  botonEnvio.disabled = true;

  var aceptado = casilla.checked;

  switch (aceptado) {
    case true:
      botonEnvio.disabled = false;
      break;
    case false:
      botonEnvio.disabled = true;
      break;
    default:
      break;
  }
}


//cambiar color de body

document.getElementById("cambiarColorBtn").addEventListener("click", function() {
    var body = document.body;
    var color = body.style.backgroundColor;
  
    if (color === "white") {
      body.style.backgroundColor = "gray";
    } else {
      body.style.backgroundColor = "white";
    }
  });
