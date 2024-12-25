"use client";

import React from "react";
import { useRouter } from "next/navigation";

const studentNum = 0;

export default function Page() {
  const router = useRouter();

  return (
    <div className="w-full">
      <div className="flex justify-between w-full h-14">
        <h6>스태프이름</h6>
        <div className="flex flex-col">
          <h6>오늘 담당한 학생</h6>
          <button className="text-right bg-neutral-200 px-2">
            {studentNum} 명
          </button>
        </div>
      </div>
      <main className=" ">
        <button type="button" onClick={() => router.push("/student/add")}>
          학생추가하기
        </button>
        <ul>
          <li className="p-4 flex">
            <p>학교이름</p>
            <p>
              학생이름 <span>성별</span>
            </p>
          </li>
        </ul>
      </main>
    </div>
  );
}
