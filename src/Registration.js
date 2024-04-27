import React, { useState } from 'react';

function Registration({ onRegister }) {
  const [formData, setFormData] = useState({ /* user or service provider details */ });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const type = /* determine user or service provider based on form data */;
    onRegister(formData, type);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      {/* Registration form fields */}
      <button type="submit">Register</button>
    </form>
  );
}

export default Registration;
