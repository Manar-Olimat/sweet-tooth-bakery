import { useContext, useState, useEffect } from "react";
import UserAuthContext from '../store/userAuthContext';
import axios from "axios";
import { Link, useParams,useNavigate } from 'react-router-dom';

const UserData = () => {
    const navigate=useNavigate();
const currentUser=sessionStorage.getItem('user_key');
    const params = useParams();
    const authContext = useContext(UserAuthContext);
    const id=JSON.stringify(sessionStorage.getItem('user_key'));
    const [loadedUser, setLoadedUser] = useState([]);
    // console.log(authContext.id);
    useEffect(() => {

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


function logout(e){
    e.preventDefault();
sessionStorage.removeItem('user_key');
navigate('/');

}
    return (
        <section>

            <div className="flex flex-col items-center  rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover flex w-full rounded-lg rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={loadedUser.img} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 flex text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{loadedUser.name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Email : </strong>{loadedUser.email}</p>
                
                    <button type="button" onClick={logout} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Log Out</button>

                </div>
            </div>


        </section>
    )
}

export default UserData