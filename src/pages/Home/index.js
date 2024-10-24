import { useState } from "react";
import EmpleadosTabla from "../../components/EmpleadosTabla";
import { Link } from "react-router-dom";
import ModalConfirmar from "../../components/Modal";
import { useDispatch } from "react-redux";
import { removerEmpleado } from "../../store/effects/EmpleadoEffect";

const HomePage = () => {
	const [show, setShow] = useState(false);
	const [toDelete, setToDelete] = useState(null);
	const dispatch = useDispatch();

	const eliminarEmpleado = () => {
		dispatch(removerEmpleado(toDelete));
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
					<EmpleadosTabla setShow={setShow} setToDelete={setToDelete} />
				</div>
			</div>
			<ModalConfirmar
				show={show}
				accionConfirmar={eliminarEmpleado}
				accionCancelar={() => setShow(false)}
			/>
		</>
	);
};

export default HomePage;
