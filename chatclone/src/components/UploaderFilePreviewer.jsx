import { useEffect } from "react";
import { CiImageOn } from "react-icons/ci";
import { PiMicrophone } from "react-icons/pi";
import { VscSend } from "react-icons/vsc";
import { useAI } from "../contexts/AIContext";
import { useImage } from "../contexts/ImageContext";
import { useText } from "../contexts/TextContext";
import styles from "./UploaderFilePreviewer.module.css";

// const GoogleGenerativeAI = "https://esm.run/@google/generative-ai";

function UploaderFilePreviewer() {
  const { imageUrl, setImageUrl, handleImageChange } = useImage();
  const {
    transcript,
    setTranscript,
    generatedMessage,
    previousContent,
    setPreviousContent,
  } = useText();

  const {
    text,
    currentText,
    setCurrentText,
    initialContent,
    setText,
    dispatch,
  } = useText();

  const { setSentMessage } = useAI();
  // const { setSentMessage } = useAI();
  // const [imageUrl, setImageUrl] = useState(null);
  // const genAI = new GoogleGenerativeAI(API_KEY);

  function handleRecord() {}

  useEffect(
    function () {
      async function startRecording() {
        const recognition = new window.webkitSpeechRecognition();

        recognition.continuous = false;
        recognition.lang = "en-US";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        //   return speechToText;

        recognition.start();
        console.log("Ready to receive a color command.");

        // if (!record) console.log(record);
        recognition.onresult = (event) => {
          const speechResult = event.results[0][0].transcript;
          console.log(`result: ${speechResult}`);
          setTranscript((initialState) => {
            return speechResult;
          });

          console.log(transcript);
        };

        //   return speechToText;
      }
      function handleClick() {
        startRecording();
      }
      const button = document.getElementById("recordButton");
      if (button) {
        button.addEventListener("click", handleClick);
      }
      console.log(`2: ${transcript}`);
      return () => {
        if (button) button.removeEventListener("click", handleClick);
      };
      //   handleClick();
    },
    [transcript, setTranscript]
  );
  // const handleSentMessage = () => {};
  // display: flex;
  // justify-content: space-between;
  return (
    <div className={`flex gap-x-2  md:justify-between ${styles.uploadWrap}`}>
      {imageUrl && (
        <div className="relative">
          {/* <button
            className={styles.closeBtn}
            onClick={() => console.log("click")}
          >
            &times;
          </button> */}
          <div
            role="button"
            className="  absolute top-[-1rem] right-0  text-red-400"
            onClick={() => {
              setImageUrl(null);
            }}
          >
            &times;
          </div>
          <img
            src={imageUrl}
            alt="SelectedImage"
            className={` w-[.5rem] ${styles.imageInput} rounded-lg`}
          />
        </div>
      )}
      {/* width: 18rem; /* flex-basis: 5rem;  background-color: transparent;
      font-size: 2.5rem; display: flex; /* gap: 1rem 1.5rem;  justify-content:
      space-evenly; cursor: pointer; */}
      <div
        className={` flex  sm:justify-evenly w-[12rem] sm:w-[16rem] md:w-[18rem] text-xl sm:text-2xl md:text-3xl xl:text-4xl  ${
          styles.uploads
        } ${text ? styles.textIsActive : styles.textInActive}`}
      >
        <div
          className={` px-2 py-[.1px]  sm:p-8   ${styles.uploadActive} rounded-full`}
        >
          <label htmlFor="imageInput" className="cursor-pointer ">
            <CiImageOn className="pointer-events-none  text-xl sm:text-2xl md:text-3xl xl:text-4xl " />
          </label>
          <input
            type="file"
            id="imageInput"
            multiple
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        <div
          className={` px-2 py-[.8px]  sm:p-8    ${styles.uploadActive} rounded-full`}
        >
          <input type="hidden" name="audio" value="data:audio/mp3" />
          <PiMicrophone
            title="mic"
            id="recordButton"
            onCanPlay={() => handleRecord}
            className={""}
          />
        </div>
        <div
          className={` px-2 py-[.8px]  sm:p-8 ${
            text ? styles.uploadActive : ""
          } transition-all ease-in-out rounded-full`}
        >
          <VscSend
            className={`  ${text ? styles.showSendBtn : styles.hideSendBtn}`}
            onClick={() => {
              setSentMessage(true);
              setCurrentText(text);
              console.log(text);
              setText(" ");
              console.log(initialContent, previousContent);
              console.log(text);

              // setPreviousContent((content) => [
              //   ...content,
              //   {
              //     userMessage: currentText,
              //     feedback: generatedMessage,
              //   },
              // ]);
              // dispatch({
              //   type: "content/click",
              //   payload: {
              //     userMessage: currentText,
              //     feedback: generatedMessage,
              //   },
              // });
            }}
            // onKeyDown={
            //   ((e) => e.key === "Enter" && setSentMessage(true),
            //   setCurrentText(text),
            //   console.log(text),
            //   setText(" "),
            //   console.log(initialContent, previousContent),
            //   console.log(text))
            // }
          />
        </div>
      </div>
    </div>
  );
}

export default UploaderFilePreviewer;

// const recognition = new window.webkitSpeechRecognition();
// recognition.continuous = false;
// recognition.lang = "en-US";
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;
// //   return speechToText;
// recognition.start();
// console.log("Ready to receive a color command.");
// // if (!record) console.log(record);
// recognition.onresult = (event) => {
//   const speechResult = event.results[0][0].transcript;
//   console.log(`result: ${speechResult}`);
//   setTranscript((initialState) => {
//     return initialState + speechResult;
//   });
// };
// console.log(transcript);
