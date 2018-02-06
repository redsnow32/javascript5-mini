import React, { Component } from 'react';

import './App.css';
import FoodItem from './FoodItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteFoods: ['lettuce', 'carrots', 'beets', 'beans', 'air']
    }
  }
  render() {

    const favFoods = this.state.favoriteFoods.map(( item, i) => {
        return <FoodItem key={item}/>
    })

    return (
      <div className="App">
        <h1>My Favorite Food List:</h1>
        {favFoods}
        <FoodItem favs={this.state.favoriteFoods}/>
      </div>
    );
  }
}

export default App;
