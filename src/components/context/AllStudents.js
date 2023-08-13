import React from 'react';
import { useStudents } from './StudentsContext';

function AllStudents() {
  const students = useStudents();

  return (
    <div>
      <h2>All Students</h2>
      <ul>
        {students.map(student => (
          <li key={student._id}>{student.firstName} {student.lastName}</li>
        ))}
      </ul>
    </div>
  );
}

export default AllStudents;


