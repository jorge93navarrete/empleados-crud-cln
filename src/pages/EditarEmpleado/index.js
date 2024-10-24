import EmpleadoForm from "../../components/EmpleadoForm";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { empleadoEsUnico, validarEmpleado } from "../../utils/utils";

const EditarPage = () => {
	const { id } = useParams();
	const empleado = useSelector((state) =>
		state.empleados.lista.find((e) => e.id == id)
	);
	const empleados = useSelector((state) => state.empleados.lista);

	const editarEmpleado = (data) => {
		if (validarEmpleado(data) && empleadoEsUnico(empleados) === UNIQUE) {
			dispatch(editarEmpleado(data));
			navigate("/");
		}
	};
	return (
		<>
			<EmpleadoForm EmpleadoData={empleado} onSubmit={editarEmpleado} />
		</>
	);
};

export default EditarPage;
