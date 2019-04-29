import React from 'react';



const Reviews = (props) => (
    <div> 
        { props.reviewList.map((review) => {
      if (review.recepeID === props.recipeNo[0]){
        return (
            <div key={review.id}>
              <h4 >{review.reviewID}</h4>
              <p id="reviewRating">{review.reviewRating}</p>
              <p>{review.reviewText}</p>
          </div>
        );
      } else {
          return (
              <div></div>
          )
      }
      
    })}
        
    </div>
    
   
    
);
           
export default Reviews;