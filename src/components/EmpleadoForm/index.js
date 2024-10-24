import React, { useState, useEffect } from 'react';

function EmpleadoForm({ EmpleadoData = {}, onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    cedula: '',
    inss: '',
  });

  // Actualizar el formulario si se pasan datos a través de props
  useEffect(() => {
    if (EmpleadoData) {
      setFormData({
        nombre: EmpleadoData.nombre || 'jorge',
        apellido: EmpleadoData.apellido || 'navarrete',
        correo: EmpleadoData.correo || 'jorge@gmail.com',
        cedula: EmpleadoData.cedula || '435678768798',
        inss: EmpleadoData.inss || '54657898',
      });
    }
  }, []);

  // Manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="container mt-5">
      <h2>Formulario de Empleado</h2>
      <form onSubmit={handleSubmit}>
        {/* Campo Nombres */}
        <div className="form-group mb-3">
          <label>Nombres</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo Apellidos */}
        <div className="form-group mb-3">
          <label>Apellidos</label>
          <input
            type="text"
            name="apellido"
            className="form-control"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo Correo */}
        <div className="form-group mb-3">
          <label>Correo Electrónico</label>
          <input
            type="email"
            name="correo"
            className="form-control"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo Cédula */}
        <div className="form-group mb-3">
          <label>Cédula</label>
          <input
            type="text"
            name="cedula"
            className="form-control"
            value={formData.cedula}
            onChange={handleChange}
            placeholder="000-000000-0000X"
            required
          />
        </div>

        {/* Campo Número INSS */}
        <div className="form-group mb-3">
          <label>Número INSS</label>
          <input
            type="text"
            name="inss"
            className="form-control"
            value={formData.inss}
            onChange={handleChange}
            required
          />
        </div>

        {/* Botón de Enviar */}
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  );
}

export default EmpleadoForm;
