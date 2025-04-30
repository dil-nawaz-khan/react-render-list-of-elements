import { createRoot } from "react-dom/client";

import "./style.css";

function Card(key,image, title, subTitle, price) {
  return (
    <div key={key} className="card">
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



fetch('https://dummyjson.com/products/category/smartphones')
.then(res => res.json())
.then((data)=>{
    console.log(data)
    const container2 = data.products.map(pro=> {
        return Card(pro.id,pro.images[0], pro.title, pro.brand, pro.price)
    })
    const root = createRoot(document.getElementById("root"));
    root.render(<div className="container">{container2}</div>);
});



// const container = [Card(1), Card(2), Card(3), Card(4), Card(5)];



// console.log("Hello world!!!");


