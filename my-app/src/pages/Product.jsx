// import { Link } from "react-router-dom";

// function Products() {
//   const products = [
//     { id: 1, name: "Laptop" },
//     { id: 2, name: "Mouse" },
//     { id: 3, name: "Keyboard" },
//   ];

//   return (
//     <div>
//       <h1>Products</h1>
     

//       {products.map((product) => (
//         <div key={product.id}>
//           <Link to={`/product/${product.id}`}>
//             {product.name}
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Products;
import { Link } from "react-router-dom";

import laptop from "../assets/laptop.png";
import mouse from "../assets/mouse.jpg";
import keyboard from "../assets/keyboard.jpg";

function Products() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: "$999",
      image: laptop,
    },
    {
      id: 2,
      name: "Mouse",
      price: "$49",
      image: mouse,
    },
    {
      id: 3,
      name: "Keyboard",
      price: "$79",
      image: keyboard,
    },
  ];

  return (
    <>
      <section className="product-hero">
        <h1>Our Products</h1>
        <p>Choose your favorite product.</p>
      </section>

      <section className="product-section">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p className="price">{product.price}</p>

            <Link
              to={`/product/${product.id}`}
              className="product-btn"
            >
              View Details
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}

export default Products;