// import { createContext, useContext, useState, useReducer } from "react";
// import { MdOutlineExplore } from "react-icons/md";
// import { IoCodeSharp } from "react-icons/io5";
// import { BiSolidPlaneAlt } from "react-icons/bi";
// import { useLocalStorageState } from "../hooks/useLocalStorage";

// const contents = [
//   {
//     id: 1,
//     text: "Create a list of power phrases for my resume",
//     icon: <MdOutlineExplore />,
//   },
//   {
//     id: 2,
//     text: "Brainstorm ways to make a dish more delicious",
//     icon: <MdOutlineExplore />,
//   },
//   {
//     id: 3,
//     text: "Generate unit tests for the following C# function",
//     icon: <IoCodeSharp />,
//   },
//   {
//     id: 4,
//     text: "Find flights and weather for an upcoming trip",
//     icon: (
//       <BiSolidPlaneAlt className="md:bg-[#0f97dd] md:text-3xl md:rounded-full md:text-white md:p-[.3rem]" />
//     ),
//   },
// ];

// const initialState = {
//   contents,
//   currentContent: null,
//   initialContent: [],
// };
// function reducer(state, action) {
//   switch (action.type) {
//     case "content-click":
//       //   const currentContent = action.payload;
//       return {
//         ...state,
//         currentContent: action.payload,
//       };
//     case "content/click":
//       return {
//         ...state,
//         currentContent: action.payload,
//         initialContent: [...state.initialContent, action.payload],
//       };

//     default:
//       throw new Error("Unknown action type");
//   }
// }

// const TextContext = createContext();
// function TextProvider({ children }) {
//   const [{ contents, currentContent, initialContent }, dispatch] = useReducer(
//     reducer,
//     initialState
//   );
//   console.log(initialContent);
//   const [text, setText] = useState("");
//   const [transcript, setTranscript] = useState("");
//   const [currentText, setCurrentText] = useState("");
//   const [previousContent, setPreviousContent] = useState([]);
//   const [value, setValue] = useLocalStorageState([], "previousContent");
//   const [isOpen, setIsOpen] = useState(true);
//   const close = () => setIsOpen((isOpen) => !isOpen);
  



//   function activeContent(id) {
//     dispatch({ type: "content-click", payload: id });
//   }

//   return (
//     <TextContext.Provider
//       value={{
//         contents,
//         currentContent,
//         activeContent,
//         text,
//         transcript,
//         setTranscript,
//         dispatch,
//         currentText,
//         initialContent,
//         setCurrentText,
//         setText,
//         previousContent,
//         setPreviousContent,
//         value,
//         setValue,
//         isOpen,
//         setIsOpen,
//         close,
//       }}
//     >
//       {children}
//     </TextContext.Provider>
//   );
// }

// function useText() {
//   const context = useContext(TextContext);
//   if (context === "undefined")
//     throw new Error("Text context was used outside TextProvider");
//   return context;
// }
// export { TextProvider, useText };


import { createContext, useContext, useState, useReducer, useEffect } from "react";
import { MdOutlineExplore } from "react-icons/md";
import { IoCodeSharp } from "react-icons/io5";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { useLocalStorageState } from "../hooks/useLocalStorage";

const contents = [
  {
    id: 1,
    text: "Create a list of power phrases for my resume",
    icon: <MdOutlineExplore />,
  },
  {
    id: 2,
    text: "Brainstorm ways to make a dish more delicious",
    icon: <MdOutlineExplore />,
  },
  {
    id: 3,
    text: "Generate unit tests for the following C# function",
    icon: <IoCodeSharp />,
  },
  {
    id: 4,
    text: "Find flights and weather for an upcoming trip",
    icon: (
      <BiSolidPlaneAlt className="md:bg-[#0f97dd] md:text-3xl md:rounded-full md:text-white md:p-[.3rem]" />
    ),
  },
];

const initialState = {
  contents,
  currentContent: null,
  initialContent: [],
  previousContent: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "content-click":
      return {
        ...state,
        currentContent: action.payload,
      };
    case "content/click":
      return {
        ...state,
        currentContent: action.payload,
        initialContent: [...state.initialContent, action.payload],
      };
    case "add-feedback":
      const lastItem = state.previousContent[state.previousContent.length - 1];
      const newFeedback = action.payload;
      if (
        !lastItem ||
        (lastItem.userMessage !== newFeedback.userMessage || lastItem.feedback !== newFeedback.feedback)
      ) {
        return {
          ...state,
          previousContent: [...state.previousContent, newFeedback],
        };
      }
      return state; // Return unchanged state if duplicate
    default:
      throw new Error("Unknown action type");
  }
}

const TextContext = createContext();

function TextProvider({ children }) {
  const [{ contents, currentContent, initialContent, previousContent }, dispatch] = useReducer(
    reducer,
    initialState
  );
  console.log("Initial Content:", initialContent, "Previous Content:", previousContent);
  const [text, setText] = useState("");
  const [transcript, setTranscript] = useState("");
  const [currentText, setCurrentText] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const close = () => setIsOpen((isOpen) => !isOpen);

  // Persist previousContent in local storage
  const [_, setStoredValue] = useLocalStorageState([], "previousContent");
  useEffect(() => {
    setStoredValue(previousContent);
  }, [previousContent, setStoredValue]);

  function activeContent(id) {
    dispatch({ type: "content-click", payload: id });
  }

  return (
    <TextContext.Provider
      value={{
        contents,
        currentContent,
        activeContent,
        text,
        transcript,
        setTranscript,
        dispatch,
        currentText,
        initialContent,
        setCurrentText,
        setText,
        previousContent,
        isOpen,
        setIsOpen,
        close,
      }}
    >
      {children}
    </TextContext.Provider>
  );
}

function useText() {
  const context = useContext(TextContext);
  if (context === undefined) throw new Error("Text context was used outside TextProvider");
  return context;
}

export { TextProvider, useText };