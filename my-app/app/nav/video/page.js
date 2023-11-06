import styles from "../../page.module.css";
import Navbar from "../navbar.js";

export default function Videos() {
  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.nav}>
          <Navbar />
        </div>
      </div>

      <div className={styles.description}>
        <p>This will download a PDF EPK</p>
      </div>
    </>
  );
}
