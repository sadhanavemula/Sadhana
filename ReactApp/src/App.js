import './App.css';
import React,{useState} from 'react';
import Question from './Components/Question/Question';

let questions = [
  {
      id: "1",
      type: "Multiple Chioce Question",
      text: "Please select ",
      options: ['apple','banana','orange']
    },
    {
      id: "2",
      type: "RangeSlider",
      text: "Please select ",
      options: ['apple','banana','orange']
    },
    {
      id: "3",
      type: "RangePicker",
      text: "Please select ",
      options: ['apple','banana','orange']
    },
    {
      id: "4",
      type: "FreeText",
      text: "Please select ",
      options: ['apple','banana','orange']
    },
]



const App=()=> {

  const [displayQuestions,setDisplayQuestions] =useState(false)

  const displayQuestion = () => {
        setDisplayQuestions(!displayQuestions);
}

  return (
    <div className="App">
      <h1>UHG Assignement</h1>
      <button  onClick={displayQuestion}>Take Survey</button>
      <div>
         { displayQuestions && (questions.map((question, index) => {
              return <Question key={question.id} data={question} />
         }))}
    </div>
    </div>
  );
}

export default App;
