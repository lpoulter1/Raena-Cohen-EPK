import styles from "../../page.module.css";
import Header from "../header/header.js";
import Media from "../../components/media/media.js";

export default function Videos() {
  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.nav}>
          <Header />
        </div>
        <div className={styles.media}>
          <Media />
        </div>
      </div>

      <div className={styles.description}>
        <p>This will download a PDF EPK</p>
      </div>
    </>
  );
}
