import Center from "./components/Center";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/pageParts/Hero";
import Product from "./components/pageParts/Product";
import ProductPack from "./components/pageParts/ProductPack";
import products from "./data/product-list";
import productpacks from "./data/product-packs-list";

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
      <Center />
      <div className="product-container">
        {productpacks.map((pack, index) => {
          return (
            <ProductPack
              key={index}
              name={pack.name}
              isPreOrder={pack.isPreOrder}
              isSoldOut={pack.isSoldOut}
              image={pack.img}
            />
          )
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
