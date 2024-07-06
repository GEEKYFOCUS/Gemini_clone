import useUser from "../features/authentication/useUser";
import styles from "./Header.module.css";
import TextList from "./TextList";

function Header() {
  // const { user } = useUser();
  // console.log(user);
  const {
    user: {
      user_metadata: { fullName },
    },
  } = useUser();

  const {
    user: {
      user_metadata: { avatar_url, full_name },
    },
  } = useUser();

  console.log(avatar_url, full_name);
  const userName = fullName?.split(" ")[1] || full_name?.split(" ")[1];
  return (
    <div className={` ${styles.headerContainer} `}>
      <h1 class="xl:text-7xl sm:text-5xl lg:text-6xl text-3xl">
        <span className={`${styles.primaryHeading1} `}>Hello, {userName}</span>{" "}
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
