import { Friend } from './Friend';

export function FriendList({ Allfriends ,onSelectFriend }) {


    return (
        <>
            {Allfriends.map((friend) => (

                <Friend friend={friend} key={friend.id} onSelectFriend={onSelectFriend}/>

            ))}

            <div>


            </div>

        </>

        // Friend(Allfriends)
    );
}
