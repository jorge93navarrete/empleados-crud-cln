import { empleadoActions } from "../slices/EmpleadosSlice";

export const crearEmpleado = (data) => (dispatch) => {
      dispatch(empleadoActions.addEmpleado(data))
};


export const editarEmpleado = (data) => (dispatch) => {
   dispatch(empleadoActions.updateEmpleado(data))
};

export const removerEmpleado = (id) => (dispatch) => {
   dispatch(empleadoActions.removeEmpleado(id))
};
