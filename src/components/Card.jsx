function Card(props) {
  const product = props.product;
  const dispatch = props.dispatch;

  return (
    <div className="card col-4 col-md-4 col-lg-3">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        <p className="card-text stock"></p>
        <button
          className="btn btn-dark"
          onClick={() => {
            dispatch({ type: "ADD_PRODUCT", id: product.id });
          }}
        >
          Agregar {product.name} a carrito
        </button>
      </div>
    </div>
  );
}

export default Card;
