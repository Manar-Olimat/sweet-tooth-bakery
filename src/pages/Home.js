import {useState, useEffect} from 'react'
import Slider from '../components/Slider'
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
    'https://sweettoothbakery-8fd88-default-rtdb.firebaseio.com/recipes.json')
    .then(response=>
      {
        //response.json() returns a promise as well 
        // so we have to work with another then to get data 
        return response.data;
  
      }).then(data=>{
  const recipes=[];
  for (const key in data){
    const recipe={
      id:key,
      ...data[key]
    } ;
    recipes.push(recipe);
  }
  
        // so it wont display the recipe before data get fetched
  setIsLoading(false);
  setLoadedRecipes(recipes);
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
    <div className='container'>
        <Slider />
        <div className={styles.bg_header}>
        <h2 className={styles.home_header}>Featured Categories </h2>

      </div>
        <Gallary />
        <div className={styles.bg_header}>
        <h2 className={styles.home_header}>Our Latest Recipes </h2>

      </div>
        <RecipeList recipe={loadedRecipes} />
    </div>
  )
}

export default Home