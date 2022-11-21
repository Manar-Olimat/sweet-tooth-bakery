import { useState, createContext,useEffect } from 'react'
import axios from 'axios';

const UserAuthContext = createContext({
    // favorites: [],
    // totalFavorites: 0,
    // addFavorites: (favoriteMeetup)=>{},
    // removeFavorites: (meetupId)=>{},
    userName:'',
    userEmail:'',
    id:'',
    userStateb:true,

    userIsLogged:(state)=>{},
    logoutUser: ()=>{},

    // userIsLogged: ()=>{}

});

export const UserAuthContextProvider = (props) => {
     const [userId , setUserId]=useState();
    const [userName , setUserName]=useState();
    const [userEmail , setUserEmail]=useState();
    // const [userState , setUserState]=useState('false');
    
let stateb=false;
    
    function userIsLogged(){
        if(sessionStorage.getItem('user_key')!= null)
            {
                return true;
            }
            else
                {
                    return false;
                }
        // stateb=state;
        // console.log(stateb);

    }
    //get id from session// current loggedIn user
    function getUserId(){
        return JSON.stringify(sessionStorage.getItem('user_key'));
    }

    
const user_ID=getUserId();
// console.log(user_ID);
   
          function logoutUser(){
            sessionStorage.removeItem('user_key');
            setUserId('');
            setUserName('');
            setUserEmail('');
            window.location.reload(false);

          }

useEffect(()=>{
    setUserId(getUserId());
    // console.log(JSON.stringify(sessionStorage.getItem('user_key')));
    // console.log(getUserId());
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
// console.log(userState);
},[]);


 const context={

    userName:userName,
    userEmail:userEmail,
    id:user_ID,
    userState:stateb,
    userIsLogged:userIsLogged,
    logoutUser: logoutUser,

    
 };

    return (
        <UserAuthContext.Provider value={context} >
            {props.children}
        </UserAuthContext.Provider>
    )
}

export default UserAuthContext