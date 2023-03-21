import Image from "next/image";
import styles from "./Loading.module.css";

export function Loading() {
  return (
    <div className={styles.container}>
      <Image
        width={70}
        height={70}
        className={styles.loadingImg}
        src="/icons/loading-gif.gif"
        alt="Loading image"
      />
    </div>
  );
}
