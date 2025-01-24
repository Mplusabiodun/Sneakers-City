import sneakerLogo from "../assets/logo.png";
import twitter from "../assets/twitter_bird.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <hr />
      <div className={classes.logo}>
        <img src={sneakerLogo} alt="Snaeker logo" />
        <h2>SC.</h2>
      </div>
      <p className={classes.footerwords}>
        We don't just sell shoes, we sell memories and collectibles. We collect
        the best in the best with an attention to all little details. We know
        that shoes speaks louder than words that's why we've mastered the
        science of god sneakers.
      </p>
      <div className={classes.dontmiss_support_copyright}>
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
        <p>Support line: +250 788 467 808</p>
        <p>Copyright 2021 Sneaker City ltd</p>
      </div>
    </footer>
  );
}
