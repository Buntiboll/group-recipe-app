import React from 'react';

import { Link } from "react-router-dom";
import Reviewform from './Reviewform';

const API_KEY = "22cc7acaddbec2295e010551a7178dfb";

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  }

  saveReview = async (e) => {
    
    const name = e.target.elements.review_name.value;
    const comment = e.target.elements.review_comment.value;
    console.log(name + comment);
    e.preventDefault();
  }
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
    
    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
    console.log(this.state.activeRecipe);
  }
  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        { this.state.activeRecipe.length !== 0 &&
          <div className="active-recipe">
            <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
            <h3 className="active-recipe__title">{ recipe.title }</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{ recipe.publisher }</span>
            </h4>
            <p className="active-recipe__website">Website: 
              <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
            <Reviewform saveReview={this.saveReview} />
          </div>
        }
      </div>
    );
  }
};

export default Recipe;