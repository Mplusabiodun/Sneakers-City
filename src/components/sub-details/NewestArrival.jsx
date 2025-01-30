import styles from "./NewestArrival.module.css";

import jordanDelta2 from "../../assets/jordan_delta2.png";
import nike_air_jordanXT from "../../assets/nike_air_jordanXT.png";
import rx_intl_game from "../../assets/rx_intl_game.png";

export default function NewestArrival() {
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <h3>Brand</h3>
        <ul>
          <li>
            <input type="checkbox" name="nike" id="nike" />
            <label htmlFor="nike">Nike</label>
          </li>
        </ul>
        <hr />
        {/* <div> */}
        <h3>Price range</h3>
        <div className={styles.range}>
          <div className={styles.startrange}></div>
          <div className={styles.centerrange}></div>
          <div className={styles.endrange}></div>
        </div>
        <div className={styles.pricerange}>
          <p>25, 000RWF</p>
          <p className={styles.pricerangesecond}>95, 000RWF</p>
        </div>
        <hr />
        {/* </div> */}
        <div>
          <h3>Size</h3>
          <ul className={styles.sizes}>
            <li>32</li>
          </ul>
        </div>
      </div>
      <div className={styles.secondContainer}>
        <h2>The new arrivals</h2>
        <ul className={styles.listOfNew}>
          <li>
            <img src={jordanDelta2} alt="jordan delta 2" />
            <h3>Jordan Delta 2</h3>
            <p>78,000RWF</p>
          </li>
          <li>
            <img src={nike_air_jordanXT} alt="nike_air_jordanXT" />
            <h3>Nike Air Jordan XT</h3>
            <p>35,000RWF</p>
          </li>
          <li>
            <img src={rx_intl_game} alt="rx intl game" />
            <h3>RS-X-INTL-Games</h3>
            <p>35,000RWF</p>
          </li>
          <li>
            <img src={rx_intl_game} alt="rx intl game" />
            <h3>RS-X-INTL-Games</h3>
            <p>35,000RWF</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
