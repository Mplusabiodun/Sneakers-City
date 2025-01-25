import adiddasBeluga from "../../assets/adiddas_beluga.png";
import nikeZoom from "../../assets/nike_zoom.png";
import nikeAirJordanXT from "../../assets/nike_air_jordan.png";
import nikeWobler from "../../assets/nike_wobler.png";

import classes from "./NewArrivals.module.css";

const allNewArrivals = [
  { imgSrc: adiddasBeluga, imgName: "Adiddas Beluga", price: 35000 },
  { imgSrc: nikeZoom, imgName: "Nike Zoom", price: 35000 },
  { imgSrc: nikeAirJordanXT, imgName: "Nike Air Jordan XT", price: 35000 },
  { imgSrc: nikeWobler, imgName: "Nike Wobler", price: 35000 },
];

export default function NewArrivals() {
  return (
    <div className={classes.newArrivals}>
      <h2>All the new arrivals</h2>
      <ul>
        {allNewArrivals.map((newArrival) => (
          <li className={classes.listNew} key={newArrival.imgName}>
            <img src={newArrival.imgSrc} alt={newArrival.imgName} />
            <h3>{newArrival.imgName}</h3>
            <p>{newArrival.price.toLocaleString()}RWF</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
