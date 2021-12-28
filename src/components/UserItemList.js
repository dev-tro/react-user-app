import UserItem from "./UserItem";


const UserItemList = props => {

    return (
        <ul>
            {props.users.map(user => (
                <UserItem
                    key={user.id}
                    username={user.username}
                    age={user.age}
                />))}
        </ul>)
};

export default UserItemList;
