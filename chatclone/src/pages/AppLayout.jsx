import Sidebar from "../components/Sidebar";
import AppPage from "../components/AppPage";
import styles from "./AppLayout.module.css";
import { useText } from "../contexts/TextContext";
function AppLayout() {
  const { isOpen } = useText();
  // ${isOpen ? "grid grid-cols-[20rem_1fr]" : "grid grid-cols-[1fr]"}
  // className={`${styles.app} grid grid-cols-[auto_1fr]
  return (
    <div
      className={`${styles.app} grid grid-cols-[auto]
          lg:flex`}
    >
      <Sidebar />
      <AppPage />
    </div>
  );
}

export default AppLayout;
