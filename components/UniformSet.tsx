import React, { useState } from "react";
import useRepairPopup from "@/customHooks/useRepairPopup";

export default function UniformSet() {
  const [isWinter, setIsWinter] = useState(true);
  const [isPopup, setIsPopup] = useState(true);
  const handlerShowPopup = () => {
    setIsPopup((prev) => !prev);
  };
  const popupContent = useRepairPopup("HJ1", isPopup, handlerShowPopup);
  return (
    <div>
      {popupContent}
      <div>
        <label className="w-1/3 h-16 block relative rounded-md bg-neutral-400 cursor-pointer overflow-hidden">
          <input
            type="checkbox"
            className="hidden"
            checked={isWinter}
            onChange={(e) => setIsWinter(e.target.checked)}
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full grid grid-cols-2 ">
            <span>동복</span>
            <span>하복</span>
          </div>
          <span
            className={`w-1/2 h-14 absolute top-1/2 -translate-y-1/2 left-1 bg-neutral-800 rounded flex items-center justify-center text-white transition-transform duration-300 ${
              !isWinter ? "translate-x-[calc(100%-6%)]" : ""
            }`}
          >
            {isWinter ? "동복" : "하복"}
          </span>
        </label>
        <div>
          <ul className="grid grid-cols-5">
            <li>품목</li>
            <li className="col-span-2	">사이즈</li>
            <li>이월</li>
            <li>추가구입</li>
          </ul>
          <ul>
            <li className="grid grid-cols-5">
              <div
                onClick={() => {
                  setIsPopup((prev) => !prev);
                }}
              >
                자켓<span>88,000</span>
              </div>
              <div>100</div>
              <div>
                <button>-</button> 1 <button>+</button>
              </div>
              <div>
                <input type="checkbox" />
              </div>
              <div>
                <button type="button">+</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
