import React, { useState } from 'react';
import axios from 'axios';
import { useStudents } from '../context/StudentsContext';

function UpdateStudent({ studentId, onClose }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const students = useStudents();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/students/${studentId}`, { firstName, lastName, email });
      const updatedStudent = { ...students.find(student => student._id === studentId) };
      updatedStudent.firstName = firstName;
      updatedStudent.lastName = lastName;
      updatedStudent.email = email;
      const index = students.findIndex(student => student._id === studentId);
      students[index] = updatedStudent;
      onClose();
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
    <div>
      <h2>Updating Student</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} required />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <button type="submit">Updating Student</button>
      </form>
    </div>
  );
}

export default UpdateStudent;
