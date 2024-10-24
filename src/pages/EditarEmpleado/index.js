import EmpleadoForm from "../../components/EmpleadoForm";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	empleadoEsUnico,
	validarCedula,
	validarEmpleado,
} from "../../utils/utils";
import { useEffect, useState } from "react";
import { editarEmpleado } from "../../store/effects/EmpleadoEffect";

const EditarPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [empleado, setEmpleado] = useState(null);

	const empleados = useSelector((state) => state.empleados.lista);

	useEffect(() => {
		const empleado = empleados.find((e) => e.id == id);
		if (empleado) {
			setEmpleado(empleado);
		}
	}, [id]);

	const handleEdit = (data) => {
		const { cedula, inss, correo } = data;
		if (!validarEmpleado(data)) {
			alert("Debes llenar todos los campos");
			return 0;
		}
		if (!validarCedula(data.cedula)) {
			alert("La cedula debe tener el formato 000-000000-0000X");
			return 0;
		}

		if (
			empleadoEsUnico(
				empleados.filter((e) => e.id != data.id),
				{ cedula, inss, correo }
			)
		) {
			dispatch(editarEmpleado(data));
			navigate("/");
		}
	};
	if (!empleado) {
		return <h3>Cargando...</h3>;
	}
	return <EmpleadoForm EmpleadoData={empleado} onSubmit={handleEdit} />;
};

export default EditarPage;
