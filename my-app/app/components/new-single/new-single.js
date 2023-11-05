// import Styles from "./new-single.module.css";
import styles from "../../page.module.css";
import Image from "next/image";

export default function NewSingle({ image, linktree, alt }) {
  return (
    <>
      <div className={styles.single}>
        <a href={linktree} target="_blank" rel="noopener noreferrer">
          <Image
            src={image}
            width={600}
            height={600}
            alt={alt}
            layout="responsive"
          />
        </a>
      </div>
    </>
  );
}
