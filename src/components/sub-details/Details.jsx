import heart from "../../assets/fi_heart.png";
import detail1 from "../../assets/detail1.png";
import detail2 from "../../assets/detail2.png";
import detail3 from "../../assets/detail3.png";
import detail4 from "../../assets/detail4.png";

import styles from "./Details.module.css";

export default function Details() {
  return (
    <div>
      <div>
        <div>
          <h2>Jordan Delata 2</h2>
          <img src={heart} alt="heart" />
        </div>
        <p>78, 000RWF</p>
        <div>
          <p>&lt;</p>
          <img src={detail1} alt="" />
          <p>&gt;</p>
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
      <div className="secondDIV">
        <div>
          <h2>Description</h2>
          <p>&#8593;</p>
        </div>
        <p>
          The Jordan Delta 2 offers a fresh, fearless take on the features you
          want: durability, comfort and an attitude that's Jurdan to the core.
          We updated design lines and swapped out some components. The 2 still
          have that clashing combination of suportive and space age-likes
          materials, with lots of different textures and heavy sticting to
          create a look that's both adventurous and iconic
        </p>
        <div>
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
        </div>
      </div>
    </div>
  );
}
