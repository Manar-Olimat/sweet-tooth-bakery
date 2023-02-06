import {useContext,useEffect, useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserAuthContext from '../../store/userAuthContext';
import axios from 'axios';
import logo from '../../images/Logo.png'
const MainNavigation = () => {
    const currentUser=sessionStorage.getItem('user_key');

    const authContext=useContext(UserAuthContext);
    const [isLogged,setIsLogged]=useState(true);
    const [loadedUser, setLoadedUser] = useState([]);
    // console.log(authContext.id);
    useEffect(() => {
setIsLogged(sessionStorage.getItem('user_key')!=null);
          //  get data from firebase api
axios.get(
    `https://sweettoothbakery-8fd88-default-rtdb.firebaseio.com/users/${currentUser}.json`)
    .then(response=>
      {
        //response.json() returns a promise as well 
        // so we have to work with another then to get data 
        return response.data;
  
      }).then(data=>{
  let users;
//   console.log(data);
    setLoadedUser(data);


  }

      );
console.log(loadedUser);
    
  },
  
  []);
  return (
    <header className='bg-navigation'>
        
<nav className=" border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
    <NavLink to='/' className="flex items-center"> 
        
            <img src={logo} className="logo " alt="Flowbite Logo" />
            <span className="self-center text-xl brand-name  whitespace-nowrap dark:text-white">
                Sweet <span className='brand-name-dif '>Tooth</span> Bakery
            </span>
        </NavLink>
       
        <div className="flex items-center">
       
 

   
        </div>
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
            <li>
                 <NavLink to='/' className="text-gray-900 second_nav dark:text-white hover:underline">Home</NavLink>
                    
                </li>
                <li>
                 <NavLink to='/all-recipes' className="text-gray-900 second_nav dark:text-white hover:underline"> All Recipes</NavLink>
                    
                </li>
                <li>
                <NavLink to='/aboutUs' className="text-gray-900 second_nav dark:text-white hover:underline"> About Us</NavLink>
                </li>
                <li>
                <NavLink to='/contact' className="text-gray-900 second_nav dark:text-white hover:underline"> Contact Us</NavLink>
                </li>
                {/* <li>
                <NavLink to='/profile' className="text-gray-900 dark:text-white hover:underline">Profile </NavLink>
                </li> */}
{isLogged?<li><NavLink to={'/profile/-NHY-351rOltJwt5jLvh'}>
<span className="inline-flex mt-6 btn-card header items-center px-3 py-2 text-sm font-medium text-center text-black rounded-lg hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {/* Welcome {loadedUser.name} */}
            <i class="fa-regular fa-user"></i>
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </span>
    </NavLink></li>:<li><NavLink to='/login'>
<span className="inline-flex mt-6 btn-card header items-center px-3 py-2 text-sm font-medium text-center text-black rounded-lg hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           {/* {!isLogged?'Login':'Welcome'+loadedUser.name}  */}
           <i class="fa-regular fa-user"></i>
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </span>
    </NavLink> </li> }
                
                
            </ul>
        </div>
    </div>
</nav>

    </header>
  )
}

export default MainNavigation