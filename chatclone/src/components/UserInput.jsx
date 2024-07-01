import { useImage } from "../contexts/ImageContext";
import { useText } from "../contexts/TextContext";
function UserInput() {
  const { currentText } = useText();

  const { imageUrl } = useImage();

  return (
    <div className="self-start">
      <h3>{currentText}</h3>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="imageSentByUser"
          className={`lg:h-[3rem] lg:aspect-sqaure lg:rounded-sm`}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default UserInput;
