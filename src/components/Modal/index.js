import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalConfirmar({ empleado, show, accionConfirmar, accionCancelar }) {
	const handleClose = () => accionCancelar();
	const handleShow = () => accionConfirmar();

	const handleConfirm = () => {
		accionConfirmar();
		handleClose();
	};

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Confirmación</Modal.Title>
				</Modal.Header>
				<Modal.Body>¿Deseas eliminar este registro de empleado?</Modal.Body>
				<Modal.Footer>
					<Button variant="danger" onClick={handleClose}>
						Cancelar
					</Button>
					<Button variant="primary" onClick={() => handleConfirm(empleado)}>
						Confirmar
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ModalConfirmar;
