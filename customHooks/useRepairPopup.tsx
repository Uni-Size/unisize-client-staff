import React from "react";
import Popup from "@/components/Popup";

export default function useRepairPopup(
  type: string,
  isVisible: boolean,
  handlerShowPopup: () => void
) {
  if (!isVisible) return null;

  switch (type) {
    case "HJ1":
      return (
        <Popup handlerShowPopup={handlerShowPopup}>
          <h2>자켓</h2>
        </Popup>
      );
    default:
      return null;
  }
}
