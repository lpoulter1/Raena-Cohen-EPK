import Link from "next/link";
import styles from "../../page.module.css";

export default function Header() {
  return (
    <>
      {/* <div className={styles.card}>
        <Link href="/">Home</Link>
      </div> */}

      <div className={styles.card}>
        <Link href="../../nav/about">About</Link>
      </div>
      <div className={styles.card}>
        <Link href="../../nav/videos">Videos</Link>
      </div>
      <div className={styles.card}>
        <Link href="../../nav/upcoming">Upcoming</Link>
      </div>
      <div className={styles.card}>
        <Link href="../../nav/contact">Contact</Link>
      </div>
    </>
  );
}
