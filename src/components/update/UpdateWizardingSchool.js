import React, { useState } from 'react';
import axios from 'axios';
import { useWizardingSchools } from '../context/WizardingSchoolsContext';

function UpdateWizardingSchool({ schoolId, onClose }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const wizardingSchools = useWizardingSchools();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/wizarding-schools/${schoolId}`, { name, location });
      const updatedSchool = { ...wizardingSchools.find(school => school._id === schoolId) };
      updatedSchool.name = name;
      updatedSchool.location = location;
      const index = wizardingSchools.findIndex(school => school._id === schoolId);
      wizardingSchools[index] = updatedSchool;
      onClose();
    } catch (error) {
      console.error('Error updating wizarding school:', error);
    }
  };

  return (
    <div>
      <h2>Updating Wizarding School</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label>
          Location:
          <input type="text" value={location} onChange={e => setLocation(e.target.value)} required />
        </label>
        <button type="submit">Updating School</button>
      </form>
    </div>
  );
}

export default UpdateWizardingSchool;
