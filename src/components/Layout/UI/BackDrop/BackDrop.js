import React from 'react';
import Classes from './BackDrop.css';

const backDrop =(props) =>(
    props.show ? <div className={Classes.BackDrop} onClick={props.clicked}>

    </div> : null
);


export default backDrop;