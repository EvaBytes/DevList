import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
