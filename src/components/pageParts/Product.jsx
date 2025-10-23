
function Product({ name, description, isPreOrder, isSoldOut, image }) {
  return (
    <div className="all-product">
      <div className="product">
        <div className="pre-order">
          <p>PRE - ORDER</p>
        </div>
        <img src={image} alt="" />
        <div className="product-title">
          <h3>{name}</h3>
          <p>Sold Out</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Product;
