import streamlineIcon from "../assets/streamline-icon.png";
import streamlineIconBoasting from "../assets/streamline-icon-boasting.png";
import streamlineIconOriginal from "../assets/original1.png";
import streamlineIconHot from "../assets/streamline-icon-hot-trending.png";

export default function GoodSneakers() {
  return (
    <div>
      <div>
        <img src={streamlineIcon} alt="streamline-icon" />
        <h2>Good sneakers take you good places</h2>
      </div>
      <div>
        <div>
          <img src={streamlineIconBoasting} alt="streamline-icon-boasting" />
          <h3>Currated & unique collection</h3>
        </div>
        <div>
          <img src={streamlineIconOriginal} alt="streamline-icon-original" />
          <h3>100% Original sneakers</h3>
        </div>
        <div>
          <img src={streamlineIconHot} alt="streamline-icon-hot-trending" />
          <h3>Buy the latest and define the trends</h3>
        </div>
      </div>
    </div>
  );
}
