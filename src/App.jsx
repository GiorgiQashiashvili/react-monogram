import Header from "./components/Header";
import Hero from "./components/pageParts/Hero";
import Product from "./components/pageParts/Product";
import products from "./data/product-list";

function App() {
  return (
    <div className="main">
      <div className="head">
        <Header />
        <Hero />
      </div>
      <div className="product-container">
        {products.map((product, index) => {
          return (
            <Product
              key={index}
              name={product.name}
              description={product.description}
              isPreOrder={product.isPreOrder}
              isSoldOut={product.isSoldOut}
              image={product.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
