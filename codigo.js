let nombre;
let etiquetaJugador;
let botonNombre;
let errorNombre;
let puntosOrdenador;
let puntosPersona;
let piedra;
let papel;
let tijera;
let lagarto;
let spok;
let resultado;
let ordenadorOpcion;
//let ordenadorOpcion[]=("piedra","papel","tijera","lagarto","spok");

/*
function quienGana(jugador)
	{
		ordenadorOpcion="piedra";
		resultado.textContent = "Entro aqui";
		if (jugador == ordenadorOpcion)
			{
				resultado.textContent = "Empate";
			}
		else
			{
				resultado.textContent = "No Empate";
			}
	}
*/

function comenzarPartida()
	{
		etiquetaJugador.textContent = "Tu: "+nombre;
		puntosPersona.textContent.value = puntosPersona.textContent.value + 1;
	}

function verificarNombre()
	{	
		if(nombre.value.length == 0)
			{
			errorNombre.textContent ="El nombre no puede estar vacio";
			etiquetaJugador.textContent = "Jugador";
			persona.style.display="none";
			ordenador.style.display="none";
			}
		else{
			errorNombre.textContent ="Todo bien";
			persona.style.display="block";
			persona.style.display="block";
			etiquetaJugador.textContent = "Tu: "+nombre.value;

			}
	}

function inicializarVariables ()
  {
	nombre 			= document.getElementById('nombre');
    etiquetaJugador = document.getElementById("etiquetaJugador");
	botonNombre 	= document.getElementById("botonNombre");
	errorNombre 	= document.getElementById("errorNombre");
	errorArticulo 	= document.getElementById("errorArticulo");
	persona 		= document.getElementById("persona");
	ordenador 		= document.getElementById("ordenador");
	puntosOrdenador = document.getElementById("puntos-ordenador");
	puntosPersona 	= document.getElementById("puntos-persona");
	piedra    	  	= document.getElementById("piedra");
	papel     		= document.getElementById("papel");
	tijera    		= document.getElementById("tijera");
	lagarto   		= document.getElementById("lagarto");
	spok	  		= document.getElementById("spok");
	resultado 		= document.getElementById("resultado");
  }

function setListeners()
  {
//	nombre.addEventListener("input",verificarNombre);
	botonNombre.addEventListener('click',verificarNombre);
//	piedra.addEventListener('click',quienGana("piedra"));
//	papel.addEventListener('click',quienGana("papel"));
//	tijera.addEventListener('click',quienGana("tijera"));
//	lagarto.addEventListener('click',quienGana("lagarto"));
//	spok.addEventListener('click',quienGana("spok"));
  }


window.addEventListener("load",() => {
		inicializarVariables();
		setListeners();
	});
