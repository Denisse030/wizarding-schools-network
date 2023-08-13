import React from 'react';
import { useWizardingSchools } from './WizardingSchoolsContext';

function AllWizardingSchools() {
  const wizardingSchools = useWizardingSchools();

  return (
    <div>
      <h2>All Wizarding Schools</h2>
      <ul>
        {wizardingSchools.map(school => (
          <li key={school._id}>
            <img src={school.imageUrl} alt={school.name} />
            {school.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllWizardingSchools;
