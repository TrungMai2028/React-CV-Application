import React, { useState } from 'react';

const EditProject = ({ data, onSave, onCancel }) => {
  // Create a deep copy of the incoming data for local editing.
  const [formData, setFormData] = useState(() => JSON.parse(JSON.stringify(data)));

  // Update a project-level field (e.g. title).
  const handleEntryChange = (entryKey, field, value) => {
    setFormData(prev => ({
      ...prev,
      [entryKey]: {
        ...prev[entryKey],
        [field]: value,
      },
    }));
  };

  // Update a specific field for a link in the links array.
  const handleLinkChange = (entryKey, index, field, value) => {
    setFormData(prev => {
      const project = prev[entryKey];
      const updatedLinks = [...project.links];
      updatedLinks[index] = { ...updatedLinks[index], [field]: value };
      return {
        ...prev,
        [entryKey]: {
          ...project,
          links: updatedLinks,
        },
      };
    });
  };

  // Add a new blank link to the project's links array.
  const handleAddLink = (entryKey) => {
    setFormData(prev => {
      const project = prev[entryKey];
      const updatedLinks = [...project.links, { label: '', url: '' }];
      return {
        ...prev,
        [entryKey]: {
          ...project,
          links: updatedLinks,
        },
      };
    });
  };

  // Remove a link from the project's links array by index.
  const handleRemoveLink = (entryKey, index) => {
    setFormData(prev => {
      const project = prev[entryKey];
      const updatedLinks = project.links.filter((_, i) => i !== index);
      return {
        ...prev,
        [entryKey]: {
          ...project,
          links: updatedLinks,
        },
      };
    });
  };

  // Optionally, handle bullets as a comma-separated list.
  const handleBulletsChange = (entryKey, value) => {
    const bullets = value.split(',').map(s => s.trim());
    setFormData(prev => ({
      ...prev,
      [entryKey]: {
        ...prev[entryKey],
        bullets: bullets,
      },
    }));
  };

  // Delete an entire project entry.
  const handleDelete = (entryKey) => {
    setFormData(prev => {
      const copy = { ...prev };
      delete copy[entryKey];
      return copy;
    });
  };

  // Add a new blank project entry.
  const handleAddProject = () => {
    const newKey = 'proj' + Date.now();
    setFormData(prev => ({
      ...prev,
      [newKey]: {
        title: '',
        links: [],
        bullets: [],
      },
    }));
  };

  // When Save is clicked, pass the updated data back up.
  const handleSaveClick = () => {
    onSave(formData);
  };

  return (
    <div>
      {Object.entries(formData).map(([key, project]) => (
        <div className="edit-education-form" key={key}>
          {/* "X" button to delete the entire project */}
          <button type="button" className="delete-button" onClick={() => handleDelete(key)}>
            ✕
          </button>

          <label>
            Title:
            <input
              type="text"
              value={project.title}
              onChange={(e) => handleEntryChange(key, 'title', e.target.value)}
            />
          </label>

          <div>
            <label>Links:</label>
            <div className="links-container">
              {project.links.map((link, index) => (
                <div key={index} className="link-entry">
                  <input
                    type="text"
                    placeholder="Label"
                    value={link.label}
                    onChange={(e) => handleLinkChange(key, index, 'label', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="URL"
                    value={link.url}
                    onChange={(e) => handleLinkChange(key, index, 'url', e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>

          <label>
            Bullets:
            <input
              type="text"
              value={project.bullets.join(', ')}
              onChange={(e) => handleBulletsChange(key, e.target.value)}
            />
          </label>
        </div>
      ))}

      {/* Buttons row */}
      <div className="form-buttons">
        <button className="add-button" type="button" onClick={handleAddProject}>
          + Add Project
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

export default EditProject;
