import AppPage from "../components/AppPage";
import Sidebar from "../components/Sidebar";
import { useText } from "../contexts/TextContext";
import styles from "./AppLayout.module.css";
function AppLayout() {
  const { isOpen } = useText();
  // ${isOpen ? "grid grid-cols-[20rem_1fr]" : "grid grid-cols-[1fr]"}
  // className={`${styles.app} grid grid-cols-[auto_1fr]
  return (
    <div
      className={`${styles.app} grid grid-cols-[1fr]
          lg:grid-cols-[auto_1fr]`}
    >
      <Sidebar />
      <AppPage />
    </div>
  );
}

export default AppLayout;
