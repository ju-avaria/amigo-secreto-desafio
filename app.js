// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
	// Obtiene el valor del input
	let amigo = document.getElementById("amigo").value;
	// si el input esta vacio
	if (amigo == ""){
		alert('Por favor Ingresa un nombre.');

	} else{
		// Se agrega el nombre a la lista
		amigos.push(amigo);
		console.log(amigo);
		console.log(amigos);
		// Vacia el input
		vaciarInput();

		return;

	}
}
// Esta funcion deja en blanco el input
function vaciarInput() {
	let valorInput = document.getElementById('amigo');
	valorInput.value = "";
	return vaciarInput;
	
}