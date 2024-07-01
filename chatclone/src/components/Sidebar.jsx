import { useText } from "../contexts/TextContext";
import ActionsNav from "./ActionsNav";
import MainNav from "./MainNav";
import ScreenSideBar from "./ScreenSideBar";
import styles from "./Sidebar.module.css";
import UserLocation from "./UserLocation";

function Sidebar() {
  const { isOpen } = useText();
  return (
    <>
      <aside
        className={`${
          styles.sidebar
        } hidden  lg:flex lg:flex-col   justify-between z-[1000]  sm:z-0 ${
          isOpen
            ? "basis-[1100px]  sm:basis-[520px] lg:basis-[280px]  lg:flex lg:flex-col    justify-between z-[1000]  sm:z-0  "
            : "basis-[18px] lg:flex lg:flex-col hidden  justify-between z-[1000]  sm:z-0"
        } `}
      >
        <MainNav />
        <ActionsNav />
        <UserLocation />
      </aside>
      <ScreenSideBar />
    </>
  );
}

export default Sidebar;
