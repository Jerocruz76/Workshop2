presupuestoDiario = parseFloat(prompt("Ingresa tu presupuesto diario"))
costosEstimados = parseFloat(prompt("Ingresa los costos estimados en base a tu actividades diarias"))
ahorro = parseFloat(prompt("Cuanto deseas ahorrar de tu presupuesto Diario?"))

alert("Ahora bien, si quisieras ir a un concierto y el mismo día, ir a comer después:")

costoConcierto = parseFloat(prompt("Cuánto cuesta la entrada para dicho concierto?"))
gastoConcert = presupuestoDiario - costoConcierto


costoComida = parseFloat(prompt("Cuánto cuesta un plato en promedio en el restaurante?"))
gastoComida = presupuestoDiario - costoComida

sumaGastos = gastoComida + gastoConcert
total = presupuestoDiario - sumaGastos
if (total < ahorro){
    alert("solo puedes escoger una sola actividad")
}
else{
    alert("bien pueda mi rey")
}