import styles from "./page.module.css";
import NewSingle from "./components/new-single/new-single";
import Navbar from "./nav/navbar";

export default function Home() {
  return (
    <>
      <body className={styles.body}>

        {/* <nav className={styles.navbar}> */}
      
            <Navbar />
        
        {/* </nav> */}

        <main className={styles.main}>
          {/* <div className={styles.titlediv}>
            <h1 className={styles.title}>Raena </h1>
            <h1 className={styles.title}> Cohen</h1>
          </div> */}
          <div className={styles.music}>
            <NewSingle
              image={"/275300387_507048927582161_3019485194852510888_n.jpg"}
              linktree={"https://linktr.ee"}
              alt={"new single art cover"}
            />
            <NewSingle
              image={"/316027264_150873391019569_7052134185861972073_n.jpg"}
              linktree={"https://linktr.ee"}
              alt={"new single art cover"}
            />
            <NewSingle
              image={"/374613322_290312697075637_434127286051300788_n.jpg"}
              linktree={"https://linktr.ee"}
              alt={"new single art cover"}
            />
            <NewSingle
              image={"/375175520_290311167075790_9160990543390696182_n.jpg"}
              linktree={"https://linktr.ee"}
              alt={"new single art cover"}
            />
            <NewSingle
              image={"/376414746_294087956698111_3908146597500451426_n.jpg"}
              linktree={"https://linktr.ee"}
              alt={"new single art cover"}
            />
            <NewSingle
              image={"/275300387_507048927582161_3019485194852510888_n.jpg"}
              linktree={"https://linktr.ee"}
              alt={"new single art cover"}
            />
          </div>
        </main>
      </body>
    </>
  );
}
