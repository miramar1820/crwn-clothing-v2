import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
    </div>
  );
};

const Products = () => {
  return (
    <div>
      <h2>Products</h2>
      <Routes>
        <Route path="/phone" element={<p>Phones</p>} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="products/*" element={<Products />} />
      </Route>
    </Routes>
  );
};

export default App;
