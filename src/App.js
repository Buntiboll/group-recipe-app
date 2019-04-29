import React, { Component } from 'react';
import './App.css';


import Form from "./components/Form";
import Recipes from "./components/Recipes";

//const API_KEY = "22cc7acaddbec2295e010551a7178dfb";
//const API_KEY = "3847b22beb032b2d3af026eb77adea83";
const API_KEY = "1560de1e40ab6b84339dce8cada1b843";
class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

        const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=9`);

    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
    console.log(this.state.recipes);
  }
  componentDidMount = () => {
    if(localStorage.getItem("recipes")){
      const json = localStorage.getItem("recipes") || {};
      const recipes = JSON.parse(json)||{};
      this.setState({ recipes });
    }
    // Lägg till get recipe

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
      
          <h1 className="App-title">Ingredi</h1>
          <h1 className="App-title1">Go!</h1>
          <h2 className="App-description">Search for recipes to find everything you need to make your favorite meals!</h2>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}


export default App;



