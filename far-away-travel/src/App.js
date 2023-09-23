import './App.css';
import { useState } from 'react'
import CardGame from './cardGame';



const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

let numbersArray = [];
for (let index = 0; index <= 20; index++) {
  numbersArray.push(index);
}

function App() {

  const [items , setItems] =useState([...initialItems])

  function handleAddItem(item){
    setItems((items)=> [...items , item])
  }

  function handleDelete(id){
        setItems((items)=> 
          items.filter((item)=>item.id !== id)
        )
  }

function toggleCheckBox(id){
    setItems((items) => 
        items.map((item) => 
            item.id === id ? {...item, packed: !item.packed} : item
        )
    );
}

  
// const updateArray = deleteArray.map((book)=> {
//   book.id === 1? {...book , pages:112} : book
// })

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItem} />

      <PackingList items={items} onDeleteItem={handleDelete}  onToggleCheckBox = {toggleCheckBox}/>

      <Stats items={items} />
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

function Form({onAddItems}) {

  const [description, setDescription] = useState("");
  const [quantity, setQuentity] = useState(0);
  //  const [packed, setPacked] = useState(false);



  function handleForm(e) {
    e.preventDefault();
    if (!description) return
    
    console.log(e)
    console.log(quantity)
    console.log(description)
    const newItem ={id: Date.now() , description , quantity , packed: false}
    onAddItems(newItem)

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

function PackingList( {items ,onDeleteItem ,onToggleCheckBox}) {

  // const [sortBy , setSortBy] = setState('input')
  return (
    <div className='list' >

      <ul >
        {

          items.map((item) => (
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem}  onToggleCheckBox={onToggleCheckBox} />
          ))
        }
      </ul>


      <div className='actions'>
        <select>
          <option value="input">sort by input </option>
          <option value="description">sort by input </option>
          <option value="packed">sort by packed </option>
        </select>
      </div>
    </div>

  )
}

function Item({ item,onDeleteItem , onToggleCheckBox}) {

  return <li>
    {

    }
    <input
      type="checkbox" 
      value={item.packed}
      onChange={()=> onToggleCheckBox(item.id)}
      >
    </input>

    <span style={item.packed ? { textDecoration: "line-through" } : {}}
    >{`${item.description}, ${item.quantity}`}</span>
    <button 
    
    onClick={()=>onDeleteItem(item.id)}
    >❌</button>

  </li>
}

function Stats({items}) {

  const numItems = items.length
  const numPacked = items.filter((item) => item.packed === true).length

  return (
    <footer className='stats'>
      <em> you have {numItems} item on your list and already packed {numPacked} (X%)</em>
    </footer>
  )
}


export default App;
