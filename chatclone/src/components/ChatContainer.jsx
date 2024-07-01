import ChatLog from "./ChatLog";
import Footer from "./Footer";
import styles from "./ChatContainer.module.css";

// margin: 0 auto;
// padding: 1rem 2rem;
// position: fixed;
// bottom: 3rem;

// right: 10rem;
// left: 19.4rem;
function ChatContainer() {
  // bottom: 3rem;

  // right: 10rem;
  // left: 19.4rem;
  // max-width: 1114px;
  // width: 100%;
  return (
    <div
      className={`  bg-white   text-center bottom-[2.5rem] md:left-[4rem] md:right-[5rem] md:bottom-[3rem] lg:right-[10rem] xl:left-[19.4rem] fixed  ${styles.container}`}
    >
      <ChatLog />
      <Footer />
    </div>
  );
}

export default ChatContainer;
