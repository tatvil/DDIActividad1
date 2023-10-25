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
let opcionJugador;		//es la opcion elegida para compararla
let opcionOrdenador;	//es la opcion elegida para compararla
let eleccionjugador; 	// es la etiqueta del html del texto
let eleccionordenador; 	// es la etiqueta del html del texto
let puntos;

function quienGana(opcionJugador) 
  {
    // Generar una eleccion aleatoria para el ordenador, desde un array de opciones
    const opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
    const randomIndex = Math.floor(Math.random() * opciones.length);
    opcionOrdenador = opciones[randomIndex];

    eleccionjugador.textContent = opcionJugador;
    eleccionordenador.textContent = opcionOrdenador;

    // Implement game logic to determine the winner
    if (opcionJugador === opcionOrdenador)
	 {
        resultado.textContent = "Empate";
     } 
	else if (
        (opcionJugador === "piedra" && (opcionOrdenador === "tijera" || opcionOrdenador === "lagarto")) ||
        (opcionJugador === "papel" && (opcionOrdenador === "piedra" || opcionOrdenador === "spock")) ||
        (opcionJugador === "tijera" && (opcionOrdenador === "papel" || opcionOrdenador === "lagarto")) ||
        (opcionJugador === "lagarto" && (opcionOrdenador === "papel" || opcionOrdenador === "spock")) ||
        (opcionJugador === "spock" && (opcionOrdenador === "piedra" || opcionOrdenador === "tijera"))
     ) 
	 {
        resultado.textContent = "Ganaste";
		puntos = parseInt(puntosPersona.textContent, 10);
		puntos += 1;
		puntosPersona.textContent = puntos.toString();	
     } 
	else 
	 {
        resultado.textContent = "Perdiste";
		puntos = parseInt(puntosOrdenador.textContent, 10);
		puntos += 1;
		puntosOrdenador.textContent = puntos.toString();
	
     }
  }


function comenzarPartida()
	{
		etiquetaJugador.textContent = "Puntuación "+nombre.value+": ";
		puntos = 0;
		puntosOrdenador.textContent = puntos.toString();
		puntosPersona.textContent = puntos.toString();
	}

function ocultarTodo()
	{
		persona.style.visibility="hidden";
		ordenador.style.visibility="hidden";
	}

function visualizarTodo()
	{
		persona.style.visibility="visible";
		ordenador.style.visibility="visible";
	}

function verificarNombre()
	{	
		if(nombre.value.length == 0)
			{
			errorNombre.textContent ="El nombre no puede estar vacio";
			ocultarTodo();
			}
		else{
//			errorNombre.textContent ="Todo bien";
			comenzarPartida();
			visualizarTodo();
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
	eleccionjugador = document.getElementById("eleccionjugador");
	eleccionordenador = document.getElementById("eleccionordenador");
	resultado 		= document.getElementById("resultado");
  }

function setListeners()
  {
	botonNombre.addEventListener('click',verificarNombre);
	piedra.addEventListener('click', () => quienGana("piedra"));
	papel.addEventListener('click', () => quienGana("papel"));
	tijera.addEventListener('click', () => quienGana("tijera"));
	lagarto.addEventListener('click', () => quienGana("lagarto"));
	spock.addEventListener('click', () => quienGana("spock"));
  }


window.addEventListener("load",() => {
		ocultarTodo();
		inicializarVariables();
		setListeners();
	});
