import React from 'react';
import { useStudents } from './StudentsContext';
import DeleteStudent from '../delete/DeleteStudent';

function AllStudents() {
  const students = useStudents();

  return (
    <div>
      <h2>All Students</h2>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            {student.firstName} {student.lastName}
            <DeleteStudent studentId={student._id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllStudents;


