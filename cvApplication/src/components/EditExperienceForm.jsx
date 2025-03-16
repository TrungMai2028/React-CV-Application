import React, { useState } from 'react';

const EditExperienceForm = ({ data, onSave, onCancel }) => {
  // Make a copy of the incoming data so we can edit locally
  const [formData, setFormData] = useState(() => {
    // If data is already a plain object, you can just do:
    // return { ...data };
    // But if you want a deeper copy (and data might be nested), do:
    return JSON.parse(JSON.stringify(data));
  });

  // Called whenever a user edits a field (Institution, Location, etc.)
  const handleEntryChange = (entryKey, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [entryKey]: {
        ...prev[entryKey],
        [field]: value,
      },
    }));
  };

  // Delete an education entry
  const handleDelete = (entryKey) => {
    setFormData((prev) => {
      const copy = { ...prev };
      delete copy[entryKey];
      return copy;
    });
  };

  // Add a new blank education entry
  const handleAdd = () => {
    const newKey = 'edu' + Date.now(); // or use a UUID library
    setFormData((prev) => ({
      ...prev,
      [newKey]: {
        title: '',
        company: '',
        location: '',
        dateRange: '',
        bullets: '',
      },
    }));
  };

  // When the user clicks "Save", pass the updated object back up
  const handleSaveClick = () => {
    onSave(formData);
  };

  return (
    <div>
      {Object.entries(formData).map(([key, edu]) => (
        <div className="edit-education-form" key={key}>
          {/* “X” in top-right to delete this entry */}
          <button
            type="button"
            className="delete-button"
            onClick={() => handleDelete(key)}
          >
            ✕
          </button>

          <label>
            Title:
            <input
              type="text"
              value={edu.title}
              onChange={(e) =>
                handleEntryChange(key, 'title', e.target.value)
              }
            />
          </label>

          <label>
            Company:
            <input
              type="text"
              value={edu.company}
              onChange={(e) =>
                handleEntryChange(key, 'company', e.target.value)
              }
            />
          </label>

          <label>
            Location:
            <input
              type="text"
              value={edu.location}
              onChange={(e) => handleEntryChange(key, 'location', e.target.value)}
            />
          </label>

          <label>
            Date Range:
            <input
              type="text"
              value={edu.dateRange}
              onChange={(e) =>
                handleEntryChange(key, 'dateRange', e.target.value)
              }
            />
          </label>

          <label>
            Bullets:
            <input
              type="text"
              value={edu.bullets}
              onChange={(e) => handleEntryChange(key, 'bullets', e.target.value)}
            />
          </label>
        </div>
      ))}

      {/* Buttons row */}
      <div className="form-buttons">
        <button className="add-button" type="button" onClick={handleAdd}>
          + Add Education
        </button>
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

export default EditExperienceForm;
