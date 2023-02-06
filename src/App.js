import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllRecipes from './pages/AllRecipes';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SingleRecipe from './pages/SingleRecipe';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Test from './components/test';

function App() {
  return (
    // <>
    // <test />
    // </>
    <Layout> 
      < Test />
    {/* <Routes>
    <Route  
          path='/'
          element={
            <Home />
          } />

    <Route  
          path='/all-recipes'
          element={
            <AllRecipes />
          } />

<Route  
          path='/aboutUs'
          element={
            <AboutUs />
          } />

<Route  
          path='/contact'
          element={
            <Contact />
          } />

<Route  
          path='/profile/'
          element={
            <Profile />
          } />

<Route  
          path='/profile/:id'
          element={
            <Profile />
          } />


        <Route 
        path='/login'
        element={
          <Login />
        }/>

<Route 
        path='/signup'
        element={
          <Signup />
        }/>

        <Route  
          path='/single-recipe/:id'
          element={
            <SingleRecipe />
          } />
       
          
        
      </Routes> */}
      </Layout>
  );
}

export default App;
