export function Stats({ items }) {

    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed === true).length;

    return (
        <footer className='stats'>
            <em> you have {numItems} item on your list and already packed {numPacked} (X%)</em>
        </footer>
    );
}
