import AppRouter from "./Router/AppRouter";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <AppRouter />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
