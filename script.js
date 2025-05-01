import React from "react";
import { createRoot } from "react-dom/client";

import "./style.css";

function Card(props) {
  const { image, title, subTitle, price } = props;
  return (
    <div className="card">
      <img src={image} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{subTitle}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
}

// fetch("https://dummyjson.com/products/category/smartphones")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     const container2 = data.products.map((pro) => {
//       return Card({
//         key: pro.id,
//         image: pro.images[0],
//         title: pro.title,
//         subTitle: pro.brand,
//         price: pro.price,
//       });
//     });
//     const root = createRoot(document.getElementById("root"));
//     root.render(<div className="container">{container2}</div>);
//   });

// const container = [Card(1), Card(2), Card(3), Card(4), Card(5)];
// console.log("Hello world!!!");

const root = createRoot(document.getElementById("root"));
// root.render({
//   $$typeof: Symbol.for("react.element"),
//   type: Card,
//   ref: null,
//   props: {
//     image:
//       "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/2.webp",
//     title: "iPhone 13",
//     key: 1,
//     subTitle: "New Version",
//     price: 1100,
//   },
// });

// root.render(React.createElement(Card, {
//   image:
//     "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/2.webp",
//   title: "iPhone 13",
//   key: 1,
//   subTitle: "New Version",
//   price: 1100,
// }))

// root.render(
//   <Card
//     title="iPhone 12"
//     image="https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/2.webp"
//     brand="Apple"
//     price={1100}
//   />
// );

fetch("https://dummyjson.com/products/category/smartphones")
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return (
            <Card
              key={product.id}
              title={product.title}
              image={product.images[0]}
              subTitle={product.brand}
              price={product.price}
            />
          );
        })}
      </div>
    );
  });
