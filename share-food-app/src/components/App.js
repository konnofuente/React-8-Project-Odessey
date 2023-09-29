import { useState } from 'react'
import { AddFormFriend } from './AddFormFriend';
import { FriendList } from './FriendList';

function App() {

  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];

  const [friends, setfriends] = useState(initialFriends);
  const [displayForm, setdisplayForm] = useState(true);
  const [selectedFriend, setSelectedFriend] = useState({});
  const [displaySplitForm, setdisplaySplitForm] = useState(false);


  function handleAddFriend(friend) {

    setfriends((friends) => [...friends, friend])
  }

  function handleSelectedFriend(friend) {

    setSelectedFriend(friend)
    console.log('test')
  }

  
  // setfriends([...initialFriends])

  // let friends = initialFriends

  return (
    <div className="app">

      <div className="sidebar">
        <FriendList Allfriends={friends}  onSelectFriend={handleSelectedFriend}/>
        {
          displayForm ? (
            <>
              <AddFormFriend onAddFriend={handleAddFriend} />
              <Button onClick={() => setdisplayForm(!displayForm)}>Close</Button>
            </>
          ) : (
            <Button onClick={() => setdisplayForm(!displayForm)}>Add</Button>
          )
        }
      </div>

      <div>
        {  displaySplitForm && <SplitForm selectedFriend={selectedFriend}/>}
      </div>


    </div>
  )


  function SplitForm({selectedFriend}) {

    const [totalBill, setTotalBill] = useState(0);
    const [yourExpenses, setYourExpenses] = useState(0);
    const [friendExpenses, setFriendExpenses] = useState(0);
    
    return <form className='form-split-bill'>
      <h2>SPLIT A BILL WITH {selectedFriend.name} </h2>

      <label>💴 bill value</label>
      <input
        type="text" />

      <label>💴 your expenses</label>
      <input type="text" />

      <label>👩‍👦 sarah expenses</label>
      <input type="text" />

      <label>👩‍👦 who will puchase</label>
      <select>
        <option value="" key="">You</option>
        <option value="" key="">{selectedFriend.name}</option>
      </select>

      <button className='button'>
        split bill
      </button>

    </form>;
  }
}
export default App


function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      className='button'
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );





}