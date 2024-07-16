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
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Payment from "./pages/payment/Payment";
import CheckAddress from "./components/checkaddress/CheckAddress";
import Receipt from "./pages/receipt/Receipt";
import EditProfile from "./pages/editprofile/EditProfile";
import ReceiptHistory from "./pages/recieptHistory/RecieptHistory";
import ReceiptDetail from "./pages/recieptdetail/ReceiptDetail";
import AddMeal from "./pages/addmeal/AddMeal";
import AddIngredient from "./pages/addingredient/AddIngredient";
import { CartProvider } from "./components/cartcontext/cartcontext";
import { AuthProvider } from "./contexts/AuthContext";


export default function App() {
  const Layout = () => {
    return (
      <div className="main">
        <CartProvider>
          <Navbar />
          <div className="contentcontainer">
            <Outlet />
          </div>
          <Footer />
        </CartProvider>
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
          path: "/editprofile",
          element: <EditProfile />,
        },
        {
          path: "/payment",
          element: <Payment />,
        },
        {
          path: "/address",
          element: <CheckAddress />,
        },
        {
          path: "/receipt",
          element: <Receipt />,
        },
        {
          path: "/receiptHistory",
          element: <ReceiptHistory />,
        },
        {
          path: "/receiptdetail",
          element: <ReceiptDetail />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/addmeal",
      element: <AddMeal />,
    },
    {
      path: "/addingredient",
      element: <AddIngredient />,
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
