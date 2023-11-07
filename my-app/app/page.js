import styles from "./page.module.css";
import NewSingle from "./components/new-single/new-single";
import Navbar from "./nav/navbar.js";

export default function Home() {
  return (
    <>
      <body className={styles.body}>
        <Navbar />

        <main className={styles.main}>
          <div className={styles.music}>
            <NewSingle
              image={"/Weighs down cover art-1500(upsized).jpg"}
              linktree={"https://tr.ee/IZ_r-Ckjd8"}
              alt={"Weighs Down cover art"}
            />
            <NewSingle
              image={"/See the Light cover art-1500.jpg"}
              linktree={"https://tr.ee/EIYp7t9K3t"}
              alt={"See The Light cover art"}
            />
            <NewSingle
              image={"/Sweetest Fiction RMX-1500.JPG"}
              linktree={
                "https://soundcloud.com/ladyraeartist/lady-rae-x-c3b-sweetest-fiction-remix"
              }
              alt={"Sweetest Fiction Remix cover art"}
            />
            <NewSingle
              image={"/Sweetest Fiction cover-1500.jpg"}
              linktree={
                "https://soundcloud.com/ladyraeartist/sweetest-fiction-oration-ep "
              }
              alt={"Sweetest-Fiction-cover art"}
            />
            <NewSingle
              image={"/Freedom cover-1500.jpg"}
              linktree={
                "https://soundcloud.com/ladyraeartist/lady-rae-ft-oration-freedom"
              }
              alt={"Freedom single art cover"}
            />
          </div>
        </main>
      </body>
    </>
  );
}
