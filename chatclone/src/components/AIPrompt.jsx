import { useAI } from "../contexts/AIContext";
import GenerativeContent from "./GenerativeContent";
import Loader from "./Loader";

import styles from "./AIPrompt.module.css";
function AIPrompt() {
  //   const { text } = useText;
  const { isLoading } = useAI();
  const { generatedMessage } = useAI();

  return (
    <div className={styles.aiPrompt}>
      {isLoading ? <Loader /> : <GenerativeContent />}
    </div>
  );
}

export default AIPrompt;
