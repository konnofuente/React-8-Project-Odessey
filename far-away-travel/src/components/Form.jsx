import { useState } from 'react';
import { numbersArray } from './App';

export default function Form({ onAddItems }) {

    const [description, setDescription] = useState("");
    const [quantity, setQuentity] = useState(0);
    //  const [packed, setPacked] = useState(false);
    
    function handleForm(e) {
        e.preventDefault();
        if (!description) return;

        console.log(e);
        console.log(quantity);
        console.log(description);
        const newItem = { id: Date.now(), description, quantity, packed: false };
        onAddItems(newItem);

    }



    return (
        <form className='add-form' onSubmit={handleForm}>
            <h3>
                what do you need for your trip
            </h3>

            <select value={quantity}

                onChange={(e) => {
                    setQuentity(Number(e.target.value));
                }}
            >
                {numbersArray.map((num) => <option
                    value={num}
                    key={num}

                > {num}
                </option>
                )}
            </select>

            <input
                type="text"
                placeholder="Item..."
                value={description}
                onChange={(e) => {

                    setDescription(e.target.value);
                }} />

            <button>Add</button>

        </form>
    );
}
