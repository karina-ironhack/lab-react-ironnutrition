import React from 'react';

function TodaysFood(props) {
    return(
        <div>
        <h1><strong>Today's foods</strong></h1>
        <ul>
            {props.foodArray.map((elm, i) => {
                console.log(elm)
                return <li key={i}>{elm.quantity} {elm.name}</li>
            })}
        </ul>
        <h4>Total: {props.totalCalories}cal</h4>
        </div>
    )
}

export default TodaysFood;