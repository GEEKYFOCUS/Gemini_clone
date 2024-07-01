import { createContext, useContext, useState } from "react";

const ImageContext = createContext();
function ImageProvider({ children }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [currentImageUrl, setCurrentImageUrl] = useState("");
  const [file, setFile] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFile(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageUrl(e.target.result);
        setCurrentImageUrl(e.target.result);
      };

      reader.readAsDataURL(file);
      console.log(reader);
    }
  };

  return (
    <ImageContext.Provider
      value={{
        imageUrl,
        setImageUrl,
        file,
        handleImageChange,
        currentImageUrl,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}

function useImage() {
  const context = useContext(ImageContext);
  if (context === "undefined")
    throw new Error("Context was used outside imageProvider");
  return context;
}

export { ImageProvider, useImage };
