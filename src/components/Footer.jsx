import twitter from "../assets/twitter_bird.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

export default function Footer() {
  return (
    <footer>
      <hr />
      <div>
        <img alt="Snaeker logo" />
        <h2>SC.</h2>
      </div>
      <p>
        We don't just sell shoes, we sell memories and collectibles. We collect
        the best in the best with an attention to all little details. We know
        that shoes speaks louder than words that's why we've mastered the
        science of god sneakers.
      </p>
      <div>
        <div>
          <p>Don't miss out-on-once-in-a-while-deals</p>
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
      </div>
    </footer>
  );
}
