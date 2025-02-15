
import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";
import productsData from "./data/products.json";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory ? product.category === selectedCategory : true)
  );

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="container mt-4">
      <h1 style={{color:'blue',fontSize:'36px',textTransform:'uppercase',fontWeight:'bold'}}>Product Listing</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;