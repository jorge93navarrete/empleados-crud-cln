import { useDispatch, useSelector } from "react-redux";
import EmpleadoForm from "../../components/EmpleadoForm";
import { empleadoEsUnico, UNIQUE, validarEmpleado } from "../../utils/utils";
import { crearEmpleado } from "../../store/effects/EmpleadoEffect";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CrearPage = () => {
	const dispatch = useDispatch();
   const navigate = useNavigate();
	const empleados = useSelector((state) => state.empleados.lista);

	const onSave = (data) => {      
		if (validarEmpleado(data) && empleadoEsUnico(empleados) === UNIQUE) {
			dispatch(crearEmpleado(data));
         navigate('/')
		}
	};
	return (
		<>
			<EmpleadoForm onSubmit={onSave} />
		</>
	);
};

export default CrearPage;
