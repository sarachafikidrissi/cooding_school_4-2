
import { BiTrash } from "react-icons/bi";
import { GrUpdate } from "react-icons/gr";
import { IoIosAdd } from "react-icons/io";
import { IoSad } from "react-icons/io5";
import Todo from "./pages/Todo";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import ProductShow from "./pages/ProductShow";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import Comments from "./pages/Comments";
import HomePage from "./pages/HomePage";
import { DataJson } from "./constants";
import Dashboard from "./pages/Dashboard";
import { MyProvider } from "./context";



function App() {


  return (
    <MyProvider>
    <Routes>
      <Route path="/*" element={<NotFound />}/>
      <Route path="/" element={<HomePage users={DataJson.UsersProfiles} />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/comments" element={<Comments />}/>
      <Route path="/todo" element={<Todo />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<ProductShow />}/>
    </Routes>
    </MyProvider>


  );
}

export default App;
