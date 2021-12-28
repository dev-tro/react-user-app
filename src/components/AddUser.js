import AddUserForm from "./AddUserForm";
import Modal from "./UI/Modal";


const AddUser = (props) => {

    const addNewUser = (enteredData) => {
        const newUser = {
            ...enteredData,
            id: Math.random().toString()
        }

        props.onAddUser(newUser);
    };

    return (
        <div>
            <AddUserForm onSubmit={addNewUser}/>
        </div>
    )
}

export default AddUser;
