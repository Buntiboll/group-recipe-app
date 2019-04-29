import React from 'react';

const Reviews = (props) => (
    <div>
        
        
        { props.reviewList.map((review) => {
      if (review.recepeID == props.recipeNo[0]){
        return (
            <div key={review.id}>
              <h2 >{review.reviewID}</h2>
              <p>{review.reviewRating}</p>
              <p>{review.reviewText}</p>
          </div>
        );
      }
      
    })}
        
    </div>
    
   
    
);
           
export default Reviews;