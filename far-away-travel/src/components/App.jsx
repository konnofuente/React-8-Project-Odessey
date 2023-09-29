import '../App.css';
import { useState } from 'react'
import  Form  from './Form';
import Logo from './Logo'
import { PackingList } from './PackingList';
import { Stats } from './Stats';



const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Full", quantity: 120, packed: false },
  { id: 4, description: "Food", quantity: 1, packed: false },
  { id: 5, description: "dresse", quantity: 132, packed: false },
  { id: 6, description: "Socks", quantity: 182, packed: false },
];

export let numbersArray = [];
for (let index = 0; index <= 20; index++) {
  numbersArray.push(index);
}

function App() {

  const [items, setItems] = useState([...initialItems])

  function handleAddItem(item) {
    setItems((items) => [...items, item])
  }

  function handleDelete(id) {
    setItems((items) =>
      items.filter((item) => item.id !== id)
    )
  }

  function toggleCheckBox(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    if (window.confirm("Are you sure you want to clear the list?")) {
      setItems([])
    } else {

    }

  }

  return (
    <>
      <Logo />
      
      <Form onAddItems={handleAddItem} />

      <PackingList items={items} onDeleteItem={handleDelete} onToggleCheckBox={toggleCheckBox} onClearList={handleClearList} />

      <Stats items={items} />
    </>

  );


}






export default App;
