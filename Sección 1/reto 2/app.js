let listSouvenirs = {
    nombre:nombreS,
    disponibility:disponibilidad,
    price:precio}
console.log(listSouvenirs)



confirmar = confirm("Deseas agregar un souvenir?")

while (confirmar = true) {
    nombreS = prompt("Ingresa el nombre del souvenir")
    disponibilidad = confirm("Está disponible?") || false
    precio = prompt(parseFloat("Cuanto cuesta?"))

    if (typeof nombre === 'string' && typeof disponibilidad === 'boolean' && !isNaN(precio)) {
        listSouvenirs[nombre] = {nombreS}
        listSouvenirs[disponibility] = {disponibilidad}
        listSouvenirs[price] = {precio}
        alert("Souvenir guardado")
        console.table(listSouvenirs)
    }

    else { alert("Ingresa un valor correcto") } break
    
}

alert("Ésta es tu lista de souvenirs" + JSON.stringify(listSouvenirs))

