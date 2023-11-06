import styles from "../../page.module.css";
import Navbar from "../navbar";

export default function About() {
  return (
    <>
    
      <div className={styles.topbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
      <main className={styles.text}>
        <p>
          <b>*Sample Text*</b> Raena Cohen is an exceptionally talented singer and
          artist who has captivated audiences worldwide with her enchanting
          voice and soulful performances. With a voice that effortlessly
          combines power and emotion, Raena has established herself as a rising
          star in the music industry. Her unique ability to convey a wide range
          of emotions through her music makes her a truly captivating and
          relatable artist. Hailing from a diverse musical background, Raena's
          influences span various genres, from jazz and soul to pop and R&B. Her
          artistry is a blend of these influences, resulting in a distinctive
          and unforgettable sound that resonates with fans of all musical
          tastes. With a rich and expressive vocal range, Raena Cohen's
          performances are a journey through the depths of human experience,
          touching the hearts of listeners and leaving an indelible mark on
          their souls. As she continues to grow and evolve as an artist, Raena
          is poised to make a lasting impact on the music world, and her
          dedication to creating music that speaks to the soul is sure to
          resonate with fans for years to come. <b>*Sample Text*</b>
        </p>
      </main>
      </div>
    </>
  );
}
