/*
1ro: hacer que usuario coloque su nombre y apellido, DNI.
3ro: Coloque su modelo de vehiculo y años.
2ro: que coloque el dia a reservar el turno (Mes-dia "1-30").
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

//variable 
let turnos= 1
let turnoLimite= 0;

let nombreCompleto = "";
let tipoDeVehiculo = "";
let servicioARealizar = "";
let fecha = "";
let auto = "";
let servicio = "";
let dia = ""; 
let turnoProximo = "";


//alert con los datos para sacar el turno/ 
function botonTurno(){
    while(turnos>=turnoLimite){
        nombreCompleto = prompt ("ingrese su nombre completo");
        while(nombreCompleto === "" || nombreCompleto == null){
            nombreCompleto = prompt("ingrese su nombre completo");
        }
        tipoDeVehiculo = prompt ("ingrese el modelo de su vehiculo y el año");
        while(tipoDeVehiculo === "" || tipoDeVehiculo == null){
            tipoDeVehiculo = prompt("ingrese el modelo de su vehiculo y el año");
        }
        servicioARealizar = prompt("ingrese el servico a realizar");
        while (servicioARealizar === "" || servicioARealizar == null){
            servicioARealizar = prompt("ingrese el servico a realizar");
        }
        fecha = prompt("Ingrese la fecha del Turno");
        while(fecha === "" || fecha == null){
            fecha = prompt("ingrese la fecha del Turno ")
        }
        alert ("Su turno se reservo con exito");
        turnos--
        if (turnoLimite === turnos){
        break // se rompe el bucle cuando turnosLimites sae estrictamente igual a turnos
        }
    }
    console.log ("Nombre completo:" + nombreCompleto, "Tipo de vehiculo:" + tipoDeVehiculo, "Servicio a Realizar:" + servicioARealizar, "Fecha del turno:" + fecha );
    const turn =[];
    /alert No quedan turnos/
    function turnosdisponible (turnoLimite, turnos){
        if (turnoLimite === turnos) {
            alert("Ya no quedan turnos disponibles")
        }
    }
    
}

/*codigo del bt */
document.getElementById("startButton").addEventListener("click", botonTurno);



/*function turnoProximo = new turnoProximos (nombreCompleto, tipoDeVehiculo, servicioARealizar, fecha);
    turn.push(new turnoProximos);
    console.log(turn);
    console.log(turnoProximo);
    */ 
/*
    function turnoProximos (auto, servicio, dia){
        this.auto = auto.toUppercase();
        this.servicio = servicio.toUppercase();
        this.dia = parseInt (dia);
    }*/


