import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient';


const burger =(props) =>{

    let transformedIngredient =Object.keys(props.ingredients)
    .map(igKey=>{
        return [...Array (props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredient key={igKey+i} type={igKey} />
        }); })
        .reduce ((arr,el)=>{
            return arr.concat(el)
        },[]);

        console.log(transformedIngredient);

        if(transformedIngredient.length===0){
            transformedIngredient=<p>Please add ingredient!!!</p>
        }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient  type="bread-Top" />
            {transformedIngredient}
            <BurgerIngredient  type="bread-Bottom" />
        </div>
    );

};


export default burger;