import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineHistory } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { useText } from "../contexts/TextContext";

function ActionsNav() {
  const { isOpen } = useText();
  return (
    <div>
      <ul className="space-y-4 ">
        <li className="flex items-center space-x-6">
          <IoHelpCircleOutline />
          <span
            className={`${
              isOpen ? "opacity-1 visible block" : "opacity-0 invisible hidden"
            } text-base font-semibold`}
          >
            Help
          </span>
        </li>
        <li className="flex items-center space-x-6">
          <MdOutlineHistory />
          <span
            className={`${
              isOpen ? "opacity-1 visible block" : "opacity-0 invisible hidden"
            } text-base font-semibold`}
          >
            Activity
          </span>
        </li>
        <li className="flex items-center space-x-6">
          <IoSettingsOutline />
          <span
            className={`${
              isOpen ? "opacity-1 visible block" : "opacity-0 invisible hidden"
            } text-base font-semibold`}
          >
            Setting
          </span>
        </li>
      </ul>
    </div>
  );
}

export default ActionsNav;
