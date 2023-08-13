import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useWizardingSchools } from '../context/WizardingSchoolsContext';
import { useStudents } from '../context/StudentsContext';

function SingleWizardingSchool() {
  const { wizardingSchoolId } = useParams();
  const wizardingSchools = useWizardingSchools();
  const students = useStudents();

  const wizardingSchool = wizardingSchools.find(school => school._id === wizardingSchoolId);
  const schoolStudents = students.filter(student => student.school === wizardingSchoolId);

  return (
    <div>
      <h2>{wizardingSchool.name}</h2>
      <img src={wizardingSchool.imageUrl} alt={wizardingSchool.name} />
      <p>Location: {wizardingSchool.location}</p>
      <p>Description: {wizardingSchool.description}</p>

      <h3>Students in {wizardingSchool.name}</h3>
      {schoolStudents.length > 0 ? (
        <ul>
          {schoolStudents.map(student => (
            <li key={student._id}>
              <Link to={`/students/${student._id}`}>{student.firstName} {student.lastName}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No students are enrolled in this school.</p>
      )}
    </div>
  );
}

export default SingleWizardingSchool;
