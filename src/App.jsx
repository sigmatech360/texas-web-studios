import AppRouter from "./Router/AppRouter";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useModal } from "./context/ModalContext";
import FormModal from "./components/FormModal";

function App() {
  const { showModal, setShowModal } = useModal();

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
