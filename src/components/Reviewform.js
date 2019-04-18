import React from 'react';

const Reviewform = props => (
  <form onSubmit={props.saveReview} style={{ marginBottom:"2rem" }}>
    <input className="form__input" type="text" name="review_name" />
    <input className="form__input" type="text" name="review_comment" />
    <button className="form__button">Submit</button>
  </form>
);

export default Reviewform;