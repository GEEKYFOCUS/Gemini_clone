import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import SelectDropdown from "./SelectDropdown";

import { useText } from "../contexts/TextContext";
import styles from "./AppSelect.module.css";

function AppSelect() {
  const [select, setSelect] = useState(false);
  const { close, isOpen } = useText();

  function handleClick(e) {
    // console.log(e.target);
    setSelect((toggle) => !toggle);
  }
  console.log(isOpen);
  return (
    <header className="bg-[#ffffffbd] sticky top-0   h-20 px-[2rem] py-[1rem] z-10">
      <div className={styles.select}>
        <button className={`${styles.btn} lg:hidden`} onClick={close}>
          <RxHamburgerMenu />
        </button>
        <label htmlFor="gemini" className="text-sm sm:text-2xl">
          Gemini
        </label>
        <MdOutlineArrowDropDown
          className={`${styles.selectDropdown}`}
          onClick={handleClick}
        />

        {/* <select name="Gemini" id="Gemini">
        <option value="gemini-pro" selected></option>
        <option value="gemini-lite">Gemini Lite</option>
        <option value="gemini-pro-lite">Gemini Pro Lite</option>
      </select> */}
      </div>
      {select && <SelectDropdown />}

      {/* <button disabled={isLoading} onClick={logout}>
        {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
      </button> */}
    </header>
  );
}

export default AppSelect;
