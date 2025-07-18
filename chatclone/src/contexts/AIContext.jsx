// import { useState } from "react";
// // import { GoogleGenerativeAI } from "@google/generative-ai";
// import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

// import { createContext, useContext, useEffect } from "react";
// import { useImage } from "./ImageContext";
// import { useText } from "./TextContext";
// const AIContext = createContext();

// const API_KEY = process.env.API_KEY;
// const genAI = new GoogleGenerativeAI(API_KEY);

// function AIProvider({ children }) {
//   //   const { file } = useText();
//   const { text, currentText } = useText();
//   const { setCurrentImageUrl } = useImage();
//   const [sendMessage, setSentMessage] = useState(false);
//   const [isLoading, setIsloading] = useState(false);
//   const [generatedMessage, setGeneratedMessage] = useState("");

//   //   const { text } = useText();
//   console.log(sendMessage);
//   //   console.log(fileInputEl.files);

//   useEffect(
//     function () {
//       const fileInputEl = document.querySelector("input[type=file]") || "";
//       const promptText = currentText;
//       console.log(currentText);
//       const emptyFile = fileInputEl.files;

//       if (emptyFile) {
//         async function run() {
//           try {
//             setIsloading(true);
//             const generationConfig = {
//               stopSequences: ["red"],
//               maxOutputTokens: 200,
//               temperature: 0.9,
//               topP: 0.1,
//               topK: 16,
//             };

//             // For text-only input, use the gemini-pro model
//             const model = genAI.getGenerativeModel({
//               model: "gemini-pro",
//               // generationConfig,
//             });

//             const prompt = promptText;
//             const sentMessage = sendMessage;

//             const result = await model.generateContent(`${prompt}`);
//             const response = await result.response;
//             const text = response.text();

//             console.log(text);
//             setGeneratedMessage(text);
//             setIsloading(false);
//             // dispatch({
//             //   type: "content/click",
//             //   payload: { userMessage: prompt, feedback: text },
//             // });
//             console.log(text);
//           } catch (error) {
//             throw new Error(error.message);
//           }
//         }

//         // dispatch({
//         //   type: "content/click",
//         //   payload: { userMessage: currentText, feedback: generatedMessage },
//         // });
//         run();
//       }
//     },
//     [sendMessage, currentText]
//   );

//   useEffect(
//     function () {
//       // Access your API key (see "Set up your API key" above)
//       const currentText = text;
//       const genAI = new GoogleGenerativeAI(API_KEY);

//       // Converts a File object to a GoogleGenerativeAI.Part object.
//       async function fileToGenerativePart(file) {
//         const base64EncodedDataPromise = new Promise((resolve) => {
//           const reader = new FileReader();
//           reader.onloadend = () => resolve(reader.result.split(",")[1]);
//           reader.readAsDataURL(file);
//         });
//         return {
//           inlineData: {
//             data: await base64EncodedDataPromise,
//             mimeType: file.type,
//           },
//         };
//       }

//       async function run() {
//         try {
//           const generationConfig = {
//             stopSequences: ["red"],
//             maxOutputTokens: 10000000,
//             temperature: 0.9,
//             topP: 0.1,
//             topK: 16,
//           };
//           setIsloading(true);
//           // For text-and-images input (multimodal), use the gemini-pro-vision model
//           const model = genAI.getGenerativeModel({
//             model: "gemini-pro-vision",
//             // generationConfig,
//           });

//           const prompt = currentText;
//           const fileInputEl = document.querySelector("input[type=file]");
//           const imageParts = await Promise.all(
//             [...fileInputEl.files].map(fileToGenerativePart)
//           );

//           const result = await model.generateContent([prompt, ...imageParts]);
//           const response = await result.response;
//           const text = response.text();
//           setGeneratedMessage(text);
//           console.log(generatedMessage);
//           setIsloading(false);
//           console.log(text);
//         } catch (error) {
//           throw new Error(error.message);
//         }
//       }

//       run();
//     },
//     [sendMessage]
//   );

//   return (
//     <AIContext.Provider
//       value={{ generatedMessage, sendMessage, setSentMessage, isLoading }}
//     >
//       {children}
//     </AIContext.Provider>
//   );
// }

// function useAI() {
//   const context = useContext(AIContext);
//   if (context === "undefined")
//     throw new Error("AI context was used outside AIProvider");
//   return context;
// }
// export { AIProvider, useAI };
// // Access your API key (see "Set up your API key" above)
// // const genAI = new GoogleGenerativeAI(API_KEY);

// // Converts a File object to a GoogleGenerativeAI.Part object.
// // async function fileToGenerativePart(file) {
// //   const base64EncodedDataPromise = new Promise((resolve) => {
// //     const reader = new FileReader();
// //     reader.onloadend = () => resolve(reader.result.split(",")[1]);
// //     reader.readAsDataURL(file);
// //   });
// //   return {
// //     inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
// //   };
// // }

// // async function run() {
// //   // For text-and-images input (multimodal), use the gemini-pro-vision model
// //   const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

// //   const prompt = "What's different between these pictures?";

// //   const fileInputEl = document.querySelector("input[type=file]");
// //   const imageParts = await Promise.all(
// //     [...fileInputEl.files].map(fileToGenerativePart)
// //   );

// //   const result = await model.generateContent([prompt, ...imageParts]);
// //   const response = await result.response;
// //   const text = response.text();
// //   console.log(text);
// // }

// // run();


import { createContext, useContext, useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useImage } from "./ImageContext";
import { useText } from "./TextContext";

const AIContext = createContext();

const API_KEY = process.env.API_KEY;
console.log("API Key Loaded:", !!API_KEY); // Debug API key
const genAI = new GoogleGenerativeAI(API_KEY);

function AIProvider({ children }) {
  const { text, currentText } = useText();
  const { setCurrentImageUrl } = useImage();
  const [sendMessage, setSentMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState("");

  // Handle text-only input with streaming
  useEffect(() => {
    const fileInputEl = document.querySelector("input[type=file]");
    const hasFiles = fileInputEl?.files?.length > 0;

    console.log("Text Input - Files:", fileInputEl?.files, "Current Text:", currentText);

    if (!hasFiles && sendMessage && currentText) {
      async function runText() {
        try {
          setIsLoading(true);
          const model = genAI.getGenerativeModel({
            model: "gemini-1.5-pro",
            generationConfig: {
              maxOutputTokens: 8192, // Max for gemini-1.5-pro
              temperature: 0.9,
              topP: 0.95,
              topK: 40,
            },
          });

          let fullText = "";
          const result = await model.generateContentStream(currentText);
          for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            fullText += chunkText;
            console.log("Text Chunk:", chunkText);
          }

          // Log token usage if available
          const response = await result.response;
          console.log("Full Text Response:", response);
          console.log("Text Output Length:", fullText.length);

          setGeneratedMessage(fullText);
          console.log("Final Text Output:", fullText);
        } catch (error) {
          console.error("Text Generation Error:", error.message);
          setGeneratedMessage("Error generating text response");
        } finally {
          setIsLoading(false);
          setSentMessage(false); // Reset to prevent re-trigger
        }
      }

      runText();
    }

    return () => setSentMessage(false); // Cleanup
  }, [sendMessage, currentText]);

  // Handle text + image input with streaming
  useEffect(() => {
    const fileInputEl = document.querySelector("input[type=file]");
    const hasFiles = fileInputEl?.files?.length > 0;

    console.log("Multimodal Input - Files:", fileInputEl?.files, "Current Text:", currentText);

    if (hasFiles && sendMessage) {
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

      async function runMultimodal() {
        try {
          setIsLoading(true);
          const model = genAI.getGenerativeModel({
            model: "gemini-1.5-pro",
            generationConfig: {
              maxOutputTokens: 8192, // Max for gemini-1.5-pro
              temperature: 0.9,
              topP: 0.95,
              topK: 40,
            },
          });

          const prompt = currentText || "Describe this image";
          const imageParts = await Promise.all(
            [...fileInputEl.files].map(fileToGenerativePart)
          );

          let fullText = "";
          const result = await model.generateContentStream([prompt, ...imageParts]);
          for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            fullText += chunkText;
            console.log("Multimodal Chunk:", chunkText);
          }

          // Log token usage if available
          const response = await result.response;
          console.log("Full Multimodal Response:", response);
          console.log("Multimodal Output Length:", fullText.length);

          setGeneratedMessage(fullText);
          console.log("Final Multimodal Output:", fullText);
        } catch (error) {
          console.error("Multimodal Generation Error:", error.message);
          setGeneratedMessage("Error generating multimodal response");
        } finally {
          setIsLoading(false);
          setSentMessage(false); // Reset to prevent re-trigger
        }
      }

      runMultimodal();
    }

    return () => setSentMessage(false); // Cleanup
  }, [sendMessage, currentText]);

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
  if (context === undefined) {
    throw new Error("useAI must be used within an AIProvider");
  }
  return context;
}

export { AIProvider, useAI };