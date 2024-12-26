import { ReactNode } from "react";
interface PopupProps {
  children: ReactNode;
  handlerShowPopup: () => void;
  title:string
}

export default function Popup({ children, handlerShowPopup ,title}: PopupProps) {
  return (
    <div className="w-full h-max z-50 relative mt-4">
      <div
        onClick={handlerShowPopup}
        className="fixed top-0 left-0 w-full h-full bg-black/50"
      ></div>
      <section className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 p-9 bg-white rounded-md w-2/3  z-50">
        <h2>{title}</h2>
        <button className="absolute top-9 right-9" onClick={handlerShowPopup}>
          X
        </button>
        {children}
      </section>
    </div>
  );
}
