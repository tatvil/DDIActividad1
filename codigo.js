let nombre;
let etiquetaJugador;
let botonNombre;
let errorNombre;
let puntosOrdenador;
let puntosPersona;

function comenzarPartida()
	{
		etiquetaJugador.textContent = "Tu: "+nombre;
		puntosPersona.textContent = puntosPersona + 1;
	}

function verificarNombre()
	{
		nombre = document.getElementById('nombre').value;
		
		if (nombre == "" )
			{
				alert ("El nombre no puede estar vacio");
			}
		else
			{
				comenzarPartida();
			}
	}

function inicializarVariables ()
  {
	nombre = document.getElementById('nombre');
    etiquetaJugador = document.getElementById("persona");
	botonNombre = document.getElementById("botonNombre");
	errorNombre = document.getElementById("errorNombre");
	puntosOrdenador = document.getElementById("puntos-ordenador");
	puntosPersona = document.getElementById("puntos-persona");
  }

function setListeners()
  {
	botonNombre.addEventListener('click',verificarNombre);
  }


window.addEventListener("load",() => {
		inicializarVariables();
		setListeners();
	});
