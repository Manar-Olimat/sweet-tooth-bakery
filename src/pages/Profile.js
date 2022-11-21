import TabsRender from '../components/Tabs';
import {useContext, useEffect} from 'react'
import { Link, NavLink,useNavigate } from 'react-router-dom';
import UserAuthContext from '../store/userAuthContext';

const Profile = () => {
      const authContext=useContext(UserAuthContext);
      const navigate=useNavigate();
useEffect(()=>{
  if (!authContext.userIsLogged())
  {
    navigate('/login');
  }
},[]);
  
  return (
    <section>

<TabsRender/>

    </section>
  )
}

export default Profile