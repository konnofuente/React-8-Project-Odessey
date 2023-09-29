export function Friend({ friend , onSelectFriend}) {

    
    return (
        <ul>
            <li>
                <img src={friend.image} alt="" />
                <h3>{friend.name}</h3>

                { 
                    friend.balance < 0 
                    ? <p className="green">{friend.name} owes you  {Math.abs(friend.balance)}$ </p> 
                    : null
                }

                {
                    friend.balance > 0 ?
                    <p className="red"> you owe {Math.abs(friend.balance)}$ to {friend.name} </p>
                    : null
                }

                {
                    friend.balance === 0 ?
                    <p>{friend.name} and you have no debt</p>
                    : null
                }
                
                <button className="button" onClick={()=> onSelectFriend(friend)}>
                    Select
                </button>
            </li>
        </ul>
    );
}


