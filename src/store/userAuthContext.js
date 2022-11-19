import { useState, createContext } from 'react'
import axios from 'axios';

const UserAuthContext = createContext({
    // favorites: [],
    // totalFavorites: 0,
    // addFavorites: (favoriteMeetup)=>{},
    // removeFavorites: (meetupId)=>{},
    userName:'',
    userEmail:'',
    logoutUser: ()=>{},

    userIsLogged: ()=>{}

});

export const UserAuthContextProvider = (props) => {

    const [userId , setUserId]=useState();
    const [userName , setUserName]=useState();
    const [userEmail , setUserEmail]=useState();

    
    function userIsLogged(){
        if(sessionStorage.getItem('user_key')!= null)
            {
                return true;
            }
            else
                {
                    return false;
                }

    }
    //get id from session// current loggedIn user
    function getUserId(){
        return sessionStorage.getItem('user_key');
    }

    setUserId(getUserId());


    //  get data from firebase api
    axios.get(
        'https://sweettoothbakery-8fd88-default-rtdb.firebaseio.com/users.json')
        .then(response=>
          {
            //response.json() returns a promise as well 
            // so we have to work with another then to get data 
            return response.data;
      
          }).then(data=>{
      const loggedUser=[];
      
      for (const key in data){
        if(key === userId){
        const user={
          id:key,
          ...data[key]
        } ;
        loggedUser.push(user);}
      }
      setUserEmail(loggedUser.email);
      setUserName(loggedUser.name);
          });

          function logoutUser(){
            sessionStorage.removeItem('user_key');
            setUserId('');
            setUserName('');
            setUserEmail('');
            window.location.reload(false);

          }

 const context={

    userName:userName,
    userEmail:userEmail,
    logoutUser: logoutUser,

    userIsLogged:userIsLogged
 };

    return (
        <UserAuthContext.Provider value={context} >
            {props.children}
        </UserAuthContext.Provider>
    )
}

export default UserAuthContext