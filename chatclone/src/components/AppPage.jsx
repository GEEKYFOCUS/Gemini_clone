import { useAI } from "../contexts/AIContext";
import { useText } from "../contexts/TextContext";
import styles from "./AppPage.module.css";
import AppSelect from "./AppSelect";
import ChatContainer from "./ChatContainer";
import FeedBack from "./FeedBack";
import Header from "./Header";
import PreviousItems from "./PreviousItems";

function AppPage() {
  const { sendMessage, generatedMessage } = useAI();
  const { initialContent, previousContent, value } = useText();
  return (
    <div className={styles.appPage}>
      <AppSelect />

      {generatedMessage ? (
        <div className="h-[30%]">
          <PreviousItems />
          <FeedBack />
        </div>
      ) : (
        <Header />
      )}

      <ChatContainer />
    </div>
  );
}

export default AppPage;
