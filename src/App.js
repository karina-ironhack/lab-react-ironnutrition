import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import SearchFood from './components/SearchFood';
import TodaysFood from './components/TodaysFood';

function App() {

  const [foodList, setFoodList] = useState(foods)
  const [filteredFood, setFilteredFood] = useState(foodList)
  const [todaysFoodArr, setTodaysFoodArr] = useState([])
  
  const addNewFood = (newFood) => {
    setFoodList([...foodList, newFood])
  }

  const updateFoodItem = (name, quant) => {
    console.log(name)
    console.log(quant)

    filteredFood.find(obj => {
      if(obj.name === name) {
          return obj.quantity = quant
      }
      return obj
    })
  }

  const search = (input) => {
    const filteredFoodArray = foodList.filter(elm => elm.name.toLowerCase().includes(input.toLowerCase()));
    setFilteredFood(filteredFoodArray);
  }

  const addTodaysFood = (food) => {
    const copy = [...todaysFoodArr]
    const existingFood = copy.find(obj => obj.name === food.name);
    existingFood ? existingFood.quantity += food.quantity : copy.push(food);
      
    setTodaysFoodArr(copy)
  }

  return (
    <div className="App">
      <AddFood addFood={addNewFood} />
      <SearchFood search={search}/>
      <div>
      <div className="columns">
        <div className="column">
          {filteredFood.map((item) => {
            return <FoodBox key={item.name} item={item}
             addTodaysFood={addTodaysFood} 
             updateFoodItem={updateFoodItem}
             />;
          })}
        </div>
        <div className="column">
          <TodaysFood foodArray={todaysFoodArr}/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
