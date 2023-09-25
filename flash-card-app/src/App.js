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

  function handlePrevious(){
    // setStep(step-1);
    if (!(step <= 0)) {
      setStep((s)=> s- 1);
    };
  }
  
function handleNext(){
  step >= messages.length ? setStep((step) => step - (messages.length-1)) : setStep((step)=>step+1);

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

        {/* <p className="message">  for step {step} :{messages[step - 1]}</p> */}

        <Message step={step}>{messages[step - 1] }</Message>
        <div className="buttons">
          <button 
          onClick={ step === 0 ? null : handlePrevious} 
            style={{ backgroundColor : "#7950f2" , color :"#fff" }}>
            Previose
          </button>

          <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
              <span>🤓</span>
            </Button>

        </div>
      
      </div>
      : <div>
         
      </div>

      } 
    </>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
      >
      {children}
    </button>
  );
}

function Message({step ,children}){
  return (
    <p className="message">  for step {step} :{children}</p>
  )
}

export default App;