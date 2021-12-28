import Card from "./Card";
import classes from "./ErrorModal.module.css";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm}/>;
};

const ModalOverlay = props => {
    return <Card>
        <header>
            <h2>{props.title}</h2>
        </header>
        <div>
            <p>{props.message}</p>
        </div>
        <footer>
            <button onClick={props.onConfirm}>Okay</button>
        </footer>
    </Card>;
};


const Modal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>,
                document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,
                document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}

export default Modal;
