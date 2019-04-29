import React from 'react';

import { Link } from "react-router-dom";
import Reviewform from './Reviewform';


import firebase from '../Config';
import Reviews from './Reviews';


//const API_KEY = "22cc7acaddbec2295e010551a7178dfb";
//const API_KEY = "3847b22beb032b2d3af026eb77adea83";
const API_KEY = "1560de1e40ab6b84339dce8cada1b843";


class Recipe extends React.Component {
 constructor () {
   super()

  

   this.state = {
    activeRecipe: ['35120'],
    
    reviews: [
      {id:12,
      reviewID: 'Sara',
      reviewRating: 5,
      reviewText: 'Mina kommentarer'},
      {
        id: 13,
        name: 'Sarah',
        reviewRating: 4,
        reviewText: 'andra kommentarer'
        }
      ]
   }
 }
  
    
  
//==============SAVING DATA TO FIRESTORE=============//
  saveReview = async (e) => {
    e.preventDefault();
    const ts = new Date();
    const reviewsRef = firebase.firestore().collection("reviews");
    reviewsRef.add({
      recepeID: e.target.elements.review_recipe.value, 
      id: ts.toISOString(), 
      reviewID: e.target.elements.review_name.value,
      reviewRating: e.target.elements.star.value,
      reviewText: e.target.elements.review_comment.value
    })
    .catch((error) => {
        console.log("Error getting reviews:", error);
    });

    //===========CLEAR FORM============//
    console.log("rensar");
    const form = e.target.elements;
    e.target.review_name.value = "";
    form.star[0].checked = false;
    form.star[1].checked = false;
    form.star[2].checked = false;
    form.star[3].checked = false;
    form.star[4].checked = false;
    form.review_comment.value = "";
    
  }

  componentDidMount = async () => {
    //=================GETTING DATA FROM FIRESTORE==============//
    const rev = [];
    const reviewsRef = firebase.firestore().collection("reviews").orderBy("id", "desc");
    reviewsRef.get()
    .then((snapshot) => {
        snapshot.docs.forEach(doc => {
          rev.push(doc.data()); //pushar datan från databasen till state
            
        })
        this.setState({reviews:rev});
        
        
    })
    .catch((error) => {
        console.log("Error getting reviews:", error);
    });

    
    
    //====================GETTING DATA FROM API==============//
    const title = this.props.location.state.recipe;
    const req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
    
    const res = await req.json();
    console.log(res);
    
    try {
      this.setState({ activeRecipe: res.recipes[0] });
    }
    catch (error) {
      console.error(error);
    }
    
    console.log(this.state.activeRecipe);
  }
  render() {
    const recipe = this.state.activeRecipe;
    return (
      //=================WRITING OUT RECIPE PAGE ======//
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
            <h2>Add review</h2>
            <Reviewform saveReview={this.saveReview} recipeNo={this.state.activeRecipe}/>
            <Reviews reviewList={this.state.reviews} recipeNo={this.state.activeRecipe}/>
          </div>
        }
      </div>
    );
  }
};

export default Recipe;