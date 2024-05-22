/*
1ro: hacer que usuario coloque su nombre y apellido, DNI.
3ro: Coloque su modelo de vehiculo y años.
2ro: que coloque el dia a reservar el turno (Mes-dia "1-30").
4to: si el turno esta disponible que devuelva: se agendo el turno con el dia, el nombre y el auto.
    si el turno esta ocupado que devuelva: que esta ocupado el turno.

Variables: cantidad de turnos dispobibles
Ciclo: que se vaya restando la cantidad de turnos que alla (ejemplo 30 turnos al mes) hasta llegar a 0 turnos.
Condicionales: si el turno que selecciono el usuario ya esta reservado que no agende el turno.
*/

let turnos= 30;
let turnoLimite= 0;


    while(turnos>=turnoLimite){
        let nombreCompleto = prompt ("ingrese su nombre completo");
    while(nombreCompleto === "" || nombreCompleto == null){
        nombreCompleto = prompt("ingrese su nombre completo");
    }
    let tipoDeVehiculo = prompt ("ingrese el modelo de su vehiculo y el año");
    while(tipoDeVehiculo === "" || tipoDeVehiculo == null){
        tipoDeVehiculo = prompt("ingrese el modelo de su vehiculo y el año");
    }
    alert ("Su turno se reservo con exito");
    turnos--
    if (turnoLimite === turnos){
        break // se rompe el bucle cuando turnosLimites sae estrictamente igual a turnos
    }
}
function turnosdisponible (turnoLimite, turnos){
    if (turnoLimite === turnos) {
    alert("Ya no quedan turnos disponibles")
}
}






