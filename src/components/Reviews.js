import React from 'react';

const Reviews = (props) => (
    <div>
        {console.log(props.reviewList[0].name)}
        { props.reviewList.map((review) => {
      
      return (
          <div key={review.id}>
            <h2 >{review.reviewID}</h2>
            <p>{review.reviewRating}</p>
            <p>{review.reviewText}</p>
        </div>
      );
    })}
        
    </div>
    
   
    
);
           
export default Reviews;