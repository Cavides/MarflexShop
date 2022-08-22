import { useEffect, useState } from "react";
import { getProducts } from "../../services/products";
import Card from "../../Components/Card/card";

import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import "./products.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProducts();
      setProducts(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Navbar />

      <div className="products">
        {products.map((product) => {
          return <Card product={product} key={product.id} />;
        })}
      </div>

      <Footer />
    </div>
  );
}

export default Products;
