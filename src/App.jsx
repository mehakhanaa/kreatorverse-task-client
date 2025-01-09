import React from "react";
import AppRouter from "./routes";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  return (
    <>
      <AppRouter />
      <ToastContainer position="top-center" />
    </>
  );
};

export default App;
