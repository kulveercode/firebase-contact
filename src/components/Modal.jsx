import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({onClose, isOpen, children}) => {
  return createPortal(
  <>
    { isOpen && (
    <div className="grid place-items-center absolute z-40 top-0 backdrop-blur h-screen w-screen " >
    <div className="bg-white m-auto relative z-50 min-h-[200px] min-w-[35%] p-4">
      <div className="justify-end flex">
        <AiOutlineClose onClick={onClose} className="text-2xl" />
      </div>
      {children}
    </div>
    </div> 
    )}
  </>,
  document.getElementById("modal-root")
  );
};

export default Modal;

