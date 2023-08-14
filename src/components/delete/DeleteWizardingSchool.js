import React from 'react';
import axios from 'axios';
import { useWizardingSchools } from '../context/WizardingSchoolsContext';

function DeleteWizardingSchool({ schoolId }) {
  const wizardingSchools = useWizardingSchools();

  const handleDelete = async () => {
    try {
      await axios.delete(`/wizarding-schools/${schoolId}`);
      const updatedSchools = wizardingSchools.filter(school => school._id !== schoolId);
      wizardingSchools.splice(0);
      wizardingSchools.push(...updatedSchools);
    } catch (error) {
      console.error('Error deleting wizarding school:', error);
    }
  };

  return (
    <button onClick={handleDelete}>X</button>
  );
}

export default DeleteWizardingSchool;
