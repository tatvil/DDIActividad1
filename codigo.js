let nombre;
let etiquetaJugador;
let botonNombre;
let errorNombre;
let puntosOrdenador;
let puntosPersona;

function comenzarPartida()
	{
		etiquetaJugador.textContent = "Tu: "+nombre;
		puntosPersona.textContent.value = puntosPersona.textContent.value + 1;
	}

function verificarNombre()
	{
		nombre = document.getElementById('nombre');
		
		if(nombre.value.length == 0)
			{
			errorNombre.textContent ="El nombre no puede estar vacio";
			}
		else{
			errorNombre.textContent ="Todo bien";
			}
	}

function inicializarVariables ()
  {
	nombre = document.getElementById('nombre');
    etiquetaJugador = document.getElementById("etiquetaJugador");
	botonNombre = document.getElementById("botonNombre");
	errorNombre = document.getElementById("errorNombre");
	errorArticulo = document.getElementById("errorArticulo");
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
