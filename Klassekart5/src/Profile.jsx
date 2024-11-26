import React from 'react';
import './Profile.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Profile() {
  const [student, setStudent] = useState({});
  const { id } = useParams();

  const fetchStudent = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/students/${id}`);
      const data = await response.json();
      setStudent(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  return (
    <div className='container'>
      <h1>Profile</h1>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
    </div>
  );
}