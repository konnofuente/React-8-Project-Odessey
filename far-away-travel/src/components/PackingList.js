import { useState } from 'react';
import { Item } from './Item';

export function PackingList({ items, onDeleteItem, onToggleCheckBox, onClearList }) {

    const [sortBy, setSortBy] = useState('input');
    let sortedArray;

    if (sortBy === 'input') sortedArray = [...items];

    if (sortBy === "packed")
        sortedArray = items
            .slice()
            .sort((a, b) => Number(b.packed) - Number(a.packed));

    if (sortBy === 'quentity') {
        // setItems((items)=>items.sort((a,b)=>b.quantity - a.quantity));
        sortedArray = items.slice().sort((a, b) => b.quantity - a.quantity);
        console.log(sortedArray);
    }
    if (sortBy === 'description') {
        // setItems((items)=>items.sort((a,b)=>a.description.localeCompare(b.description)));
        sortedArray = items.slice().sort((a, b) => a.description.localeCompare(b.description));
        console.log(sortedArray);
    }







    return (
        <div className='list'>

            <ul>
                {sortedArray.map((item) => (
                    <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleCheckBox={onToggleCheckBox} />
                ))}
            </ul>


            <div className='actions'>
                <select
                    value={sortBy}
                    onChange={e => {
                        setSortBy(e.target.value);
                    }}
                >
                    <option value="input">sort by input </option>
                    <option value="description">sort by description </option>
                    <option value="packed">sort by packed </option>
                    <option value="quentity">sort by quentity </option>
                </select>

                <button onClick={() => onClearList()}>Clear List </button>
            </div>
        </div>

    );
}
