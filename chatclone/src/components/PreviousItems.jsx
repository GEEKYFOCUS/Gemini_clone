import { useText } from "../contexts/TextContext";
import PreviousItem from "./PreviousItem";

function PreviousItems() {
  const { initialContent, previousContent, value } = useText();
  console.log("start", initialContent);

  return (
    <ul className="grid grid-cols-1 mx-auto w-[80%] gap-y-8 ">
      {value.slice(1).map((content) => (
        <PreviousItem content={content} />
      ))}
    </ul>
  );
}

export default PreviousItems;