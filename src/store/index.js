import { configureStore } from '@reduxjs/toolkit';
import empleadoReducer from './slices/EmpleadosSlice'
const store = configureStore({
  reducer: {
    empleados: empleadoReducer,
  },
});

export default store;
