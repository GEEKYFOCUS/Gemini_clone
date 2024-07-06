import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import SelectDropdown from "./SelectDropdown";

import { useText } from "../contexts/TextContext";
import styles from "./AppSelect.module.css";
import useUser from "../features/authentication/useUser";

function AppSelect() {
  const [select, setSelect] = useState(false);
  const { close, isOpen } = useText();
  const {
    user: {
      user_metadata: { avatar_url },
    },
  } = useUser();
  function handleClick(e) {
    // console.log(e.target);
    setSelect((toggle) => !toggle);
  }
  console.log(isOpen);
  return (
    <header className="bg-[#ffffffbd] sticky top-0 h-20 px-[2rem] py-[1rem] z-10 flex flex-col  ">
      <div className={styles.select}>
        <button className={`${styles.btn} lg:hidden`} onClick={close}>
          <RxHamburgerMenu />
        </button>
        <label htmlFor="gemini" className="text-[1.2rem] sm:text-2xl">
          Gemini
        </label>
        <MdOutlineArrowDropDown
          className={`${styles.selectDropdown}`}
          onClick={handleClick}
        />
      </div>
      {select && <SelectDropdown />}

      <div className=" flex justify-end">
        <img
          className=" w-[2rem] sm:w-[3.6rem] aspect-square object-cover rounded-[50%] "
          src={avatar_url || "/img/default-user.jpg"}
          alt={`Avatar of ${avatar_url}`}
        />
      </div>
    </header>
  );
}

export default AppSelect;

// {
//   /* <select name="Gemini" id="Gemini">
//         <option value="gemini-pro" selected></option>
//         <option value="gemini-lite">Gemini Lite</option>
//         <option value="gemini-pro-lite">Gemini Pro Lite</option>
//       </select> */
// }

// display: block;
//   width: 4rem;
//   width: 3.6rem;
//   aspect-ratio: 1;
//   object-fit: cover;
//   object-position: center;
//   border-radius: 50%;
//   outline: 2px solid var(--color-grey-100);

// {
//   /* <button disabled={isLoading} onClick={logout}>
//         {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
//       </button> */
// }
