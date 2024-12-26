import React from "react";
import Popup from "@/components/Popup";

export default function useRepairPopup(
  type: string,
  isVisible: boolean,
  handlerShowPopup: () => void
) {
  if (!isVisible) return null;
const handlerSubmit = ()=>{handlerShowPopup()}
  switch (type) {
    case "HJ1":
      return (
        <Popup handlerShowPopup={handlerShowPopup} title="자켓 수선사항">
          <form>
            <div>
              소매
              <button type="button">↑</button>
              <button type="button">↓</button>
              <input type="text" />
              cm
            </div>
            <button type="button" onClick={handlerShowPopup}>
              없음
            </button>
            <button type="submit" onClick={handlerSubmit}>
              저장
            </button>
          </form>
        </Popup>
      );
    default:
      return null;
  }
}
