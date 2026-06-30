import { useParams } from "react-router-dom";

import laptop from "../assets/laptop.png";
import mouse from "../assets/mouse.jpg";
import keyboard from "../assets/keyboard.jpg";

function ProductDetail() {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: "$999",
      image: laptop,
      description:
        "High-performance laptop with the latest processor, 16GB RAM and 512GB SSD. Perfect for work, study and gaming.",
    },
    {
      id: 2,
      name: "Gaming Mouse",
      price: "$49",
      image: mouse,
      description:
        "Ergonomic gaming mouse with RGB lighting and adjustable DPI for smooth performance.",
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      price: "$79",
      image: keyboard,
      description:
        "Premium mechanical keyboard with RGB backlight and durable switches for comfortable typing.",
    },
  ];

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <section className="detail-section">
      <div className="detail-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="detail-content">
        <h1>{product.name}</h1>

        <h2>{product.price}</h2>

        <p>{product.description}</p>

        <button className="cart-btn">
          Add To Cart
        </button>
      </div>
    </section>
  );
}

export default ProductDetail;