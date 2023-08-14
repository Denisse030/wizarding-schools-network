import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useWizardingSchools } from '../context/WizardingSchoolsContext';
import { useStudents } from '../context/StudentsContext';
import UpdateWizardingSchool from '../update/UpdateWizardingSchool';
import UnenrollStudent from '../unenroll/UnenrollStudent';

function SingleWizardingSchool() {
  const { wizardingSchoolId } = useParams();
  const wizardingSchools = useWizardingSchools();
  const students = useStudents();
  const [isUpdating, setIsUpdating] = useState(false);

  const wizardingSchool = wizardingSchools.find(school => school._id === wizardingSchoolId);
  const schoolStudents = students.filter(student => student.school === wizardingSchoolId);

  return (
    <div>
      <h2>{wizardingSchool.name}</h2>
      <img src={wizardingSchool.imageUrl} alt={wizardingSchool.name} />
      <p>Location: {wizardingSchool.location}</p>
      <p>Description: {wizardingSchool.description}</p>

      <h3>Students in {wizardingSchool.name}</h3>
      <ul>
        {schoolStudents.map(student => (
          <li key={student._id}>
            {student.firstName} {student.lastName}
            <UnenrollStudent schoolId={wizardingSchool._id} studentId={student._id} />
          </li>
        ))}
      </ul>

      {isUpdating ? (
        <UpdateWizardingSchool schoolId={wizardingSchool._id} onClose={() => setIsUpdating(false)} />
      ) : (
        <button onClick={() => setIsUpdating(true)}>Updating School</button>
      )}
    </div>
  );
}

export default SingleWizardingSchool;
