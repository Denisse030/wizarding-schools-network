import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStudents } from '../context/StudentsContext';
import { useWizardingSchools } from '../context/WizardingSchoolsContext';

function SingleStudent() {
  const { studentId } = useParams();
  const students = useStudents();
  const wizardingSchools = useWizardingSchools();

  const student = students.find(student => student._id === studentId);
  const studentSchool = wizardingSchools.find(school => school._id === student.school);

  return (
    <div>
      <h2>{student.firstName} {student.lastName}</h2>
      <p>Email: {student.email}</p>
      <img src={student.imageUrl} alt={`${student.firstName} ${student.lastName}`} />
      <p>Magical Ability Score: {student.magicalAbilityScore}</p>

      {studentSchool ? (
        <p>Wizarding School: <Link to={`/wizarding-schools/${studentSchool._id}`}>{studentSchool.name}</Link></p>
      ) : (
        <p>This student isn't enrolled in any wizarding school.</p>
      )}
    </div>
  );
}

export default SingleStudent;
