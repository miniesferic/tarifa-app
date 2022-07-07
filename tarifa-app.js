// variables globales
const listaTarifa = document.getElementById('myTable')
const referenciaArtDOM = document.getElementById('referencia-art')
const botonBuscar = document.getElementById('buscar')
// función responsable de fetch
const obtenerDatos = async () => {
	try {
		const response = await fetch('./tarifa-data.json')
		return await response.json()
	} catch (error) {
		console.log(error)
	}
}
// función que genera y muestra los elementos dinámicos de la tabla
const mostrarTabla = (arr) => {
	listaTarifa.innerHTML = ''
	arr.forEach((tarifa) => {
		listaTarifa.innerHTML += `
		<tr>
		<td>${tarifa.referencia}</td>
		<td>${tarifa.nombre}</td>
		<td>${tarifa.color}</td>
		<td>${tarifa.tarifa}</td>
		<td><img class="imagenCroquis" src='${tarifa.croquis}'></td>
		</tr>
		`
	})
}
// función que se encarga del evento click
const buscarElem = (e) => {
	e.preventDefault()
	const referenciaArt = referenciaArtDOM.value.toLowerCase()
	filtraReferencia(referenciaArt)
}
// función que filtra datos a mostrar en la tabla
const filtraReferencia = async (referencia) => {
	const elemsTabla = await obtenerDatos()
	const elemsFiltrados = elemsTabla.filter((elem) => {
		return elem.referencia.toLowerCase().includes(referencia)
	})
	mostrarTabla(elemsFiltrados)
	validacionNum(elemsFiltrados)
}
// función de apoyo de validación encargada de errores
const estilosError = (mensaje) => {
	listaTarifa.innerHTML = mensaje
	listaTarifa.style.color = 'tomato'
	referenciaArtDOM.style.border = '1px solid tomato'
}
// función de validación de datos introducidos por el usuario
const validacionNum = (arr) => {
	if (!referenciaArtDOM.checkValidity()) {
		estilosError('Este campo no se puede dejar en blanco')
	} else if (arr.length === 0) {
		estilosError('No ha encontrado coincidencias')
	} else {
		listaTarifa.style.color = 'initial'
		referenciaArtDOM.style.border = '1px solid #ddd'
	}
}
//evento click
botonBuscar.addEventListener('click', buscarElem)

// VERSIÓN EN DESUSO DE LA APP
// let myArray = []

// $.ajax({
// 	method: 'GET',
// 	url: 'stock-data.json',
// 	success: (response) => {
// 		myArray = response.data
// 	}
// })
// buildTable = (data) => {
// 	let table = document.getElementById('myTable')
// 	arrResultados = []
// 	table.innerHTML = ''
// 	for (let i = 0; i < data.length; i++) {
// 		let row = `<tr>
// 								<td>${data[i].referencia}</td>
// 								<td>${data[i].nombre}</td>
//                                 <td>${data[i].pendiente}</td>
// 						  </tr>`
// 		table.innerHTML += row
// 	}
// 	const elemsStock = [...document.querySelectorAll('.stock')]
// 	for (let j = 0; j < elemsStock.length; j++) {
// 		if (elemsStock[j].innerText == 'Disponible') {
// 			elemsStock[j].style.backgroundColor = 'lightgreen'
// 		} else {
// 			elemsStock[j].style.backgroundColor = 'tomato'
// 		}
// 	}
// }
// const botonBuscar = document.getElementById('buscar')
// let arrResultados = []
// let control = 0
// const buscarElem = (e) => {
// 	e.preventDefault()
// 	const referenciaArt = document
// 		.getElementById('referencia-art')
// 		.value.toLowerCase()
// 	const numArt = document.getElementById('num-stock').value
// 	filtraNombre(referenciaArt)
// 	disponibilidadStock(numArt)
// 	buildTable(arrResultados)
// 	validacionNum()
// 	$.ajax({
// 		method: 'GET',
// 		url: 'stock-data.json',
// 		success: (response) => {
// 			myArray = response.data
// 		}
// 	})
// }
// const filtraNombre = (referencia) => {
// 	for (let i = 0; i < myArray.length; i++) {
// 		if (myArray[i].referencia.toLowerCase().includes(referencia)) {
// 			arrResultados.push(myArray[i])
// 			control++
// 		}
// 	}
// }
// const disponibilidadStock = (num) => {
// 	for (let i = 0; i < arrResultados.length; i++) {
// 		if (arrResultados[i].stock >= num) {
// 			arrResultados[i].stock = 'Disponible'
// 		} else {
// 			arrResultados[i].stock = 'No disponible'
// 		}
// 	}
// }
// const validacionNum = () => {
// 	const inputNum = document.getElementById('num-stock')
// 	const inputNom = document.getElementById('referencia-art')
// 	if (!inputNum.checkValidity()) {
// 		inputNum.style.border = '1px solid tomato'
// 		document.getElementById('myTable').innerHTML =
// 			'Introduce una cantidad entre 1 y 999'
// 	} else {
// 		inputNum.style.border = '1px solid #ddd'
// 	}
// 	if (control == 0) {
// 		document.getElementById('myTable').innerHTML =
// 			'No ha encontrado coincidencias'
// 		inputNom.style.border = '1px solid tomato'
// 	} else {
// 		control = 0
// 		document.getElementById('myTable').style.color = 'initial'
// 		inputNom.style.border = '1px solid #ddd'
// 	}
// }
// buscar.addEventListener('click', buscarElem)
