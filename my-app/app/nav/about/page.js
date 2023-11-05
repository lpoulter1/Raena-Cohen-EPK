import styles from "../../page.module.css";
import Navbar from "../navbar";


export default function About() {
  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.nav}>
          <Navbar />
        </div>
        {/* <div className={styles.media}>
          <Media />
        </div> */}
      </div>

      <p>
        Raena Cohen is a singer and songwriter based in the UK. She has been
        writing songs since she was 12 years old and has been performing since
        she was 16. She has performed at venues such as the O2 Academy Isling
      </p>
      <div className={styles.description}></div>
    </>
  );
}
