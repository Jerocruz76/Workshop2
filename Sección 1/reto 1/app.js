const destino = prompt("A donde vas?")
let duracion = parseInt(prompt("Cuántos días te quedarás?"))
let presupuesto = parseFloat(prompt("De cuanto es tu presupuesto?"))
let gastoDiario = parseFloat (prompt("Cuanto vas a gastar diario? (contando alimentos y ocio)"))

let confirmar = confirm("Así está bien tu viaje?")
if (confirmar==false){
    alert("Ok bro, volvamos a empezar")
    let duracion = parseInt(prompt("Cuántos días te quedarás?"))
    let presupuesto = parseFloat(prompt("De cuanto es tu presupuesto?"))
    let gastoDiario = parseFloat (prompt("Cuanto vas a gastar diario? (contando alimentos y ocio)"))
    console.log(duracion)
    console.log(presupuesto)
    console.log(gastoDiario)
}

let gastoTotal = (duracion*gastoDiario)
if (gastoTotal > presupuesto){
    alert("mi rey creo q te estás excediendo, volvamos a empezar")
    let duracion = parseInt(prompt("Cuántos días te quedarás?"))
    let presupuesto = parseFloat(prompt("De cuanto es tu presupuesto?"))
    let gastoDiario = parseFloat (prompt("Cuanto vas a gastar diario? (contando alimentos y ocio)"))
    console.log(duracion)
    console.log(presupuesto)
    console.log(gastoDiario)
}
else{
    alert("Buena panita nosfui")
}



