import React from 'react';
import axios from 'axios';
import { useWizardingSchools } from '../context/WizardingSchoolsContext';
import { useStudents } from '../context/StudentsContext';

function UnenrollStudent({ schoolId, studentId }) {
  const wizardingSchools = useWizardingSchools();
  const students = useStudents();

  const handleUnenroll = async () => {
    try {
      await axios.put(`/wizarding-schools/${schoolId}/unenroll/${studentId}`);
      const updatedSchool = { ...wizardingSchools.find(school => school._id === schoolId) };
      updatedSchool.students = updatedSchool.students.filter(id => id !== studentId);
      const updatedStudent = { ...students.find(student => student._id === studentId) };
      updatedStudent.school = null;
      const schoolIndex = wizardingSchools.findIndex(school => school._id === schoolId);
      wizardingSchools[schoolIndex] = updatedSchool;
      const studentIndex = students.findIndex(student => student._id === studentId);
      students[studentIndex] = updatedStudent;
    } catch (error) {
      console.error('Error unenrolling student:', error);
    }
  };

  return (
    <button onClick={handleUnenroll}>Unenroll</button>
  );
}

export default UnenrollStudent;
