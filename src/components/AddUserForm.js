import Card from "./UI/Card";
import {useState, useRef} from "react";
import Modal from "./UI/Modal";
import React from "react";


const AddUserForm = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    //const [enteredUsername, setEnteredUsername] = useState('');
    //const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');

    const submitHandler = (event) => {

        // Don't send the request, thus don't reload the whole page
        event.preventDefault();

        const enteredUsername = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        // validate user inputs
        if (enteredUsername.trim().length === 0 && enteredAge.trim.length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Blank username and age entered'
            });
            console.log('Invalid entry: Blank username and age entered');
            return;
        } else if (enteredAge.trim.length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Blank age entered'
            });
            console.log('Invalid entry: Blank age entered');
            return;
        } else if (enteredAge < 0) {
            setError({
                title: 'Invalid input',
                message: 'Age must be greater than 0'
            });
            console.log('Invalid entry: Age must be greater than 0');
            return;
        } else if (enteredUsername.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Blank username entered'
            });
            console.log('Invalid entry: Blank username entered');
            return;
        } else {
            console.log('Valid entry');
        }

        // Create the new user object
        const newUser = {
            username: enteredUsername,
            age: enteredAge
        };

        // Pass the new user object back to the caller
        props.onSubmit(newUser);

        // Usually a no-no to alter the DOM directly but in the case of just resetting a field you can get
        // away with it. The alternative is to use states which bulks up the code
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';

        console.log("Submitted add new user")
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <React.Fragment>
            {error && <Modal title={error.title} message={error.message} onConfirm={errorHandler}/>}

            <form onSubmit={submitHandler}>
                <div>
                    <Card>
                        <div>Username</div>
                        <input type={'text'} ref={nameInputRef}/>
                        <div>Age (Years)</div>
                        <input type={'number'} ref={ageInputRef}/>
                        <div>
                            <button type={'submit'}>Add User</button>
                        </div>
                    </Card>
                </div>
            </form>
        </React.Fragment>
    )
}

export default AddUserForm;
