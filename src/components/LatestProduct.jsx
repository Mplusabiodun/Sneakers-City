import pumaRunning from "../assets/puma_running_sx.png";
import nikeBlue from "../assets/nike_blue.png";
import nikeAir from "../assets/nike_air_jordan.png";
import nikeWobler from "../assets/nike_wobler.png";

import classes from "./LatestProduct.module.css";

const explore = [
  { img: pumaRunning, imgName: "puma_running_sx" },
  { img: nikeBlue, imgName: "nike_blue" },
  { img: nikeAir, imgName: "nike_air_jordan" },
  { img: nikeWobler, imgName: "nike_wobler" },
];

export default function LatestProduct() {
  return (
    <div className={classes.container}>
      <div className={classes.upperContainer}>
        <h2>
          Puma <br />
          Running SX
        </h2>
        <p className={classes.about}>
          The shoe that moved mountains for eternity and still does so with a
          swift touch of modernism.
        </p>
        <p className={classes.price}>62,000RWF</p>
        <button>Add to cart</button>
      </div>
      <div>
        <img src={pumaRunning} alt="puma running sx" />
        <ul>
          {explore.map((latest) => (
            <li>
              <img src={latest.img} alt={latest.imgName} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
