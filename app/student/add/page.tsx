"use client";

import AccSet from "@/components/AccSet";
import NameTagSet from "@/components/NameTagSet";
import UniformSet from "@/components/UniformSet";
import {  useState } from "react";

export default function Page() {
  const [activeStepper, isActiveStepper] = useState<number>(0);
  const handlerStepperComponent = () => {
    switch (activeStepper) {
      case 0:
        return <UniformSet />;
      case 1:
        return <NameTagSet />;
      case 2:
        return <AccSet />;
    }
  };
  return (
    <div>
      <section className="grid grid-cols-2">
        <p>입학학교</p>
        <p>
          졸업학교 <span>반</span>
        </p>
        <div className="flex">
          <p>이름</p>
          <div>
            <label>
              <input type="radio" name="gender" value="woman" />
              여자
            </label>
            <label>
              <input type="radio" name="gender" value="man" />
              남자
            </label>
          </div>
        </div>
        <div>
          <div>학생연락처</div>
          <div>보호자연락처</div>
        </div>
        <div className="col-span-2">
          <h6>체촌</h6>
          <div className="grid grid-cols-4 gap-4">
            <label>
              <p>키</p>
              <input type="number" />
              <span>cm</span>
            </label>
            <label>
              <p>몸무게</p>
              <input type="number" />
              <span>kg</span>
            </label>
            <label>
              <p>가슴둘레</p>
              <input type="number" />
              <span>cm</span>
            </label>
            <label>
              <p>허리둘레</p>
              <input type="number" />
              <span>cm</span>
            </label>
          </div>
        </div>
        <div className="col-span-2">
          <h6>구입 수량 및 사이즈 확정</h6>
          <div>
            <ol className="flex items-center w-full">
              <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
                <button
                  type="button"
                  onClick={() => {
                    isActiveStepper(0);
                  }}
                  className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0"
                >
                  교복
                </button>
              </li>
              <li className=" flex w-full items-center justify-center text-blue-600  before:content-[''] before:w-full before:h-1 before:border-b before:border-blue-100 before:border-4 before:inline-block dark:before:border-blue-800 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
                <button
                  type="button"
                  onClick={() => {
                    isActiveStepper(1);
                  }}
                  className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0"
                >
                  명찰
                </button>
              </li>
              <li className="flex w-full items-center text-blue-600 dark:text-blue-500 before:content-[''] before:w-full before:h-1 before:border-b before:border-blue-100 before:border-4 before:inline-block dark:before:border-blue-800">
                <button
                  type="button"
                  onClick={() => {
                    isActiveStepper(2);
                  }}
                  className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0"
                >
                  용품
                </button>
              </li>
            </ol>
            {handlerStepperComponent()}
          </div>
        </div>
      </section>
    </div>
  );
}
