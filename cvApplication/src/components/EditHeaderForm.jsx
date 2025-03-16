import React, { useState } from 'react';

const EditHeaderForm = ({ data, onSave, onCancel }) => {
  // Copy the incoming data so we can edit locally
  const [formData, setFormData] = useState({ ...data });

  // Handle changes to any of the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // When "Save" is clicked, pass the updated object up to the parent
  const handleSaveClick = () => {
    onSave(formData);
  };

  return (
    <div className="edit-header-form">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </label>

      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label>
        LinkedIn:
        <input
          type="url"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
        />
      </label>

      <label>
        GitHub:
        <input
          type="url"
          name="github"
          value={formData.github}
          onChange={handleChange}
        />
      </label>

      <div className="form-buttons">
        <button className="save-button" type="button" onClick={handleSaveClick}>
          Save
        </button>
        <button className="cancel-button" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditHeaderForm;
