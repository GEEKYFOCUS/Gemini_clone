import AIPrompt from "./AIPrompt";
import UserInput from "./UserInput";
import styles from "./FeedBack.module.css";

function FeedBack() {
  return (
    <div className={styles.feedBack}>
      <UserInput />
      <AIPrompt />
    </div>
  );
}

export default FeedBack;
