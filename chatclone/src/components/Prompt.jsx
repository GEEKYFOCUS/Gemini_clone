import { useText } from "../contexts/TextContext";
import { useAI } from "../contexts/AIContext";
import styles from "./Prompt.module.css";

function Prompt() {
  const { setSentMessage } = useAI();
  const { text, setText } = useText();
  const { transcript, setTranscript } = useText();
  console.log(text);
  // padding: 1.5rem 1rem;
  return (
    <div className={`  ${styles.prompt}`}>
      <textarea
        name="text-area"
        className=" text-sm sm:text-lg md:text-xl placeholder:text-sm placeholder:md:text-xl overflow-hidden md:overflow-y-auto "
        id="text"
        cols=""
        rows=""
        placeholder="Enter your Prompt here"
        value={text || transcript}
        onInput={(e) => {
          setText(e.target.value);
          setTranscript(e.target.value);
          setSentMessage(false);
        }}
      ></textarea>

      {/* <input type="text" /> */}
    </div>
  );
}

export default Prompt;
