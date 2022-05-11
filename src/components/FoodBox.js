import React, { useState } from 'react';

function FoodBox(props) {

  const [quantity, setQuantity] = useState(props.item.quantity)
  const handleChange = e => {
    setQuantity(Number(e.target.value));
    console.log('quant', quantity)
    props.updateFoodItem(props.item.name, quantity);
  }

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.item.image} alt=""/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.item.name}</strong> <br />
              <small>{props.item.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value={quantity}  
              onChange={e => handleChange(e)}/>
            </div>
            <div className="control">
              <button className="button is-info" onClick={
                (e)=> {
                  props.addTodaysFood(props.item)
                }
                }>+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default FoodBox;