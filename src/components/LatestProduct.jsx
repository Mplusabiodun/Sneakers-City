import NewArrivals from "./NewArrivals";

import pumaRunning from "../assets/puma_running_sx.png";
import nikeBlue from "../assets/nike_blue.png";
import nikeAir from "../assets/nike_air_jordan.png";
import nikeWobler from "../assets/nike_wobler.png";
import adiddasGreen from "../assets/Adidas-Superstar1.png";
import adiddasRed from "../assets/Adidas-Superstar2.png";
import adiddasBlue from "../assets/Adidas-Superstar3.png";
import next from "../assets/next_1.png";

import classes from "./LatestProduct.module.css";

const explore = [
  { img: pumaRunning, imgName: "puma_running_sx" },
  { img: nikeBlue, imgName: "nike_blue" },
  { img: nikeAir, imgName: "nike_air_jordan" },
  { img: nikeWobler, imgName: "nike_wobler" },
];
const sneakersYouWant = [
  { adiddas: adiddasGreen, adiddasName: "adidas-Superstar-green" },
  { adiddas: adiddasRed, adiddasName: "adidas-Superstar-red" },
  { adiddas: adiddasBlue, adiddasName: "adidas-Superstar-blue" },
];

export default function LatestProduct() {
  return (
    <>
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
        <div className={classes.lowerContainer}>
          <div className={classes.imgDiv}>
            <img src={pumaRunning} alt="puma running sx" />
          </div>
          <ul>
            {explore.map((latest) => (
              <li key={latest.imgName}>
                <img src={latest.img} alt={latest.imgName} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={classes.findthatsneaker}>
        <ul className={classes.sneakers}>
          {sneakersYouWant.map((sneakers) => (
            <li key={sneakers.adiddasName}>
              <img src={sneakers.adiddas} alt={sneakers.adiddasName} />
            </li>
          ))}
        </ul>
        <p>
          Find that <br />
          sneaker you want
          <span>
            <img src={next} alt="next" />
          </span>
        </p>
      </div>
      <NewArrivals />
    </>
  );
}
