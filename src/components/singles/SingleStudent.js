import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStudents } from '../context/StudentsContext';
import { useWizardingSchools } from '../context/WizardingSchoolsContext';
import UpdateStudent from '../update/UpdateStudent';

function SingleStudent() {
  const { studentId } = useParams();
  const students = useStudents();
  const wizardingSchools = useWizardingSchools();
  const [isUpdating, setIsUpdating] = useState(false);

  const student = students.find(student => student._id === studentId);
  const studentSchool = wizardingSchools.find(school => school._id === student.school);

  return (
    <div>
      <h2>{student.firstName} {student.lastName}</h2>
      <p>Email: {student.email}</p>
      <img src={student.imageUrl} alt={`${student.firstName} ${student.lastName}`} />
      <p>Magical Ability Score: {student.magicalAbilityScore}</p>

      {studentSchool ? (
        <p>Wizarding School: {studentSchool.name}</p>
      ) : (
        <p>This student is not enrolled in any wizarding school.</p>
      )}

      {isUpdating ? (
        <UpdateStudent studentId={student._id} onClose={() => setIsUpdating(false)} />
      ) : (
        <button onClick={() => setIsUpdating(true)}>Updating Student</button>
      )}
    </div>
  );
}

export default SingleStudent;
