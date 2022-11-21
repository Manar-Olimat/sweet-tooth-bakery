import {useState, useEffect} from 'react'
import styles from './AllRecipes.module.css';
import RecipeList from '../components/recipes/RecipeList'
import axios from 'axios';

const AllRecipes = () => {

  const [searchInput, setSearchInput] = useState('');
  const [dropdownhInput, setDropdownInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [filteredResultsCategory, setFilteredResultsCategory] = useState([]);

  const [isLoading, setIsLoading]=useState(true);
  const [loadedRecipes, setLoadedRecipes]=useState([]);
const filterCategory=(category)=>{
  if(category==='all'){
    return loadedRecipes;
  }
  else{
    const filteredData =  loadedRecipes.filter((item) => {
      // console.log(Object.values(item));
      return item.category.toLowerCase().includes(category.toLowerCase())
  })
setFilteredResultsCategory(filteredData);
  }
}
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
    // console.log(searchValue);
    const filteredData =  loadedRecipes.filter((item) => {
      // console.log(Object.values(item));
      return item.title.toLowerCase().includes(searchInput.toLowerCase())
  })
  setFilteredResults(filteredData)
}
else{
    setFilteredResults(loadedRecipes)
}
//   console.log(filteredResults);
}

  useEffect(() => {
    setIsLoading(true);
      setFilteredResults(loadedRecipes)

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
    <section>
     
  

  <div className={styles.bg_header}>
      <h2 className={styles.home_header}>Recipes </h2>
      
         
      </div>

      <div class="flex mt-6 md:order-2">
    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
      <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
      <span class="sr-only">Search</span>
    </button>
    <div class="relative hidden md:block">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Search icon</span>
      </div>
      <input type="text" onChange={(e) => searchItems(e.target.value)} id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
    </div>
    <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
      <span class="sr-only">Open menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>

    <div className="relative ml-6 w-full lg:max-w-sm">
            <select onChange={(e) => filterCategory(e.target.value)} className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Category</option>
                <option>all</option>
                <option>cakes</option>
                <option>cookies</option>
                <option>cupcake</option>
            </select>
        </div>

  </div>
      <RecipeList recipe={searchInput !=''? filteredResults: filteredResultsCategory}/>
    </section>
  )
}

export default AllRecipes