import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlinePlus } from "react-icons/hi";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useText } from "../contexts/TextContext";

function MainNav() {
  const { close, isOpen } = useText();
  console.log(isOpen);
  return (
    <div className="flex flex-col flex-1">
      <span
        className="cursor-pointer px-4 py-4 rounded-[50%] hover:bg-[#E9EDF2] w-min  inline mb-12 "
        onClick={close}
      >
        <RxHamburgerMenu />
      </span>
      <NavLink
        className={`${
          isOpen
            ? "mr-16 gap-x-6 text-xl  px-4 py-4 font-bold flex items-center  "
            : "mr-0 gap-x-0 text-xs  px-3 py-3 font-semibold flex items-center content-center   rounded-full"
        }    bg-[#D4DAE1] rounded-full text-black `}
      >
        <HiOutlinePlus
          className={`${
            isOpen ? "text-base" : "text-4xl font-extrabold"
          } text-3xl sm:text-base`}
        />
        <span
          className={`${
            isOpen ? "opacity-1 visible block" : "opacity-0 invisible hidden"
          } text-sm sm:text-base`}
        >
          New Chat
        </span>
      </NavLink>

      <div className="py-8">
        <h4
          className={`${
            isOpen ? "opacity-1 visible block" : "opacity-0 invisible  hidden"
          } text-lg font-bold`}
        >
          Recent
        </h4>
        <ul
          className={`${
            isOpen ? "opacity-1 visible block " : "opacity-0 invisible hidden"
          }  overflow-y-auto h-[16rem] py-6 space-y-4`}
        >
          <li className="flex items-center space-x-2">
            <MdOutlineChatBubbleOutline className="text-lg font-light" />
            <span className="text-xl font-semibold">No images of people</span>
          </li>
          <li className="flex items-center space-x-2">
            <MdOutlineChatBubbleOutline className="text-lg" />
            <span className="text-xl font-semibold">Hello & Assistant</span>
          </li>
          <li className="flex items-center space-x-2">
            <MdOutlineChatBubbleOutline className="text-lg" />
            <span className="text-xl font-semibold">Unintelligle response</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainNav;
