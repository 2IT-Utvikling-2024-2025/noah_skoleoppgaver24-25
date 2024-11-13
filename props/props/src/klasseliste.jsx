import React, { useState } from 'react';

const StudentMap = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Birk', grade: '3' },
    { id: 2, name: 'Knarkus', grade: '4' },
    { id: 3, name: 'David', grade: '1' },
    { id: 4, name: 'Faze Fuzi', grade: '4' },
    { id: 5, name: 'Svein', grade: '6' },
    { id: 6, name: 'Toby', grade: '6' },
    { id: 7, name: 'Liam Payne', grade: '3' },
    { id: 8, name: 'Diddy', grade: '2' },
    { id: 9, name: 'Juan Parta', grade: '6' },
    { id: 10, name: 'Raprinha', grade: '3' },
  ]);

  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = { id: students.length + 1, name, grade };
    setStudents([...students, newStudent]);
    setName('');
    setGrade('');
  };

  const groupedElever = [];
  for (let i = 0; i < students.length; i += 2) {
    groupedElever.push(students.slice(i, i + 2));
  }

  return (
    <div className="student-map-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Grade:
          <input type="text" value={grade} onChange={(event) => setGrade(event.target.value)} />
        </label>
        <button type="submit">Add Student</button>
      </form>
      {groupedElever.map((group, index) => (
        <div key={index} className="group-container">
          <h2>Group {index + 1}</h2>
          <ul>
            {group.map((student) => (
              <li key={student.id}>
                <span>{student.name}</span> (<span className="grade">{student.grade}</span>)
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StudentMap;
