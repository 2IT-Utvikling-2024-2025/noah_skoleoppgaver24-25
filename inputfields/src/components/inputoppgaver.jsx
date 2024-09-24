import React, { useState } from 'react';
 





function Spørreundersøkelse() {
  const [answers, setAnswers] = useState({
    Spørsmål1: '',
    Spørsmål2: '',
    Spørsmål3: '',
    Spørsmål4: '',
    Spørsmål5: '',
    Spørsmål6: '',
    Spørsmål7: '',
    Spørsmål8: '',
    Spørsmål9: '',
    Spørsmål10: '',
  });
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(answers);
  };
 
  return (
    
    <form onSubmit={handleSubmit}>
      <h2>Undersøkelse</h2>
 
      <h3>Hva er ditt navn?</h3>
      <input
        type="text"
        value={answers.question1}
        onChange={(event) => setAnswers({ ...answers, question1: event.target.value })}
      />
 
      <h3>Hvor gammel er du?</h3>
      <input
        type="number"
        value={answers.question2}
        onChange={(event) => setAnswers({ ...answers, question2: event.target.value })}
      />
 
      <h3>Hva er din favoritt farge?</h3>
      <select
        value={answers.question3}
        onChange={(event) => setAnswers({ ...answers, question3: event.target.value })}
      >
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
 
      <h3>Question 4: What is your favorite hobby?</h3>
      <textarea
        value={answers.question4}
        onChange={(event) => setAnswers({ ...answers, question4: event.target.value })}
      />
 
      <h3>Question 5: Do you like coffee?</h3>
      <input
        type="checkbox"
        checked={answers.question5 === 'yes'}
        onChange={(event) => setAnswers({ ...answers, question5: event.target.checked ? 'ja' : 'nei' })}
      />
      <label>Yes</label>
 
      <h3>Question 6: What is your favorite animal?</h3>
      <input
        type="radio"
        name="question6"
        value="dog"
        checked={answers.question6 === 'hund'}
        onChange={(event) => setAnswers({ ...answers, question6: event.target.value })}
      />
      <label>Hund</label>
      <input
        type="radio"
        name="question6"
        value="cat"
        checked={answers.question6 === 'katt'}
        onChange={(event) => setAnswers({ ...answers, question6: event.target.value })}
      />
      <label>katt</label>
 
      <h3>Question 7: What is your favorite food?</h3>
      <input
        type="text"
        value={answers.question7}
        onChange={(event) => setAnswers({ ...answers, question7: event.target.value })}
      />
 
      <h3>Question 8: How many siblings do you have?</h3>
      <input
        type="number"
        value={answers.question8}
        onChange={(event) => setAnswers({ ...answers, question8: event.target.value })}
      />
 
      <h3>Question 9: What is your favorite subject?</h3>
      <select
        value={answers.question9}
        onChange={(event) => setAnswers({ ...answers, question9: event.target.value })}
      >
        <option value="">Select a subject</option>
        <option value="math">Math</option>
        <option value="science">Science</option>
        <option value="english">English</option>
      </select>
 
      <h3>Question 10: Do you like reading?</h3>
      <input
        type="checkbox"
        checked={answers.question10 === 'yes'}
        onChange={(event) => setAnswers({ ...answers, question10: event.target.checked ? 'yes' : '' })}
      />
      <label>Yes</label>
 
      <button type="submit">Submit</button>
    </form>
  );
}
 



export default Spørreundersøkelse;