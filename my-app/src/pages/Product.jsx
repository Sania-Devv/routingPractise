const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" },
  { id: 3, name: "Keyboard" }
];
import { Link } from "react-router-dom";

function Products() {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Keyboard" },
  ];

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>
            {product.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;