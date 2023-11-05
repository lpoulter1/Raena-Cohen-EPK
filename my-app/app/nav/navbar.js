import Media from "./media/media";
import Header from "./header/header";
import styles from "../page.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div >
          <Media />
        </div>
        <header className={styles.banner} role="banner">
          <h1 className={styles.title}>Raena </h1>
          <h1 className={styles.title}> Cohen</h1>
        </header>
        <div className={styles.nav_routes}>
          <Header />
        </div>
      </nav>
    </>
  );
}
