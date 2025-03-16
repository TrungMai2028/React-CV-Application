// src/components/EditTech.jsx
import React, { useState } from 'react';

const EditTech = ({ data, onSave, onCancel }) => {
  // Make a local copy so we can edit without immediately updating parent state
  const [formData, setFormData] = useState({ ...data });

  // Handle changes for each skill category as comma-separated text
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Convert comma-separated string into an array
    const newArray = value.split(',').map((item) => item.trim());
    setFormData((prev) => ({
      ...prev,
      [name]: newArray,
    }));
  };

  // When user clicks "Save", send updated data to the parent
  const handleSaveClick = () => {
    onSave(formData);
  };

  return (
    <div className="edit-header-form">
      {/* Each skill category is in a label + input */}
      <label>
        Languages:
        <input
          type="text"
          name="languages"
          value={formData.languages.join(', ')}
          onChange={handleChange}
        />
      </label>

      <label>
        Frameworks:
        <input
          type="text"
          name="frameworks"
          value={formData.frameworks.join(', ')}
          onChange={handleChange}
        />
      </label>

      <label>
        Development Tools:
        <input
          type="text"
          name="tools"
          value={formData.tools.join(', ')}
          onChange={handleChange}
        />
      </label>

      <label>
        Libraries:
        <input
          type="text"
          name="libraries"
          value={formData.libraries.join(', ')}
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

export default EditTech;
