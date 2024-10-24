import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const GeoDatePage = () => {
	const url = useParams();

	const [data, setData] = useState();
	console.log(url);

	useEffect(() => {
		fetch(
			"https://datos.gob.es/apidata/nti/territory/Province?_sort=label&_pageSize=10&_page=0"
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Error en la respuesta del servidor");
				}
				return response.json(); // Convertimos la respuesta a JSON
			})
			.then((data) => {
				const { _about, autonomia, label, pais, sameAs, type } =
					data.result.items.find((i) => i.label === "Albacete");
				const dataObject = JSON.stringify({
					_about,
					autonomia,
					label,
					pais,
					sameAs,
					type,
				})
					.split(",")
					.join(",\n");
				setData(dataObject);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [url]);

	return (
		<>
			<div className="container-fluid w-75" style={{ wordBreak: "break-word" }}>
				{data}
			</div>
		</>
	);
};

export default GeoDatePage;
