import styles from "./Header.module.css";
import TextList from "./TextList";

function Header() {
  return (
    <div className={` ${styles.headerContainer} `}>
      <h1 class="xl:text-7xl sm:text-5xl lg:text-6xl text-3xl">
        <span className={`${styles.primaryHeading1} `}>Hello, Gidado</span>{" "}
        <br />
        <span className={styles.primaryHeading2}>
          How can I help you today ?
        </span>
      </h1>
      <TextList />
    </div>
  );
}

export default Header;
