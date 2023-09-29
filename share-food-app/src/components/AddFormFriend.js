import { useState } from 'react';

export function AddFormFriend({ onAddFriend }) {

    const [name, setname] = useState('');
    const [image, setimage] = useState('https://i.pravatar.cc/48?u=499476');

    function addFriend(e) {

        e.preventDefault();

        console.log(name);

        let newFriend = { id: Number(Date.now()), name: name, image: image, balance: 0 };
        onAddFriend(newFriend);
        console.log("hello");

    }

    return <form
        className='form-add-friend'
        onSubmit={addFriend}
    >
        <label className=''> 🍟 Friend Name</label>
        <input type="text"
            value={name}
            onChange={(e) => setname(e.target.value)} />

        <label className=''> 🖼️ Image url</label>
        <input type="text"
            value={image}
            onChange={(e) => setimage(e.target.value)} />

        <button className='button'> Add</button>

    </form>;
}
