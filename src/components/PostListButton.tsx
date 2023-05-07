"use client";

import { useRouter } from "next/navigation";

export default () => {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => {
          router.push("/posts");
        }}>
        글 목록
      </button>
    </>
  );
};
