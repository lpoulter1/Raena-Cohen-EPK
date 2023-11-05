import styles from "../../page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Media() {
  return (
    <>
      <div className={styles.socials}>
        <Link
          href="https://open.spotify.com/artist/4eJ2JIZ4cXZ9Ht13jmXjAF"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons8-spotify-50.png"
            // src="/icons8-spotify.gif"
            width={40}
            height={40}
            alt="spotify logo"
          />
        </Link>

        <Link
          href="https://soundcloud.com/ladyraeartist"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons8-soundcloud-50.png"
            width={40}
            height={40}
            alt="soundcloud logo"
          />
        </Link>
        <Link
          href="https://www.facebook.com/ladyraeartist/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons8-facebook-50.png"
            width={40}
            height={40}
            alt="facebook logo"
          />
        </Link>
        <Link
          href="https://www.youtube.com/@raenacohen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons8-youtube-48.png"
            width={40}
            height={40}
            alt="youtube logo"
          />
        </Link>
        <Link
          href="https://www.boomplay.com/artists/75151099"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons8-boomplay-50.png"
            width={40}
            height={40}
            alt="boomplay logo"
          />
        </Link>
        <Link
          href="https://www.instagram.com/ladyraeartist/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons8-instagram-50.png"
            width={40}
            height={40}
            alt="boomplay logo"
          />
        </Link>
      </div>
    </>
  );
}
