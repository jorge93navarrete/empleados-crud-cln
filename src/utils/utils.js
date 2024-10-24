export function validarEmpleado(usuario) {
	// Definir las propiedades que queremos validar
	const propiedades = ["nombre", "apellido", "correo", "cedula", "inss"];
	return propiedades.every((p) => !!usuario[p] === true);
}

export function empleadoEsUnico(empleados) {
	console.log("Lista", empleados);

	const inssVistos = new Set();
	const correosVistos = new Set();
	const cedulasVistas = new Set();

	for (const empleado of empleados) {
		const { inss, correo, cedula } = empleado;

		if (inssVistos.has(inss)) {
			return `El número INSS ${inss} está duplicado.`;
		}

		inssVistos.add(inss);
		if (correosVistos.has(correo)) {
			return `El correo ${correo} está duplicado.`;
		}
		correosVistos.add(correo);

		if (cedulasVistas.has(cedula)) {
			return `La cédula ${cedula} está duplicada.`;
		}
		cedulasVistas.add(cedula);
	}

	return UNIQUE;
}

export function FechaNacimientoCedula(cedula) {
	const fechaNacimientoStr = cedula.split("-")[1];

	const dia = fechaNacimientoStr.substring(0, 2);
	const mes = fechaNacimientoStr.substring(2, 4);
	const anio = fechaNacimientoStr.substring(4, 6);

	return `${dia}-${mes}-${anio}`;
}

export const UNIQUE = "unique";
