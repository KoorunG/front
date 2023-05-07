"use client";

import PostListButton from "@/components/PostListButton";
import { getPostById, updatePost } from "@/service/postService";
import { Post } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default ({ params: { id } }: { params: { id: number } }) => {
  const [post, setPost] = useState<Post>({ id: 0, title: "", content: "" });

  useEffect(() => {
    // #1. useEffect 안에서 async - await function을 선언한 것을 참고!
    const getPost = async () => {
      const data = await getPostById(id);
      setPost(data);
    };

    // #2. post가 디폴트 값일 경우 getPost() 함수 호출
    if (post.id === 0) {
      getPost();
    }
  }, []);

  // #3. 라우터 선언 (/next/navigation 으로 import한다.)
  const router = useRouter();

  // #4. 타이틀, 컨텐츠 세팅 함수 선언
  const changeTitle = (title: string) => {
    setPost({ ...post, title });
  };

  const changeContent = (content: string) => {
    setPost({ ...post, content });
  };

  return (
    <>
      <div
        style={{
          border: "1px solid black",
          margin: "5px",
          padding: "10px",
          width: "50%",
        }}>
        <h3>제목</h3>
        <input
          defaultValue={post.title}
          onChange={(e) => {
            changeTitle(e.target.value);
          }}
        />

        <h3>내용</h3>
        <textarea
          defaultValue={post.content}
          onChange={(e) => {
            changeContent(e.target.value);
          }}
          cols={50}
          rows={10}
        />
        <br />
        <button
          onClick={() => {
            // #5-1. confirm창 출력
            if (confirm("글내용을 변경하시겠습니까?")) {
              const title = post.title;
              const content = post.content;

              // #5-2. Post 업데이트 함수 호출
              updatePost({ id, title, content }).then(() => {
                alert("변경되었습니다.");

                // #5-3. router.push()
                router.push("/posts");
              });
            }
          }}>
          전송
        </button>
        <PostListButton/>
      </div>
    </>
  );
};
