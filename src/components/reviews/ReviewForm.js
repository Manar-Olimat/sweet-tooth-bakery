import {useRef} from 'react'
import axios from 'axios';
const ReviewForm = (props) => {
// get input values
    const rateInputRef=useRef();
    const reviewInputRef=useRef();

// axios post
function onAddReview(reviewData){

    axios.post('https://sweettoothbakery-8fd88-default-rtdb.firebaseio.com/reviews.json', reviewData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}


    // on submit handler

    function submitHandler(e) {
        e.preventDefault();
        const enteredRate=rateInputRef.current.value;
        const enteredReview=reviewInputRef.current.value;
       

        const reviewData={
            rete: enteredRate,
            recipe:props.recipe,
            review: enteredReview,
           

        };
        // console.log(meetupData);
        onAddReview(reviewData);

    }



  return (
    <div className="reviews-form">
    <form> 
     <div className="rating flex">
       <label htmlFor="countries" className=" mb-2 ml-3 text-sm font-medium text-gray-900 dark:text-white mt-10">Enjoyed The Recipe! Rate It.</label>
<select id="countries" ref={rateInputRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-16 ml-6 mt-6 mb-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</select>
{/* <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label> */}

       </div>      


<textarea id="message" rows="4" ref={reviewInputRef} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
<div className="review-btn">
<button type="submit"
onClick={submitHandler}
 className=" text-white  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

</div>
</form>
         </div>
  )
}

export default ReviewForm