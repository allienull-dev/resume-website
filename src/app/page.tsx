import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/tofuNoBackgorund.png"
          alt="Tofu :)"
          width={250}
          height={500}
          priority
        />
      </main>
    </div>
  );
}
