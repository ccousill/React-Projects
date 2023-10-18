import React from 'react';
import classes from './ErrorModal.module.css'
import Card from '../UI/Card';
import Button from '../Button/Button';
import  ReactDOM  from 'react-dom';



const Backdrop = (props) =>{
    return <div className={classes.backdrop} onClick={props.onClick}/>
}

const ModalOverlay = (props) =>{
    console.log(props)
    return(<React.Fragment>
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.props.props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.props.props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onClick}>Okay</Button>
            </footer>
        </Card>
    </React.Fragment>)
}

function ErrorModal(props) {

    const okayError = () =>{
        props.disableError();
    }
    
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={okayError}/>,document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay props={props} onClick={okayError}/>,document.getElementById('overlay-root'))}
        </React.Fragment>
    )

}

export default ErrorModal;
