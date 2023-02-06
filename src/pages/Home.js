import {useState, useEffect} from 'react'
// import Slider from '../components/Slider'
import { Link, NavLink } from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Gallary from '../components/Gallary'
import styles from './AllRecipes.module.css';
import axios from 'axios';

import RecipeList from '../components/recipes/RecipeList'
const Home = () => {
    
  const [isLoading, setIsLoading]=useState(true);
  const [loadedRecipes, setLoadedRecipes]=useState([]);
  
  useEffect(() => {
    setIsLoading(true);
    //  get data from firebase api
  axios.get(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
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
  setLoadedRecipes(Object.entries(recipes));
      });
  // console.log(Object.entries(loadedRecipes));
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
    <div className='container'>
<div>
{/* <Slider /> */}
<section>
	<div className="dark:bg-violet-400 ">
		<div className="container hero flex flex-col items-center hero_text_cover px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
			<h1 className="text-5xl scroll-smooth leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Enjoy Baking</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">We Offer You a variety of spectacular recipes for a joyful nights</p>
			<div className="flex flex-wrap justify-center">
      <Link to='/all-recipes'>
				<button type="button" className="px-8 hero_more py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Explore Recipes</button>

      </Link>
      <Link to='/signup'>
				<button type="button" className="px-8 py-3 hero_join m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900">Join Us</button>

      </Link>
			</div>
		</div>
	</div>
	{/* <img src="https://source.unsplash.com/random/480x320" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" /> */}

<div className="hero_inner">
<div className="w-5/6 bg_hero mx-auto mb-12 -mt-20 rounded-lg shadow-md bg_header lg:-mt-40 dark:bg-gray-500">
<h2 className={styles.home_header}>Who Are We? </h2>

</div>
</div>
<div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img className="w-full dark:hidden" src="https://assets.epicurious.com/photos/5cb8bdff8ef0813c45b65970/16:9/w_2560%2Cc_limit/SUNDAY-STASH-APRIL-Pancake-Mix-process-1-100419.jpg" alt="dashboard image"/>
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Sweet Tooth Bakery</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                Sweet Tooth Bakery  is the trusted destination for bakers of all levels to learn, be inspired, and share their enthusiasm for baking with those they love. Home to the best recipes, content, tips and tools; we bring baking to life in everything we do, so you can do the same in your own home.

            </p>
            <Link to='/aboutus' className="inline-flex hero_more items-center text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Read More
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
        </div>
    </div>
</section>
</div>

<div className="w-full bg_hero mx-auto mb-12  rounded-lg shadow-md bg_header ">

        <div >
        <h2 className={styles.home_header}>Featured Categories </h2>
</div>
      </div>
        <Gallary />
        <div className="w-full bg_hero mx-auto mb-12  rounded-lg shadow-md bg_header ">
        <h2 className={styles.home_header}>Our Latest Recipes </h2>

      </div>
        <RecipeList recipe={loadedRecipes} />
        {/* <div className="recipe-card bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    
        <img className="rounded-t-lg" src={loadedRecipes[0][1].strMealThumb} alt={loadedRecipes[0][1].strMeal} />
   
    <div className="p-5">
        <Link to={"/single-recipe/"+loadedRecipes[0][1].idMeal}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {loadedRecipes.strMeal}</h5>
        
        <span className="inline-flex btn-card items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </span>
        </Link>
    </div>
</div> */}

    </div>
  )
}

export default Home