import { useDispatch, useSelector } from "react-redux";
import EmpleadoForm from "../../components/EmpleadoForm";
import {
	empleadoEsUnico,
	validarCedula,
	validarEmpleado,
} from "../../utils/utils";
import { crearEmpleado } from "../../store/effects/EmpleadoEffect";
import { useNavigate } from "react-router-dom";

const CrearPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const empleados = useSelector((state) => state.empleados.lista);

	const onSave = (data) => {
		const { cedula, inss, correo } = data;

		if (!validarEmpleado(data)) {
			alert("Debes llenar todos los campos");
			return 0;
		}
		if (!validarCedula(data.cedula)) {
			alert("La cedula debe tener el formato 000-000000-0000X");

			return 0;
		}
		if (empleadoEsUnico(empleados, { cedula, inss, correo })) {
			dispatch(crearEmpleado(data));
			navigate("/");
		} else {
			alert("Cedula, correo y numero inss deben ser unicos");
		}
	};
	return <EmpleadoForm onSubmit={onSave} />;
};

export default CrearPage;
