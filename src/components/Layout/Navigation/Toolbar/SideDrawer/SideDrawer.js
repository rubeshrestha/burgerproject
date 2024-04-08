import React from 'react';
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import BackDrop from '../../../UI/BackDrop/BackDrop';
import Auxiliary from '../../../../../hoc/Auxiliary';


const sideDrawer =(props) =>{
    let attachedClass=[classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClass=[classes.SideDrawer, classes.Open];
    }
    return (
        <Auxiliary>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={attachedClass.join(' ')}>
            <div className={classes.Logo}>
            <Logo />
            </div>
            
            <nav>
              <NavigationItems />
            </nav>
        </div>
        </Auxiliary>
        
    );
}



export default sideDrawer;