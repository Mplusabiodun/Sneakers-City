import streamlineIcon from "../../assets/streamline-icon.png";
import streamlineIconBoasting from "../../assets/streamline-icon-boasting.png";
import streamlineIconOriginal from "../../assets/original1.png";
import streamlineIconHot from "../../assets/streamline-icon-hot-trending.png";

import classes from "./Goodsneakers.module.css";

export default function GoodSneakers() {
  return (
    <div className={classes.container}>
      <div className={classes.first_div}>
        <div>
          <img src={streamlineIcon} alt="streamline-icon" />
          <h2>
            Good sneakers <br />
            take you good places
          </h2>
        </div>
        <p>look no further, this is where you find the best pair!</p>
      </div>
      <div className={classes.second_div}>
        <div className={classes.currated}>
          <img src={streamlineIconBoasting} alt="streamline-icon-boasting" />
          <h3>
            Currated <br /> & unique collection
          </h3>
        </div>
        <div className={classes.original}>
          <img src={streamlineIconOriginal} alt="streamline-icon-original" />
          <h3>100% Original sneakers</h3>
        </div>
        <div className={classes.latest_trends}>
          <img src={streamlineIconHot} alt="streamline-icon-hot-trending" />
          <h3>
            Buy the latest <br />
            and define the trends
          </h3>
        </div>
      </div>
    </div>
  );
}
