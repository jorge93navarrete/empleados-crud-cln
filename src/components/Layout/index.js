import { Col, Container, Row } from "react-bootstrap";

const Layout = (props) => {
	return (
		<Container fluid={true} className="App-header">
			<Row>
				<Col sm={12}>{props.children}</Col>
			</Row>
		</Container>
	);
};

export default Layout;
