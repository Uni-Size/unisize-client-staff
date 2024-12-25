import { ReactNode } from "react";
interface PopupProps {
  children: ReactNode;
  handlerShowPopup: () => void;
}

export default function Popup({ children, handlerShowPopup }: PopupProps) {
  return (
    <div className="w-full h-max">
      <div
        onClick={handlerShowPopup}
        className="absolute top-0 left-0  w-full h-full bg-black/50 "
      ></div>
      <section className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-white rounded-md w-2/3  z-50">
        {children}
      </section>
    </div>
  );
}
