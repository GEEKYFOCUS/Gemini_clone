import TextItems from "./TextItems";
import styles from "./TextList.module.css";
import { useText } from "../contexts/TextContext";

function TextList() {
  const { contents } = useText();

  return (
    <ul
      className={`grid grid-cols-[1fr]  sm:w-[70%] sm:grid-cols-[1fr_1fr_1fr_1fr]  ${styles.textList}`}
    >
      {contents.map((content) => (
        <TextItems
          id={content.id}
          content={content}
          text={content.text}
          icon={content.icon}
          key={content.id}
        />
      ))}
    </ul>
  );
}

export default TextList;
