import { createSlice } from "@reduxjs/toolkit";

// Estado inicial para el slice de usuarios
const initialState = {
	lista: [
		{
			id: 1,
			nombre: "John",
			apellido: "Doe",
			correo: "john@example.com",
			cedula: "001-092786-0001A",
			inss: "123456789",
		},
		{
			id: 2,
			nombre: "Jane",
			apellido: "Smith",
			correo: "jane@example.com",
			cedula: "002-271190-0002B",
			inss: "987654321",
		},
	],
	loading: false,
	error: null,
};

// Crear el slice para los usuarios
const empleadoSlice = createSlice({
	name: "empleados",
	initialState,
	reducers: {
		addEmpleado: (state, action) => {
			state.lista.push({ id: state.lista.length + 1, ...action.payload });
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
		// Acción para manejar la carga (opcional)
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		// Acción para manejar errores (opcional)
		setError: (state, action) => {
			state.error = action.payload;
		},
	},
});

// Exportar las acciones
export const empleadoActions = empleadoSlice.actions;

// Exportar el reducer para integrarlo en el store
export default empleadoSlice.reducer;
