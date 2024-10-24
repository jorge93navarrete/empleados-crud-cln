export function validarEmpleado(usuario) {
	const propiedades = ["nombre", "apellido", "correo", "cedula", "inss"];
	return propiedades.every((p) => !!usuario[p] === true);
}

export function empleadoEsUnico(empleados, campos) {   
	return !empleados.some(
		(e) =>
			e.cedula == campos.cedula ||
			e.inss == campos.inss ||
			e.correo == campos.correo
	);
}

export function FechaNacimientoCedula(cedula) {
	const fechaNacimientoStr = cedula.split("-")[1];

	const dia = fechaNacimientoStr.substring(0, 2);
	const mes = fechaNacimientoStr.substring(2, 4);
	const anio = fechaNacimientoStr.substring(4, 6);

	return `${dia}-${mes}-${anio}`;
}

export function validarCedula(cedula) {
	const regex = /^\d{3}-\d{6}-\d{4}[A-Z]$/;
	return regex.test(cedula);
}


 function* contadorInfinito() {
   let i = 1;
   while (true) {
       yield i++;
   }
}

export const idGenerador = contadorInfinito();

