import {useState,useEffect,useContext} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ReviewForm from '../components/reviews/ReviewForm';
import ReviewItem from '../components/reviews/ReviewItem';
import FavoritesContext from '../store/favoritesContext';
import ReviewList from '../components/reviews/ReviewList';
import YouTube from 'react-youtube';




const SingleRecipe = () => {
  const params = useParams();
  const favContext=  useContext(FavoritesContext);

  const [isLoading, setIsLoading]=useState(true);
  const [loadedRecipes, setLoadedRecipes]=useState([]);
  const itemIsFavorite=favContext.itemIsFavorites(loadedRecipes.id);

  function toggleFavoritesStatuesHandler() {
    if (itemIsFavorite) {
      favContext.removeFavorites(loadedRecipes.idMeal);
  
    }
    else{
      favContext.addFavorites({
        idMeal: params.id,
        userId:sessionStorage.getItem('user_key'),
        strMeal: loadedRecipes.strMeal,
        strMealThumb: loadedRecipes.strMealThumb,
        
        
      });
  
    }
  }

  useEffect(() => {
    setIsLoading(true);
    //  get data from firebase api
 axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
    .then(response=>
      {
        //response.json() returns a promise as well 
        // so we have to work with another then to get data 
        return response.data;
  
      }).then(data=>{
  let recipes;
  for (const key in data){
     recipes={
      id:key.idMeal,
      ...data[key]
    } ;
    // recipes.push(recipe);
  }
  // console.log(recipes[0]);
        // so it wont display the recipe before data get fetched
        // const res=[];
        // res.push(Object.entries(recipes));
        // console.log(Object.entries(recipes).strMeal);
  setIsLoading(false);
  setLoadedRecipes(Object.entries(recipes)[0][1]);
      });
  
  },
  // if we did not put this array , useEffect Function will 
  // excute whenever the component excutes
  
  // [] => it will excute when the component exute for the first time
  // [value] => it will excute when the value changes
  
  
  []);
  console.log(loadedRecipes);
  
    
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

   const opts = {
    height: '390',
    width: '440',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


// split ingredients and steps
const link_split=loadedRecipes.strYoutube.split('=');
const steps_split=loadedRecipes.strInstructions.split('.');
const embedId=link_split[1];
// console.log(steps_split);

// const ingredients=loadedRecipes.map((item)=><li key={Math.random()} className='mb-5'>
  {
    // for(let i=1; loadedRecipes.('strIngredient'+i))
  }
  // </li>);
const steps=steps_split.map((item)=><li key={Math.random()} className='mb-5'>{item}.</li>);
// console.log(loadedRecipes.strIngredient1);

  return (
    <section className='w-full flex'>
 {/* <!-- Posts Section --> */}
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">

            <article className="flex flex-col shadow my-4">

         
                {/* <!-- Article Image --> */}
                <div className='article-img'>
                    <img src={loadedRecipes.strMealThumb} alt={loadedRecipes.strMeal}/>
                </div>

               <div className="bg-white flex flex-col justify-start p-6">
                    {/* <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a> */}
                    <h3 className="text-3xl font-bold text-start underline pb-4">{loadedRecipes.strMeal}</h3>
                    {sessionStorage.getItem('user_key')!=null &&
                      <button className='w-max mt-6 btn-card items-center px-3 py-2 text-sm font-medium text-center text-black rounded-lg hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={toggleFavoritesStatuesHandler}>
{itemIsFavorite ? 'Remove From Favorites' : ' TO FAVORITES'}
      </button>}
                    <p className="pb-6">
                    {/* {loadedRecipes.description} */}
               </p> </div>
            </article>

            <article className="flex flex-col w-full shadow my-4">
                {/* <!-- Ingredients --> */}
              
                <div className="bg-white flex flex-col justify-start p-6">
                    {/* <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a> */}
                    <h3 className="text-3xl font-bold text-start underline pb-4">Ingredients</h3>
                    
                    <ul className="pb-6 text-start font-bold   ml-6">
                  
                  {/* {ingredients} */}
                  <li key={Math.random()} className='mb-5'>
                    {loadedRecipes.strIngredient1 } {loadedRecipes.strMeasure1}

                    </li>

                    <li key={Math.random()} className='mb-5'>
                    {loadedRecipes.strIngredient2 } 
{loadedRecipes.strMeasure2}
                    </li>

                    <li key={Math.random()} className='mb-5'>
                    {loadedRecipes.strIngredient3 } 
{loadedRecipes.strMeasure3}
                    </li>
                  
                    {   loadedRecipes.strIngredient4 !=null? <li key={Math.random()} className='mb-5'>
                    {loadedRecipes.strIngredient4 } 
{loadedRecipes.strMeasure4}
                    </li> :""             }
                    {   loadedRecipes.strIngredient5 !=null? <li key={Math.random()} className='mb-5'>
                    {loadedRecipes.strIngredient5 } 
{loadedRecipes.strMeasure5}
                    </li> :""             }
                    {   loadedRecipes.strIngredient6 !=null? <li key={Math.random()} className='mb-5'>
                    {loadedRecipes.strIngredient6 } 
{loadedRecipes.strMeasure6}
                    </li> :""             }
                    {   loadedRecipes.strIngredient7 !=null? <li key={Math.random()} className='mb-5'>
                    {loadedRecipes.strIngredient7 } 
{loadedRecipes.strMeasure7}
                    </li> :""             }
                    {   loadedRecipes.strIngredient8 !=null? <li key={Math.random()} className='mb-5'>
                    {loadedRecipes.strIngredient8 } 
{loadedRecipes.strMeasure8}
                    </li> :""             }
                    {   loadedRecipes.strIngredient9 !=null? <li key={Math.random()} className='mb-5'>
                    {loadedRecipes.strIngredient9 } 
{loadedRecipes.strMeasure9}
                    </li> :""             }

                    {   loadedRecipes.strIngredient10 !=null? <li key={Math.random()} className='mb-5'>
                    {loadedRecipes.strIngredient10  }{loadedRecipes.strMeasure10}

                    </li> :""             }
                    {   loadedRecipes.strIngredient12 !=null? <li key={Math.random()} className='mb-5'>
                    {loadedRecipes.strIngredient12} { loadedRecipes.strMeasure12}

                    </li> :""             }
                    {   loadedRecipes.strIngredient11 !=null? <li key={Math.random()} className='mb-5'>
                    {loadedRecipes.strIngredient11 }{loadedRecipes.strMeasure11}

                    </li> :""             }
                  
                  </ul>
                </div>
            </article>

            <article className="flex flex-col w-full shadow my-4">
                {/* <!-- Steps --> */}
              
                <div className="bg-white flex flex-col justify-start p-6">
                    <h3 className="text-3xl font-bold text-start underline pb-4">Steps</h3>
                    
                    <ul className="pb-6 text-start font-bold   ml-6">
                  {steps}
                  {/* {loadedRecipes.strInstructions} */}
                  
                  </ul>
                </div>
            </article>
            <article className="flex flex-col w-full shadow my-4">
                {/* <!-- Video --> */}
              
                <div className="bg-white video-responsive flex flex-col justify-start p-6">
                    <h3 className="text-3xl font-bold text-start underline pb-4">Recipe Video</h3>
                    <br />
                    
                    <YouTube videoId={embedId} opts={opts}
                     onReady={(e)=>e.target.pauseVideo()} 
                     onStateChange={()=><p>This Recipe Does Not Has A Video</p>}/>
                    {/* <iframe
                     width="560"
                      height="315" 
                      src={`https://www.youtube.com/embed/${embedId}`} 
                      title="YouTube video player"
                       frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                </div>
            </article>

            <article className="flex flex-col w-full shadow my-4">
             
             <ReviewForm  recipe={params.id} />
{/* REVIEWS */}

<ReviewList recipe={params.id} />
    
</article>

        </section>

        {/* <!-- Sidebar Section --> */}
        {/* <aside className="w-full md:w-1/3 flex flex-col items-center px-3">

            <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                <p className="text-xl text-start font-semibold pb-5">Discover Other Categories</p>
                <ul className='side-category-name'>
                  <li>Cookies</li>
                  <li>Cakes</li>
                  <li>Muffins</li>
                  <li>Whatever</li>
                </ul>
            </div>

           
            <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                <p className="text-xl text-start font-semibold pb-5">Enjoy More Recipes</p>
                <ul className='side-category-name'>
                  <li>Cookies</li>
                  <li>Cakes</li>
                  <li>Muffins</li>
                  <li>Whatever</li>
                </ul>
            </div>

        </aside> */}

   
    </section>
  )
}

export default SingleRecipe