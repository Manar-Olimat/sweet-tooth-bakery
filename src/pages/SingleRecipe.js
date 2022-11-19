import {useState,useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ReviewForm from '../components/reviews/ReviewForm';
import ReviewItem from '../components/reviews/ReviewItem';




const SingleRecipe = () => {
  const params = useParams();

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
    if(key === params.id){
    const recipe={
      id:key,
      ...data[key]
    } ;
    recipes.push(recipe);}
  }
  console.log(recipes[0]);
        // so it wont display the recipe before data get fetched
  setIsLoading(false);
  setLoadedRecipes(recipes[0]);
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
// split ingredients and steps
const ingredients_split=loadedRecipes.ingredients.split('-');
const steps_split=loadedRecipes.steps.split('-');
console.log(ingredients_split);
console.log(steps_split);

const ingredients=ingredients_split.map((item)=><li key={Math.random()} className='mb-5'>{item}</li>);
const steps=steps_split.map((item)=><li key={Math.random()} className='mb-5'>{item}</li>);





  return (
    <section className='w-full flex'>
 {/* <!-- Posts Section --> */}
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">

            <article className="flex flex-col shadow my-4">

         
                {/* <!-- Article Image --> */}
                <div className='article-img'>
                    <img src={loadedRecipes.image} alt={loadedRecipes.title}/>
                </div>

               <div className="bg-white flex flex-col justify-start p-6">
                    {/* <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a> */}
                    <h3 className="text-3xl font-bold text-start underline pb-4">{loadedRecipes.title}</h3>
                    
                    <p className="pb-6">
                    {loadedRecipes.description}</p>
                </div>
            </article>

            <article className="flex flex-col w-full shadow my-4">
                {/* <!-- Ingredients --> */}
              
                <div className="bg-white flex flex-col justify-start p-6">
                    {/* <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a> */}
                    <h3 className="text-3xl font-bold text-start underline pb-4">Ingredients</h3>
                    
                    <ul className="pb-6 text-start font-bold   ml-6">
                  
                  {ingredients}
                  
                  </ul>
                </div>
            </article>

            <article className="flex flex-col w-full shadow my-4">
                {/* <!-- Steps --> */}
              
                <div className="bg-white flex flex-col justify-start p-6">
                    <h3 className="text-3xl font-bold text-start underline pb-4">Steps</h3>
                    
                    <ul className="pb-6 text-start font-bold   ml-6">
                  {steps}
                  
                  </ul>
                </div>
            </article>
        

            <article className="flex flex-col w-full shadow my-4">
             
             <ReviewForm />
{/* REVIEWS */}

<ReviewItem />
    
</article>

        </section>

        {/* <!-- Sidebar Section --> */}
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">

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

        </aside>

   
    </section>
  )
}

export default SingleRecipe