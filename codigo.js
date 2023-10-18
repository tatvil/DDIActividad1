let nombre;
let etiquetaJugador;
let botonNombre;


window.addEventListener("load",() => {
	nombre = document.getElementById('nombre');
    etiquetaJugador = document.getElementById("persona");
	botonNombre = document.getElementById("botonNombre");

    botonNombre.addEventListener("onclick",()=>{
//		botonNombre.style.color = "yellow";
		etiquetaJugador.innerHTML = "<h3>Pepe</h3>";
	});

    

	
/*	primerArticulo = parrafos[0];

	//ACCESO A ELEMENTOS POR LA CLASE
	articulos = document.getElementsByClassName('articulo');

	//ACCESO A ELEMENTOS POR SU IDENTIFICADOR (ID es único)
	barraLateral = document.getElementById('lateral');


	//MODIFICAR ELEMENTOS DEL DOM
	let cabecera = document.getElementById("titulo");
	//cabecera.textContent = "Modificando el DOM";
	cabecera.innerHTML = "<h1>Modificando el DOM</h1>";

	barraLateral.classList.remove("sidebar");
	barraLateral.classList.add("sidebar2");

	barraLateral.style.backgroundColor = "#B54135";
	barraLateral.style.color = "#FFF";

	primerArticulo.addEventListener("mouseover",()=>{
		primerArticulo.style.color = "yellow";
	});
	primerArticulo.addEventListener("mouseout",()=>{
		primerArticulo.style.color = "black";
	});
*/
});