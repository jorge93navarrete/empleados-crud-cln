import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FechaNacimientoCedula } from "../../utils/utils";

const EmpleadosTabla = ({ onDeleteEmpleado }) => {
	const data = useSelector((state) => state.empleados.lista);

	return (
		<table className="table table-striped table-bordered">
			<thead>
				<tr>
					<th>Nombres</th>
					<th>Apellidos</th>
					<th>Correo</th>
					<th>Cédula</th>
					<th>Número INSS</th>
					<th>Fecha de Nacimiento</th>
					<th>Acciones</th>
				</tr>
			</thead>
			<tbody>
				{data.map((empleado) => (
					<tr key={empleado.id}>
						<td>{empleado.nombre}</td>
						<td>{empleado.apellido}</td>
						<td>{empleado.correo}</td>
						<td>{empleado.cedula}</td>
						<td>{empleado.inss}</td>
						<td>{FechaNacimientoCedula(empleado.cedula)}</td>
						<td>
							<Link
								to={`/${empleado.id}/editar`}
								className="me-2 btn btn-success"
							>
								Editar
							</Link>
							<Button
								variant="danger"
								className="me-2"
								onClick={() => {
									onDeleteEmpleado(empleado);
								}}
							>
								Borrar
							</Button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default EmpleadosTabla;
