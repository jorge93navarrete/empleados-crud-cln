import { useState } from "react";
import EmpleadosTabla from "../../components/EmpleadosTabla";
import { Link } from "react-router-dom";
import ModalConfirmar from "../../components/Modal";
import { useDispatch } from "react-redux";
import { removerEmpleado } from "../../store/effects/EmpleadoEffect";

const HomePage = () => {
	const [employee, setEmployee] = useState(null);
	const dispatch = useDispatch();

	const eliminarEmpleado = () => {
      if (employee) {
		   dispatch(removerEmpleado(employee.id));
         setEmployee(null);
      }
	};
	return (
		<>
			<div>
				<h3>Probar api externa</h3>
				<Link className="btn btn-success" to={'/json'}>
					ver Json
				</Link>
			</div>
			<h1>Empleados CRUD - Demo</h1>
			<div>
				<div className="d-flex justify-content-end mb-1">
					<Link to={"/nuevo"} className="me-2 btn btn-primary">
						Nuevo
					</Link>
				</div>
				<div>
					<EmpleadosTabla onDeleteEmpleado={setEmployee} />
				</div>
			</div>
			<ModalConfirmar
				show={!!employee}
				accionConfirmar={eliminarEmpleado}
				accionCancelar={() => setEmployee(null)}
			/>
		</>
	);
};

export default HomePage;
