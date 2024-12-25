"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="w-full h-full flex justify-center  items-center">
      <div>
        <h1>스마트학생복 청주점</h1>
        <h4>
          스마트학생복 청주점 스태프 전용 어플입니다. <br />
          신규입사자는 사장님께 문의해주세요.
        </h4>
        <button
          type="button"
          onClick={() => {
            router.push("/login");
          }}
        >
          로그인
        </button>
      </div>
    </div>
  );
}
