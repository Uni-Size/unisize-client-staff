import Popup from "@/components/Popup";
import React from "react";
interface RepairPopupProps {
  type: string;
  isVisible: boolean;
  handlerShowPopup: () => void;
}
export default function useRepairPopup({
  type,
  isVisible,
  handlerShowPopup,
}: RepairPopupProps) {
  const getPopupContent = () => {
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
  };

  return { getPopupContent };
}
