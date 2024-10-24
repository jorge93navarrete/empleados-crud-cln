import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/Home";
import { routes } from "./routes";
import Layout from "./components/Layout";

function App() {
	return (
		<Routes>
			{routes.map((route, i) => (
				<Route
					key={i}
					path={route.path}
					element={<Layout>{route.component}</Layout>}
				/>
			))}
		</Routes>
	);
}

export default App;
