import { useText } from "../contexts/TextContext";
import ActionsNav from "./ActionsNav";
import MainNav from "./MainNav";
import UserLocation from "./UserLocation";

function ScreenSideBar() {
  // flex: 1;
  // /* flex-basis: 280px; */
  // background-color: var(--color-brand-1);
  // padding: 1.6rem 2rem;
  // /* display: flex; */
  // /* flex-direction: column; */
  // /* align-items: center; */
  // /* height: calc(100vh); */
  // height: 100dvh;
  // min-height: 100vh;
  // transition: all 0.2s ease-in-out;
  const { isOpen } = useText();
  return (
    <aside
      className={` basis-[320px]  lg:hidden bg-[#f0f4f9] fixed justify-between top-0 left-0 flex flex-col h-[100dvh] px-[1.6rem] py-[2rem]  transition-all ease-in-out duration-[.2s]      ${
        isOpen
          ? "   opacity-1 z-50 translate-x-0 visible lg:opacity-1 lg:visible lg:translate-x-0 justify-between     "
          : "  sm:z-0 translate-x-[-100%] opacity-0 invisible lg:translate-x-0 lg:visible lg:opacity-1"
      } `}
    >
      <MainNav />
      <ActionsNav />
      <UserLocation />
    </aside>
  );
}

export default ScreenSideBar;
