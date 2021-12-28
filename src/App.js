import './App.css';
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import {useState} from "react";

const DUMMY_DATA = [
    {id: 0, username: 'tro0', age: 10},
    {id: 1, username: 'tro1', age: 20},
    {id: 2, username: 'tro2', age: 30}
];

function App() {

    const [users, setUsers] = useState(DUMMY_DATA);

    const addNewUser = (newUser) => {
        setUsers(prevUsers => {
            return [newUser, ...prevUsers];
        });
    };

    return (
        <div className="App">
            <AddUser onAddUser={addNewUser}/>
            <Users users={users}/>
        </div>
    );
}

export default App;
