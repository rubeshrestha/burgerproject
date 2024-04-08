import React from 'react';
import Auxillery from '../../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';


const orderSummary =(props)=>{
    const ingredientSummary=Object.keys(props.ingredients)
    .map(igKey=>{
        return(
        <li key={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>
             :{props.ingredients[igKey]}</li>

    ); }) ; 
    
      return(
        <Auxillery>
            <h3>Your Order</h3>
            <p>Amazing Burger with following ingredient:</p>
            <ul>
              {ingredientSummary}
            </ul>
            <p><strong>Total Price</strong>:{props.price}</p>
            <p>Continue to CheckOut?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
        </Auxillery>
      );

};

export default orderSummary; 