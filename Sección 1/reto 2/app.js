let souvernir = prompt("Ingresa el nombre de los souvernirs separados por coma")
listSouvenir = souvernir.split(",")
let listPrice = []
let listDispo = []

listSouvenir.forEach(function(i) {
    let price = parseFloat(prompt(`ingresa el valor del souvenir ${i}`))
    listPrice.push(price)
    confirmar = confirm("Está disponible?")
    listDispo.push(confirmar)     
});




