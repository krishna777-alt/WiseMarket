import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import CategorySection from "./Components/CategorySection";
import Layout from "./Components/Layout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./Auth/AuthContext";
import Cart from "./Pages/Cart";
import Forbidden403 from "./Pages/Forbidden403";
import ProductUpload from "./Pages/ProductUpload";
import OrdersPage from "./Pages/Order";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/productUpload" element={<ProductUpload />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Forbidden403 />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
