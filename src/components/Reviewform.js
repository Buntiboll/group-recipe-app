import React from 'react';

const Reviewform = props => (
  <form onSubmit={props.saveReview} style={{ marginBottom:"2rem"}} id="reviewform">
    <input className="form__input" type="hidden" name="review_recipe" value={props.recipeNo}/>
    <input className="form__input" type="text" name="review_name" placeholder="Name"/>
    
    <input className="form__input" type="textfield" name="review_comment" placeholder="Comment"/>
    <div className="stars">

  <input className="star star-5" id="star-5" type="radio" name="star" value={5}/>
  <label className="star star-5" htmlFor="star-5"></label>
  <input className="star star-4" id="star-4" type="radio" name="star" value={4}/>
  <label className="star star-4" htmlFor="star-4"></label>
  <input className="star star-3" id="star-3" type="radio" name="star" value={3}/>
  <label className="star star-3" htmlFor="star-3"></label>
  <input className="star star-2" id="star-2" type="radio" name="star" value={2}/>
  <label className="star star-2" htmlFor="star-2"></label>
  <input className="star star-1" id="star-1" type="radio" name="star" value={1}/>
  <label className="star star-1" htmlFor="star-1"></label>
  



</div>
    <button className="form__button">Submit</button>
  </form>
);

export default Reviewform;