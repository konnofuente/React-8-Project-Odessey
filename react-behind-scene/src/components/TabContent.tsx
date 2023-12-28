import React, { useState } from 'react'
import { Content } from '../types'

type TabContentProps = {
    item:Content
}

export default function TabContent({item}: TabContentProps) {
    const [showDetails, setShowDetails] = useState(true);
    const [likes, setLikes] = useState(0);
  
    function handleInc() {
      setLikes(likes + 1);
    }
    function handleTripleInc() {
      setLikes(likes + 3);
    }
    
    function handleUndoLater(){
      setTimeout(undo,2000);
    }
    function undo(){
      setLikes(likes -1);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
       setShowDetails(false) 
      
    }
  
    return (
      <div className="tab-content">
        <h4>{item.summary}</h4>
        {showDetails && <p>{item.details}</p>}
  
        <div className="tab-actions">
          <button onClick={() => setShowDetails((h) => !h)}>
            {showDetails ? "Hide" : "Show"} details
          </button>
  
          <div className="hearts-counter">
            <span>{likes} ❤️</span>
            <button onClick={handleInc}>+</button>
            <button onClick={handleTripleInc}>+++</button>
          </div>
        </div>
  
        <div className="tab-undo">
          <button onClick={undo}>Undo</button>
          <button onClick={handleUndoLater}>Undo in 2s</button>
        </div>
      </div>
    );
}