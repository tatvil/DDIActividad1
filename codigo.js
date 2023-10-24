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
let spock;
let resultado;
let imagenCentral;
let ordenadorOpcion;
let eleccionjugador;
let eleccionordenador;
//let ordenadorOpcion[]=("piedra","papel","tijera","lagarto","spok");


function quienGana(jugador)
	{
		ordenadorOpcion="piedra";
		eleccionjugador.textContent = jugador;
		eleccionordenador.textContent = ordenadorOpcion;
		if (jugador == ordenadorOpcion)
			{
				resultado.textContent = "Empate";
			}
		else
			{
				resultado.textContent = "No Empate";
			}
	}


function comenzarPartida()
	{
		etiquetaJugador.textContent = "Tu: "+nombre;
		puntosPersona.textContent.value = puntosPersona.textContent.value + 1;
	}

function ocultarTodo()
	{
		persona.style.visibility="hidden";
		ordenador.style.visibility="hidden";
	//	document.getElementById("imagencentro").style.visibility = "hidden";
	//    imagenCentral.style.visibility="hidden";
	}

function visualizarTodo()
	{
		persona.style.visibility="visible";
		ordenador.style.visibility="visible";
//			imagenCentral.style.visibility="visible";
	}

function verificarNombre()
	{	
		if(nombre.value.length == 0)
			{
			errorNombre.textContent ="El nombre no puede estar vacio";
//			etiquetaJugador.textContent = "Jugador";
			ocultarTodo();
			}
		else{
			errorNombre.textContent ="Todo bien";
			visualizarTodo();
			etiquetaJugador.textContent = "Tu: "+nombre.value;

			}
	}

function inicializarVariables ()
  {
	nombre 			= document.getElementById('nombre');
    etiquetaJugador = document.getElementById("etiquetaJugador");
	botonNombre 	= document.getElementById("botonNombre");
	errorNombre 	= document.getElementById("errorNombre");
	persona 		= document.getElementById("persona");
	ordenador 		= document.getElementById("ordenador");
	imagenCentral	= document.getElementById("imagencentro");
	puntosOrdenador = document.getElementById("puntos-ordenador");
	puntosPersona 	= document.getElementById("puntos-persona");
	piedra    	  	= document.getElementById("piedra");
	papel     		= document.getElementById("papel");
	tijera    		= document.getElementById("tijera");
	lagarto   		= document.getElementById("lagarto");
	spock	  		= document.getElementById("spock");
	eleccionJugador = document.getElementById("eleccionjugador");
	eleccionOrdenador = document.getElementById("eleccionordenador");
	resultado 		= document.getElementById("resultado");
  }

function setListeners()
  {
	nombre.addEventListener("onKeoy",verificarNombre);
	botonNombre.addEventListener('click',verificarNombre);
	piedra.addEventListener('click',quienGana("piedra"));
	papel.addEventListener('click',quienGana("papel"));
	tijera.addEventListener('click',quienGana("tijera"));
	lagarto.addEventListener('click',quienGana("lagarto"));
	spok.addEventListener('click',quienGana("spok"));
  }


window.addEventListener("load",() => {
		ocultarTodo();
		inicializarVariables();
		setListeners();
	});
