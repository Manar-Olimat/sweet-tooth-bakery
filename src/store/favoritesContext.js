import { createContext , useState} from 'react'
import axios from 'axios';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorites: (favoriteRecipe)=>{},
    removeFavorites: (recipeId)=>{},
    itemIsFavorites: (recipeId)=>{}

});

// pass the context to other interested components
// it is responsebel for updating the context value
export const FavoritesContextProvider = (props) => {
    
    const [userFavorites, setUserFavorites] = useState([]);
    // const [totalFavorites, setTotalFavorites] = useState();

    function addFavoritesHandler(favoriteRecipe){
setUserFavorites((prevUserFavorites)=>{
return prevUserFavorites.concat(favoriteRecipe)
});
console.log(favoriteRecipe);
axios.post('https://sweettoothbakery-8fd88-default-rtdb.firebaseio.com/favRecipes.json', favoriteRecipe)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
    }

    function removeFavoritesHandler(recipeId){
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.filter(item => item.idMeal !==recipeId)

        });
let id='';
        // get id 
        axios.get(
            'https://sweettoothbakery-8fd88-default-rtdb.firebaseio.com/favRecipes.json')
            .then(response => {
                //response.json() returns a promise as well 
                // so we have to work with another then to get data 
                return response.data;

            }).then(data => {
                const recipes = [];
            
                for (const key in data){
                    // console.log(params.id);
                    if(data[key].id ==recipeId){
                    id=key;
                }
                  }
                
                console.log(id);
            });

        // DELETE request using axios inside useEffect React hook
    axios.delete(`https://sweettoothbakery-8fd88-default-rtdb.firebaseio.com/favRecipes/${id}.json`)
    .then(() => console.log('Delete successful'));

    }


    function itemIsFavoritesHandler(recipeId){
        // if some item in the array matches our condition
return userFavorites.some(item=>item.idMeal === recipeId );
    }

    const context={
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorites: addFavoritesHandler,
        removeFavorites: removeFavoritesHandler,
        itemIsFavorites: itemIsFavoritesHandler




    };


    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext