import React, { createContext, useContext, useState, useEffect } from 'react';
const StudentsContext = createContext();

export function StudentsProvider({ children }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('/students');
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <StudentsContext.Provider value={students}>
      {children}
    </StudentsContext.Provider>
  );
}

export function useStudents() {
  return useContext(StudentsContext);
}
