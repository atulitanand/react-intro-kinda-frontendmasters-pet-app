import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal");

const Modal = ({ children }) => {
  const elRef = useRef(null);
  /**
   * Here we are saying that if elRef.current have not yet been initialized then we want to initialize it to be this div and then we want this div to survive past the renders untill you dispose the modal all together and then youll destroy it
   * doc.createElement is not cheap so we don't want a bunch of then
   *
   * so if you want some piece of state that you want to use exactly once in your component then you use this thing called refs
   */
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    // cleaning up the modals because if we won't clean up them there will be a lot of them leaking in the memory , react will keep them in memory
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  // this create portal thing is doing basically what reactDOM.render does
  return createPortal(<div>{children}</div>, elRef.current);
  // just put what ever i have in this div here into my component in index.html
  // super important for me what i was meaning to do
};

// this is my reusable model component
export default Modal;


