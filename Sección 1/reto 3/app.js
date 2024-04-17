presupuestoInicial = parseFloat(prompt("Bueno bro decime cuanto es tu presupuesto"))
gastos = parseFloat(prompt("Cuanto te vas a gastar teniendo en cuenta alojamiento, transporte y comida?"))

let resta = presupuestoInicial - gastos 
alert(`bueno manin, te quedan en total ${resta}`)


umbral = parseFloat(prompt("mi rey copie el porcentaje del q no quiere pasar del billete sobrante, ya sea por emergencia o lo que sea"))
ciertoUmbral = resta*umbral/100
alert(`te quedan para poder gastar la gran cantidad de ${ciertoUmbral}`)

objShop = parseFloat(prompt("Ahora decime el precio de algo que te querás comprar"))
if (objShop < ciertoUmbral){
    alert("bien bro comprátelo")
}
else {
    alert("no se va a poder mi ciela, compra algo más barato")
}


