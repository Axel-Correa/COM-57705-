//variables
let miFormulario = document.getElementById("formu");
const mainFormulario = document.getElementById("mainFormulario");
const divFormu = document.createElement("div");
const h4Formu = document.createElement("h4");
const boton = document.getElementById("botonEnviar")

miFormulario.appendChild(divFormu);

mainFormulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombreForm").value;
    const modelo = document.getElementById("autoForm").value;
    const servicioFomr = document.getElementById("serviForm").value;
    const fechaFormr = document.getElementById("fechaForm").value;
    // Almacenar en localStorage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('modelo', modelo);
    localStorage.setItem('servicio', servicioFomr);
    localStorage.setItem('fecha', fechaFormr);
    setTimeout(()=>{
        h4Formu.innerText = 'Turno reservado el día' ${fechaFormr} 'de este mes  por:' ${nombre}'El servicio a realizar para el vehículo'  ${modelo} 'es:' ${servicioFomr};
    } , 2500)
    divFormu.appendChild(h4Formu);
});

boton.addEventListener ('click',() =>{
    Swal.fire({
        title: "Excelente!",
        Text: "Sus datos sean envia correctamente!",
        icon: "success",
    });
}) 

fetch ("file:///C:/Users/Usuario/Downloads/COM-57705--main/turnos.html")
    .then((response) => response.json())
    .then((data) => {
        data.forEach(element => {
        const li = document.createElement('li');
        li.innerHTML =
                            <><h3>${element.nombre}</h3><h4>${element.modelo}</h4><h5>${element.servicioFomr}</h5><h6>${element.fechaFormr}</h6></>
                        
                            
            lista.appendChild(li);
        });
})
