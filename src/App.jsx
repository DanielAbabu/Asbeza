import "./App.css";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Meal from "./pages/meal/Meal";
import Ingredient from "./pages/ingredient/Ingredient";
import "./styles/global.css";
import Signup from "./pages/signup/Signup";
import Mealdetail from "./pages/mealdetail/Mealdetail";
import Checkout from "./pages/checkout/Checkout";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import CheckoutProcess from "./components/checkoutprocess/CheckoutProcess";

export default function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="contentcontainer">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/meal",
          element: <Meal />,
        },
        {
          path: "/mealdetail",
          element: <Mealdetail />,
        },
        {
          path: "/ingredient",
          element: <Ingredient />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/checkoutprocess",
          element: <CheckoutProcess />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/Signup",
      element: <Signup />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
