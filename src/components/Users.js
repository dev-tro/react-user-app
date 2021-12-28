import UserItemList from "./UserItemList";
import Card from "./UI/Card";


const Users = (props) => {

    return (
        <div>
            <Card>
                <UserItemList users={props.users} />
            </Card>
        </div>
    );
}

export default Users;
