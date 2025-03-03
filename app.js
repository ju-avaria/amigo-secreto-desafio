// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
	// Obtiene el valor del input
	let amigo = document.getElementById("amigo").value;
	// si el input esta vacio
	if (!amigo){
		alert('Por favor Ingresa un nombre.');

	} 
	// Si el input tiene algun valor
	else{
		// Se agrega el nombre a la lista
		amigos.push(amigo);
		// console.log(amigo);
		// console.log(amigos);

		// Vacia el input
		vaciarInput();

		// Agregar los elementos a la lista HTML
		listarAmigosHTML(amigos);
		

		return;

	}
}


// Esta funcion deja en blanco el input
function vaciarInput() {
	let valorInput = document.getElementById('amigo');
	valorInput.value = "";
	return vaciarInput;
	
}
// Esta funcion muestra los nombres de los amigos en el HTML
function listarAmigosHTML(amigos) {
	let listaAmigos = document.getElementById('listaAmigos');
	listaAmigos.innerHTML = "";

	for (i = 0; i < amigos.length ; i++){
		let nombreAmigo = document.createElement("li");
		nombreAmigo.textContent = amigos[i];
		listaAmigos.appendChild(nombreAmigo);

	}
	return;
}

// Se sortea un amigo al azar
function sortearAmigo() {
	if(amigos.length === 0){
		alert("No Hay Amigos Para Sortear");
	} 
	else{
		let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
		let resultadoSorteo = document.getElementById('resultado');
		resultadoSorteo.innerHTML = `El amigo sorteado es : ${amigoSorteado}`;
	}

}





