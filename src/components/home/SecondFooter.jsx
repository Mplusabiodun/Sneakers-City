import twitter from "../../assets/twitter_bird.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";

import classes from "./SecondFooter.module.css";

export default function () {
  return (
    <div className={classes.dontmiss_support_copyright}>
      <hr />
      <div className={classes.dontmiss}>
        <p>Don't miss out-on-once-in-a-while-deals:</p>
        <ul>
          <li>
            <img src={twitter} alt="twitter" />
          </li>
          <li>
            <img src={instagram} alt="instagram" />
          </li>
          <li>
            <img src={facebook} alt="facebook" />
          </li>
        </ul>
      </div>
      <div className={classes.support_copyright}>
        <p>Support line: +250 788 467 808</p>
        <p>Copyright 2021 Sneaker City ltd</p>
      </div>
    </div>
  );
}
