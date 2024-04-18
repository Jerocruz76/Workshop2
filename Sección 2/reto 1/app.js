energy = parseInt(prompt("Bueno mi hermano cuenteme del 1 al 100 con que tanta energía se siente"))
weather = confirm("Elije 'cancelar' para mal clima y 'ok' para buen clima")
trabajo = prompt("Que tal ha estado tu trabajo? coloca 1 si está pesado o 2 si está suave")

if (energy >= 1 && energy <= 33 && weather == false && trabajo == 1){
    alert("papi a mimir y a recuperar energías")
} 

if (energy >= 1 && energy <= 33 && weather == true && trabajo == 1){
    alert("toma el sol un rato y descansa")
}

if (energy >= 1 && energy <= 33 && weather == false && trabajo == 2){
    alert("intenta hacer cosas productivas como manualidades en casa")
}

if (energy >= 1 && energy <= 33 && weather == true && trabajo == 2){
    alert("intenta trabajar más en la pereza")
}

if (energy > 33 && energy <= 66 && weather == false && trabajo == 1){
    alert("aún tienes energías! intenta hacer un poco de ejercicio en casa")
}

if (energy > 33 && energy <= 66 && weather == true && trabajo == 1){
    alert("aún tienes energías! sal a caminar un rato para despejarte")
}

if (energy > 33 && energy <= 66 && weather == false && trabajo == 2){
    alert("intenta adelantar alguna cosa para el trabajo mañana")
}

if (energy > 33 && energy <= 66 && weather == true && trabajo == 2){
    alert("te recomiendo salir, hacer una caminata y hacer cosas productivas al llegar a casa")
}

if (energy > 66 && energy <= 99 && weather == false && trabajo == 1){
    alert("mis respetos! sigue así, tienes el resto del día para gastar tu energía centrandote en tus proyectos futuros")
}

if (energy > 66 && energy <= 99 && weather == true && trabajo == 1){
    alert("sal y haz ejercicio! también puedes hacer running o alguna actividad física")
}

if (energy > 66 && energy <= 99 && weather == false && trabajo == 2){
    alert("procura ser más productivo, y meterte más en los proyectos y trabajos de tu empresa! ademas de un poco de ejercicio en casa")
}

if (energy > 66 && energy <= 99 && weather == true && trabajo == 2){
    alert("aprovecha la oportunidad para vivir la vida como se debe!")
}

/* . */



