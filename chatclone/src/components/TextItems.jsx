import { Link } from "react-router-dom";

import { useText } from "../contexts/TextContext";
import styles from "./TextItems.module.css";
import { useState } from "react";

function TextItems({ id, content, text, icon }) {
  //   console.log(id);
  const { contents, currentContent, dispatch, activeContent } = useText();
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);
  //   console.log(currentContent, id);
  function handleClick() {
    if (currentContent === id) console.log(`hey`);
    setIsActive((active) => !active);
  }
  //   function handleClick(e) {
  //     console.log(content.id, currentContent);

  //     activeContent(id);
  //   }
  return (
    <li className="w-full">
      <Link
        key={text}
        className={`${
          currentContent === id && isActive
            ? `${styles.textItem} ${styles.textActive}`
            : `${styles.textItem}`
        } `}
        onClick={() => {
          activeContent(id);
          handleClick();
        }}
      >
        <p className="text-lg sm:text-2xl">{text}</p>
        <div role="img" className={styles.icon}>
          {icon}
        </div>
      </Link>
    </li>
  );
}

export default TextItems;
