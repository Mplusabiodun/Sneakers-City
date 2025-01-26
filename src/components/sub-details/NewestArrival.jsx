import styles from "./NewestArrival.module.css";

export default function NewestArrival() {
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <h2>Brand</h2>
        <ul>
          <li>
            <input type="checkbox" name="nike" id="nike" />
            <label htmlFor="nike">Nike</label>
          </li>
          <li>
            <input type="checkbox" name="jordan" id="jordan" />
            <label htmlFor="jordan">Jordan</label>
          </li>
          <li>
            <input type="checkbox" name="nike" id="nike" />
            <label htmlFor="nike">Nike</label>
          </li>
          <li>
            <input type="checkbox" name="jordan" id="jordan" />
            <label htmlFor="jordan">Jordan</label>
          </li>
          <li>
            <input type="checkbox" name="nike" id="nike" />
            <label htmlFor="nike">Nike</label>
          </li>
          <li>
            <input type="checkbox" name="jordan" id="jordan" />
            <label htmlFor="jordan">Jordan</label>
          </li>
        </ul>
        <hr />
        <div>
          <h2>Price range</h2>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <p>25, 000RWF</p>
            <p>95, 000RWF</p>
          </div>
          <hr />
        </div>
        <div>
          <h2>Size</h2>
          <ul>
            <li>32</li>
            <li>32</li>
            <li>32</li>
            <li>32</li>
          </ul>
        </div>
      </div>
      <div className={styles.secondContainer}></div>
    </div>
  );
}
