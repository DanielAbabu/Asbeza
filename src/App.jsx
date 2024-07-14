import './App.css'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';
import Meal from './pages/meal/Meal';
import Ingredient from './pages/ingredient/Ingredient';
import Signin from './pages/signin/Signin';
import './styles/global.css'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

export default function App() {
  
  const Layout = ()=>{
    return(
      <div className='main'>
        <Navbar/>
        <div className="contentcontainer">
            <Outlet/>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path:"/",
          element: <Home/>
        },
        {
          path: "/meal",
          element: <Meal/>,
        },
        {
          path: "/ingredient",
          element: <Ingredient/>,
        },]   
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/signin",
      element: <Signin/>
    }
  ]);

  
  return (        
    <>
      <RouterProvider router={router}/>
    </>    
  )
}
