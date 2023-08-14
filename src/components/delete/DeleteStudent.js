import React from 'react';
import axios from 'axios';
import { useStudents } from '../context/StudentsContext';

function DeleteStudent({ studentId }) {
  const students = useStudents();

  const handleDelete = async () => {
    try {
      await axios.delete(`/students/${studentId}`);
      const updatedStudents = students.filter(student => student._id !== studentId);
      students.splice(0);
      students.push(...updatedStudents);
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <button onClick={handleDelete}>X</button>
  );
}

export default DeleteStudent;
