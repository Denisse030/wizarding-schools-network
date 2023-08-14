import React from 'react';
import { useWizardingSchools } from './WizardingSchoolsContext';
import DeleteWizardingSchool from '../delete/DeleteWizardingSchool';

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
            <DeleteWizardingSchool schoolId={school._id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllWizardingSchools;
