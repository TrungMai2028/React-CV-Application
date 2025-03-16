import { useState } from 'react';

const EditEducationForm = ({ data, onSave, onCancel }) => {
  // local state to track form inputs
  const [formData, setFormData] = useState(data);

  // update state whenever an input is changed
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveClick = () => {
    // pass the updated data back up to the parent
    onSave(formData);
  };

  return (
    <>
        <div className="edit-education-form">
            <label>
                Institution:
                <input
                type="text"
                name="institution"
                value={formData.institution}
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
                Degree:
                <input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                />
            </label>

            <label>
                Date Range:
                <input
                type="text"
                name="dateRange"
                value={formData.dateRange}
                onChange={handleChange}
                />
            </label>

            <label>
                CGPA:
                <input
                type="text"
                name="cgpa"
                value={formData.cgpa}
                onChange={handleChange}
                />
            </label>

            
        </div>

        <div>
            <button>Add Education</button>
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    </>
    
  );
};

export default EditEducationForm;
