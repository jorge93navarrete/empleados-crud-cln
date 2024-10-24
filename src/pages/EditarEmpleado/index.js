import EmpleadoForm from "../../components/EmpleadoForm";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { empleadoEsUnico, UNIQUE, validarEmpleado } from "../../utils/utils";
import { useEffect, useMemo, useState } from "react";
import { editarEmpleado } from "../../store/effects/EmpleadoEffect";

const EditarPage = () => {
	const { id } = useParams();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [empleado, setEmpleado] = useState(null)
	
	const empleados = useSelector((state) => state.empleados.lista);

   useEffect(() => {
      const empleado = empleados.find((e) => e.id == id)      
      if (empleado) {
         setEmpleado(empleado)
      }
   }, [id]);

	const handleEdit = (data) => {      
		if (validarEmpleado(data) && empleadoEsUnico(empleados.filter((e)=>e.id != data.id)) === UNIQUE) {
         console.log(data);
         
			dispatch(editarEmpleado(data));

			navigate("/");
		}
	};
   if (!empleado) {
      return <h3>Cargando...</h3>
   }
	return (
		<>
			<EmpleadoForm EmpleadoData={empleado} onSubmit={handleEdit} />
		</>
	);
};

export default EditarPage;
