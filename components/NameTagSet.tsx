import React from "react";

export default function NameTagSet() {
  return (
    <div>
      <p>
        * 명찰 제작은 업체 대행으로 진행하고 있어 현금/계좌이체만 가능합니다.
      </p>
      <div className="grid grid-cols-3">
        <div>
          <h6>명찰개수</h6>
          <button type="button" onClick={() => {}}>
            -
          </button>
          <input type="number" name="nameTagQuantity" />
          <button type="button" onClick={() => {}}>
            +
          </button>
        </div>
        <div>
          <h6>금액</h6>
          <p>0</p>
        </div>
        <div>
          <h6>부착</h6>
          <label className="block p-4 rounded-md text-left bg-neutral-200">
            <p className="pb-4">동복</p>
            <input type="checkbox" name="HJ1" />
            자켓
          </label>
          <label className="mt-6 block p-4 rounded-md text-left bg-neutral-200">
            <p className="pb-4">하복</p>
            <input type="checkbox" name="HJ1" />
            자켓
          </label>
        </div>
      </div>
    </div>
  );
}
