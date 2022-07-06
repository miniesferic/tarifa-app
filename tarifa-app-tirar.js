// const tarifas = [
// 	{
// 		referencia: '0102A',
// 		nombre: 'SKOLL',
// 		tarifa: 0,
// 		croquis: 'SI'
// 	},
// 	{
// 		referencia: '0101A',
// 		nombre: 'KOLL',
// 		tarifa: 0,
// 		croquis: 'SI'
// 	}
// ]

const listaTarifa = document.getElementById('myTable')

let arrTarifa = []

fetch('./tarifa-data.json')
	.then((response) => response.json())
	.then((data) => data.forEach((dato) => arrTarifa.push(dato)))

console.log(arrTarifa)
const mostrarTabla = () => {
	arrTarifa.forEach((tarifa) => {
		listaTarifa.innerHTML += `
		<tr>
		<td>${tarifa.referencia}</td>
		</tr>
		`
		console.log(tarifa.referencia)
	})
}
mostrarTabla()
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
