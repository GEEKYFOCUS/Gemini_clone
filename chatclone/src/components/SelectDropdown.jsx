import { FaRegCheckCircle } from "react-icons/fa";
import Button from "./Button";
import styles from "./SelectDropdown.module.css";
// import "../styles.css";
function SelectDropdown() {
  return (
    <div className={`${styles.dropDown} rounded-lg`}>
      {/* <button className={styles.dropDownBtn}></button> */}
      <Button>
        <svg
          className="opacity-80 w-[2rem] sm:w-auto"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M14 28C14 26.0633 13.6267 24.2433 12.88 22.54C12.1567 20.8367 11.165 19.355 9.905 18.095C8.645 16.835 7.16333 15.8433 5.46 15.12C3.75667 14.3733 1.93667 14 0 14C1.93667 14 3.75667 13.6383 5.46 12.915C7.16333 12.1683 8.645 11.165 9.905 9.905C11.165 8.645 12.1567 7.16333 12.88 5.46C13.6267 3.75667 14 1.93667 14 0C14 1.93667 14.3617 3.75667 15.085 5.46C15.8317 7.16333 16.835 8.645 18.095 9.905C19.355 11.165 20.8367 12.1683 22.54 12.915C24.2433 13.6383 26.0633 14 28 14C26.0633 14 24.2433 14.3733 22.54 15.12C20.8367 15.8433 19.355 16.835 18.095 18.095C16.835 19.355 15.8317 20.8367 15.085 22.54C14.3617 24.2433 14 26.0633 14 28Z"
            fill="url(#paint0_radial_16771_53212)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_16771_53212"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(2.77876 11.3795) rotate(18.6832) scale(29.8025 238.737)"
            >
              <stop offset="0.0671246" stopColor="#9168C0" />
              <stop offset="0.342551" stopColor="#5684D1" />
              <stop offset="0.672076" stopColor="#1BA1E3" />
            </radialGradient>
          </defs>
        </svg>
        <span className="font-semibold text-md sm:text-lg md:text-base">
          Gemini
        </span>
        <FaRegCheckCircle className={styles.dropDownCheck} />
      </Button>
      <Button type={"userSelect"}>
        <span>
          <img
            className="opacity-50 "
            src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_advanced_1743d7b7a7bc01f38e6f4.svg"
            alt="gemini_logo"
          />
        </span>
        <span className="sm:text-[1.1rem] text-[1rem] font-bold sm:font-semibold">
          Gemini Advanced
        </span>
        <div role="button" className={styles.upgradeBtn}>
          Upgrade
        </div>
      </Button>
    </div>
  );
}

export default SelectDropdown;
