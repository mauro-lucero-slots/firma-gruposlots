// Obtener los parámetros de la URL

const params = new URLSearchParams(window.location.search);

// Capturar valores

const imagenFirma = params.get("imagenFirma");
const nombre = params.get("nombre");
const puesto = params.get("puesto");
const deptTrabajo = params.get("deptTrabajo");
const direccionDeTrabajo = params.get("direccionDeTrabajo");
const codigoPostal = params.get("codigoPostal");
const localidad = params.get("localidad");
const provincia = params.get("provincia");
const email = params.get("email");
const telefono = params.get("telefono");
const sitioWeb = params.get("sitioWeb");


// Imprimir parámetros en la página

document.getElementById("imagenFirma").src = `img/firma(${imagenFirma}).jpg`;
document.getElementById("nombre").innerHTML = `${nombre}`;
document.getElementById("puesto").innerHTML = `${puesto}`;
document.getElementById("deptTrabajo").innerHTML = `${deptTrabajo}`;
document.getElementById("direccionDeTrabajo").innerHTML = `${direccionDeTrabajo}`;
document.getElementById("codigoPostal").innerHTML = `${codigoPostal}`;
document.getElementById("localidad").innerHTML = `${localidad}`;
document.getElementById("provincia").innerHTML = `${provincia}`;

document.getElementById("email").innerHTML = `
    <a href="mailto:${email}"
        title="${email}" target="_blank"
        rel="noopener noreferrer">
        ${email}
    </a>
`;

document.getElementById("telefono").innerHTML = `
    Tel:
    <a href="tel:${telefono}" title="${telefono}" target="_blank"
        rel="noopener noreferrer">
        ${telefono}
    </a>
`;

document.getElementById("sitioWeb").innerHTML = `
    <a href="${sitioWeb}" title="${sitioWeb}" target="_blank"
        rel="noopener noreferrer">
        ${sitioWeb}
    </a>
`;