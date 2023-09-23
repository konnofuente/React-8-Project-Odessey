import { useState } from "react";
import "./index.css";

export default function CardGame() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [clickedId , setClickedId] = useState(0)

  return <div className="flashcards">

    {

    questions.map((e)=>   
    <div 
    key = {e.id}
    onClick ={()=>setClickedId(e.id)}
    className ={e.id === clickedId ? 'selected' : " "}
    >
      {
        e.id === clickedId ?
        <p> {e.answer}</p> : <p> {e.question}</p>

      }
    </div>
    )
    }

  </div>;
}


const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  }
];

