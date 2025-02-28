import heart from "../../assets/fi_heart.png";
import right_arrow from "../../assets/right_arrow.png";
import left_arrow from "../../assets/left_arrow.png";
import up_arrow from "../../assets/up_arrow.png";
import detail11 from "../../assets/detail11.png";
import detail1 from "../../assets/detail1.png";
import detail2 from "../../assets/detail2.png";
import detail3 from "../../assets/detail3.png";
import detail4 from "../../assets/detail4.png";

import styles from "./Details.module.css";

export default function Details() {
  return (
    <div className={styles.container}>
      <div className={styles.nameandpics}>
        <div className={styles.nameandheart}>
          <h2>Jordan Delata 2</h2>
          <img src={heart} alt="heart" />
        </div>
        <p className={styles.price}>78, 000RWF</p>
        <div className={styles.productImg}>
          <img className={styles.arrows} src={left_arrow} alt="" />
          <img id={styles.mainImg} src={detail11} alt="" />
          <img className={styles.arrows} src={right_arrow} alt="" />
        </div>
        <ul>
          <li>
            <img src={detail1} alt="" />
          </li>
          <li>
            <img src={detail2} alt="" />
          </li>
          <li>
            <img src={detail3} alt="" />
          </li>
          <li>
            <img src={detail4} alt="" />
          </li>
        </ul>
      </div>
      <div className={styles.descriptionCont}>
        <div className={styles.descriptionArrow}>
          <h2>Description</h2>
          <img src={up_arrow} alt="up_arrow" />
        </div>
        <p>
          The Jordan Delta 2 offers a fresh, fearless take on the features you
          want: durability, comfort and an attitude that's Jurdan to the core.
          We updated design lines and swapped out some components. The 2 still
          have that clashing combination of suportive and space age-likes
          materials, with lots of different textures and heavy sticting to
          create a look that's both adventurous and iconic.
        </p>
        <div>
          <hr />
          <h3>Size</h3>
          <ul className={styles.sizes}>
            <li>32</li>
            <li>32</li>
            <li>32</li>
            <li>32</li>
            <li>32</li>
            <li>32</li>
            <li>32</li>
            <li>32</li>
            <li>32</li>
          </ul>
          <div className={styles.addToCartCont}>
            <div className={styles.addAndSub}>
              <span>-</span>
              <span id={styles.number}>1</span>
              <span>+</span>
            </div>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
