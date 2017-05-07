import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import RecipePage from './RecipePage.js';
import { defaultRecipes } from './data.js';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

class App extends Component {

  state = {
    recipes: [],
    active: {}
  }

  componentWillMount() {
    this.getRecipes()
  }

  getRecipes = () => {
    this.setState({
      recipes: defaultRecipes
    })
  }

  getOneRecipe = (id) => {
    const recipe = this.state.recipes.find(recipe => {
      return recipe.id === id;
    });
    this.setState({
      active: recipe
    });
  }

  renderRecipes = () => {
    const recipes = this.state.recipes;
    return(
      //  this is a shorter ternary; if expression on left is true, right gets evaluated
      //  if it's not, skip what's on the right side
      <div className="cards-container">
        {recipes.length !== 0 &&  recipes.map(recipe => (
          <Link to={`recipes/${recipe.id}`} key={recipe.title}>
            <Card
                id={recipe.id}
                getOneRecipe={this.getOneRecipe}
                title={recipe.title}
                image={recipe.image}
            />
          </Link>
        ))}
      </div>
    )
  }

  renderRecipePage = () => {
    return(
      <RecipePage recipe={this.state.active} />
    )
  }

  render() {
    return (
      <Router>
        <div className="App">

          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>

          <Link to="/recipes">View All Recipes</Link>
          <Route exact path="/recipes" component={this.renderRecipes} />
          <Route exact path="/recipes/:id" component={this.renderRecipePage} />

        </div>
      </Router>
    );
  }
}

export default App;
