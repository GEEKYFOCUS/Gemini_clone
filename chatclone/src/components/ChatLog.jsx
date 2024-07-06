import Prompt from "./Prompt";
import UploaderFilePreviewer from "./UploaderFilePreviewer";
import styles from "./ChatLog.module.css";
import { useImage } from "../contexts/ImageContext";

function ChatLog() {
  const { imageUrl } = useImage();
  console.log(imageUrl);
  // console.log(new FileReader());
  // padding: 1.4rem 2rem;
  return (
    <div
      className={`

        px-6 py-4 h-[5rem] sm:h-[6rem]  mb-[1rem] sm:mb-[0]
      ${
        imageUrl
          ? `${styles.chat} ${styles.presentImage}`
          : ` ${styles.chat} ${styles.nullImage}`
      }
        `}
    >
      <Prompt />
      <UploaderFilePreviewer />
    </div>
  );
}

export default ChatLog;
