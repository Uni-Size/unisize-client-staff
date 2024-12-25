"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/waiting");
  };
  return (
    <div className="w-full h-full flex justify-center  items-center">
      <form className="flex flex-col w-1/3 gap-6" onSubmit={handleLogin}>
        <h1>스마트학생복 청주점</h1>
        <h4>스태프 전용</h4>
        <input type="text" name="id" />
        <input type="password" name="pw" />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
