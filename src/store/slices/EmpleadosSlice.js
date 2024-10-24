import { createSlice } from "@reduxjs/toolkit";
import { idGenerador } from "../../utils/utils";

const initialState = {
	lista: [
		{
			id: idGenerador.next().value,
			nombre: "John",
			apellido: "Doe",
			correo: "john@example.com",
			cedula: "001-092786-0001A",
			inss: "123456789",
		},
		{
			id: idGenerador.next().value,
			nombre: "Jane",
			apellido: "Smith",
			correo: "jane@example.com",
			cedula: "002-271190-0002B",
			inss: "987654321",
		},
	],
};

// Crear el slice para los usuarios
const empleadoSlice = createSlice({
	name: "empleados",
	initialState,
	reducers: {
		addEmpleado: (state, action) => {
			state.lista.push({ ...action.payload, id: idGenerador.next().value });
		},
		removeEmpleado: (state, action) => {
			state.lista = state.lista.filter((user) => user.id !== action.payload);
		},
		updateEmpleado: (state, action) => {
			const index = state.lista.findIndex(
				(user) => user.id === action.payload.id
			);
			if (index !== -1) {
				state.lista[index] = action.payload;
			}
		},
	},
});

// Exportar las acciones
export const empleadoActions = empleadoSlice.actions;

// Exportar el reducer para integrarlo en el store
export default empleadoSlice.reducer;
