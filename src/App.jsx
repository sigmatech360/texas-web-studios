import AppRouter from "./Router/AppRouter";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useModal } from "./context/ModalContext";
import FormModal from "./components/FormModal";

function toSentenceCase(str) {
  return str.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
    return c.toUpperCase();
  });
}

function App() {
  const { showModal, setShowModal } = useModal();

  useEffect(() => {
    const elements = document.querySelectorAll("p");
    elements.forEach((el) => {
      el.textContent = toSentenceCase(el.textContent);
    });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      // offset: 100,
    });
    AOS.refresh();
  }, []);

  
  return (
    <>
      <AppRouter />
      <ToastContainer position="top-right" autoClose={3000} />
      <FormModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
}

export default App;
