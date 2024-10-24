import CrearPage from "../pages/CrearEmpleado";
import HomePage from "../pages/Home";
import EditarPage from "../pages/EditarEmpleado";
import GeoDatePage from "../pages/GeoData";


export const routes = [
   { path: "/", component: <HomePage /> },
   { path: "/nuevo", component: <CrearPage /> },
   { path: "/:id/editar", component: <EditarPage /> },
   { path: "/json", component: <GeoDatePage /> },
 ];