



export function Item({ item, onDeleteItem, onToggleCheckBox }) {

    return <li>

        <input
            type="checkbox"
            value={item.packed}
            onChange={() => onToggleCheckBox(item.id)}
        >
        </input>

        <span style={item.packed ? { textDecoration: "line-through" } : {}}
        >{`${item.description}, ${item.quantity}`}</span>
        <button

            onClick={() => onDeleteItem(item.id)}
        >❌</button>

    </li>;
}
