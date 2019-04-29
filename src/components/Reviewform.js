import React from 'react';

const Reviewform = props => (
  <form onSubmit={props.saveReview} style={{ marginBottom:"2rem" }} id="reviewform">
    <input className="form__input" type="text" name="review_name" placeholder="Name"/>
    <input className="form__input" type="textfield" name="review_comment" placeholder="Comment"/>
    <button className="form__button">Submit</button>
  </form>
);

export default Reviewform;