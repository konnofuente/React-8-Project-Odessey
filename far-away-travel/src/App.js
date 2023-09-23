import './App.css';
import { useState } from 'react'



const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

let numbersArray = [];
for (let index = 0; index <= 20; index++) {
  numbersArray.push(index);
}

function App() {



  return (
    <>
      <Logo />
      <Form />

      <PackingList />

      <Stats />

    </>

  );
}



function Logo() {
  return (
    <header>
      <h1>
        🌴 Far away travel app 💼
      </h1>
    </header>
  )
}

function Form() {

  const [description, setDescription] = useState("");
  const [quantity, setQuentity] = useState(0);
  //  const [packed, setPacked] = useState(false);



  function handleForm(e) {
    e.preventDefault();
    if (!description) return
    
    console.log(e)
    console.log(quantity)
    console.log(description)

   initialItems.push({id:initialItems.length +1 , description: description , quantity : quantity ,packed:false})
    
  }
  return (
    <form className='add-form' onSubmit={handleForm}>
      <h3>
        what do you need for your trip
      </h3>

      <select value={quantity}

        onChange={(e) => {
          setQuentity(Number(e.target.value))
        }}
      >
        {
          numbersArray.map((num) =>
            <option
              value={num}
              key={num}

            > {num}
            </option>
          )
        }
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {

          setDescription(e.target.value)
        }

        }

      />

      <button >Add</button>

    </form>
  )
}

function PackingList() {
  return (
    <div className='list' >

      <ul >
        {

          initialItems.map((item) => (
            <Item item={item} key={item.id} />
          ))
        }
      </ul>
    </div>

  )
}

function Item({ item, key }) {

  return <li>
    {

    }
    <input
      type="checkbox" checked={item.packed} >
    </input>

    <span style={item.packed ? { textDecation: 'line-through' } : {}}
    >{`${item.description}, ${item.quantity}`}</span>

  </li>
}

function Stats() {
  return (
    <footer className='stats'>
      <em> you have x item on your list and already packed X (X%)</em>
    </footer>
  )
}


export default App;
