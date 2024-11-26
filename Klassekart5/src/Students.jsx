import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Students() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/students');
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Students</h1>
      {students.map((student) => (
        <p key={student.id}>
          <Link to={`/profile/${student.id}`}>{student.name}</Link>
        </p>
      ))}
    </div>
  );
}

export default Students;