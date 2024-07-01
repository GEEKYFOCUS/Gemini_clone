import styles from "./Button.module.css";
function Button({ type, children }) {
  return (
    <button
      className={`${styles.btn} ${
        type === "userSelect" ? `${styles.userSelect}` : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
