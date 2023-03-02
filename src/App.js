import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";

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
        <Route path="auth" element={<Authentication />} />
        <Route path="products/*" element={<Products />} />
      </Route>
    </Routes>
  );
};

export default App;
