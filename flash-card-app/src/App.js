import './App.css';
import {useState} from 'react'


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  
  const [step, setStep] = useState(1);
  const [Isopen, setIsOpen] = useState(true);

  function handlePrevios(){
    // setStep(step-1);
    setStep(step-1);
  }
  
function handleNext(){
  step >= messages.length ? setStep(step - (messages.length-1)) : setStep(step+1);

}

function closeBox(){
  setIsOpen(!Isopen);
  setStep(0);
}



  return (
    <>

      <button className="close" onClick={closeBox   }> &times;</button>   

      {

        Isopen? 
    <div className="steps">

      <div className="numbers">
        <div className={ `${ step >=1 ? "active" : " "}`}> 1</div>
        <div className={ `${ step >=2 ? "active" : " "}`}>2</div>
        <div className={ `${ step >=3 ? "active" : " "}`}>3</div>
    </div>

        <p className="message">  for step {step} :{messages[step - 1]}</p>

        <div className="buttons">
          <button 
          onClick={ step === 0 ? null : handlePrevios} 
            style={{ backgroundColor : "#7950f2" , color :"#fff" }}>
            Previose
          </button>

          <button 
          
          onClick={handleNext}           
          style={{ backgroundColor : "#7950f2" , color :"#fff" }}>
            Next
          </button>

        </div>
      
      </div>
      : <div>
         
      </div>

      } 
    </>
  );
}

export default App;
