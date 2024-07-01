import { useState } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";
import { createContext, useContext, useEffect } from "react";
import { useText } from "./TextContext";
import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";
import { useImage } from "./ImageContext";
import { MdCurrencyBitcoin } from "react-icons/md";
const AIContext = createContext();

const API_KEY = `AIzaSyBMTe-erh0FlM13RlMY2gegjWhf_QsM_uo`;
const genAI = new GoogleGenerativeAI(API_KEY);

function AIProvider({ children }) {
  //   const { file } = useText();
  const { text, currentText } = useText();
  const { setCurrentImageUrl } = useImage();
  const [sendMessage, setSentMessage] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState("");

  //   const { text } = useText();
  console.log(sendMessage);
  //   console.log(fileInputEl.files);

  useEffect(
    function () {
      const fileInputEl = document.querySelector("input[type=file]") || "";
      const promptText = currentText;
      console.log(currentText);
      const emptyFile = fileInputEl.files;

      if (emptyFile) {
        async function run() {
          try {
            setIsloading(true);
            const generationConfig = {
              stopSequences: ["red"],
              maxOutputTokens: 200,
              temperature: 0.9,
              topP: 0.1,
              topK: 16,
            };

            // For text-only input, use the gemini-pro model
            const model = genAI.getGenerativeModel({
              model: "gemini-pro",
              // generationConfig,
            });

            const prompt = promptText;
            const sentMessage = sendMessage;

            const result = await model.generateContent(`${prompt}`);
            const response = await result.response;
            const text = response.text();

            console.log(text);
            setGeneratedMessage(text);
            setIsloading(false);
            // dispatch({
            //   type: "content/click",
            //   payload: { userMessage: prompt, feedback: text },
            // });
            console.log(text);
          } catch (error) {
            throw new Error(error.message);
          }
        }

        // dispatch({
        //   type: "content/click",
        //   payload: { userMessage: currentText, feedback: generatedMessage },
        // });
        run();
      }
    },
    [sendMessage, currentText]
  );

  useEffect(
    function () {
      // Access your API key (see "Set up your API key" above)
      const currentText = text;
      const genAI = new GoogleGenerativeAI(API_KEY);

      // Converts a File object to a GoogleGenerativeAI.Part object.
      async function fileToGenerativePart(file) {
        const base64EncodedDataPromise = new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result.split(",")[1]);
          reader.readAsDataURL(file);
        });
        return {
          inlineData: {
            data: await base64EncodedDataPromise,
            mimeType: file.type,
          },
        };
      }

      async function run() {
        try {
          const generationConfig = {
            stopSequences: ["red"],
            maxOutputTokens: 10000000,
            temperature: 0.9,
            topP: 0.1,
            topK: 16,
          };
          setIsloading(true);
          // For text-and-images input (multimodal), use the gemini-pro-vision model
          const model = genAI.getGenerativeModel({
            model: "gemini-pro-vision",
            // generationConfig,
          });

          const prompt = currentText;
          const fileInputEl = document.querySelector("input[type=file]");
          const imageParts = await Promise.all(
            [...fileInputEl.files].map(fileToGenerativePart)
          );

          const result = await model.generateContent([prompt, ...imageParts]);
          const response = await result.response;
          const text = response.text();
          setGeneratedMessage(text);
          console.log(generatedMessage);
          setIsloading(false);
          console.log(text);
        } catch (error) {
          throw new Error(error.message);
        }
      }

      run();
    },
    [sendMessage]
  );

  return (
    <AIContext.Provider
      value={{ generatedMessage, sendMessage, setSentMessage, isLoading }}
    >
      {children}
    </AIContext.Provider>
  );
}

function useAI() {
  const context = useContext(AIContext);
  if (context === "undefined")
    throw new Error("AI context was used outside AIProvider");
  return context;
}
export { AIProvider, useAI };
// Access your API key (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(API_KEY);

// Converts a File object to a GoogleGenerativeAI.Part object.
// async function fileToGenerativePart(file) {
//   const base64EncodedDataPromise = new Promise((resolve) => {
//     const reader = new FileReader();
//     reader.onloadend = () => resolve(reader.result.split(",")[1]);
//     reader.readAsDataURL(file);
//   });
//   return {
//     inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
//   };
// }

// async function run() {
//   // For text-and-images input (multimodal), use the gemini-pro-vision model
//   const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

//   const prompt = "What's different between these pictures?";

//   const fileInputEl = document.querySelector("input[type=file]");
//   const imageParts = await Promise.all(
//     [...fileInputEl.files].map(fileToGenerativePart)
//   );

//   const result = await model.generateContent([prompt, ...imageParts]);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
// }

// run();
