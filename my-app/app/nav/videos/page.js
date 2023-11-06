import styles from "../../page.module.css";
import Navbar from "../navbar.js";

export default function Videos() {
  return (
    <>
      <div className={styles.topbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <main className={styles.text}>
          <p>A selection of vidoes....</p>
        </main>
      </div>
    </>
  );
}
