import {useState,useEffect} from 'react'
import axios from 'axios'
import ReviewItem from './ReviewItem';
const ReviewList = (props) => {
    const [isLoading, setIsLoading]=useState(true);
    const [loadedReviews, setLoadedReviews]=useState([]);
    
    useEffect(() => {
      setIsLoading(true);
      //  get data from firebase api
    axios.get(
      'https://sweettoothbakery-8fd88-default-rtdb.firebaseio.com/reviews.json')
      .then(response=>
        {
          //response.json() returns a promise as well 
          // so we have to work with another then to get data 
          return response.data;
    
        }).then(data=>{
    const reviews=[];
    for (const key in data){
      const review={
        id:key,
        ...data[key]
      } ;
      reviews.push(review);
    }
    
          // so it wont display the recipe before data get fetched
    setIsLoading(false);
    setLoadedReviews(reviews);
        });
    
    },
    // if we did not put this array , useEffect Function will 
    // excute whenever the component excutes
    
    // [] => it will excute when the component exute for the first time
    // [value] => it will excute when the value changes
    
    
    []);
    
    
      
     if (isLoading){
      return    (<section>
        
  <div role="status" className="max-w-sm animate-pulse">
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      <span className="sr-only">Loading...</span>
  </div>
  
      </section>);
    
     }

  return (
    <ul>
        {loadedReviews.filter(item=> item.recipe==props.recipe).map(item=><ReviewItem 
        // key={item.id}
        rate={item.rate}
        review={item.review}
        />)
        }
    </ul>
  )
}

export default ReviewList