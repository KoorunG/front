"use client";

import PostListButton from "@/components/PostListButton";
import { deletePost, getPostById } from "@/service/postService";
import { Post } from "@/types/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default ({ params: { id } }: { params: { id: number } }) => {
  const [post, setPost] = useState<Post>({ id: 0, title: "", content: "" });
  const editLink = `/edit/${post.id}`;
  const router = useRouter();
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

  return (
    <>
      <div
        style={{
          border: "1px solid black",
          margin: "5px",
          padding: "10px",
          width: "50%",
        }}>
        <h3>글번호 : {post.id} 번</h3>
        <h3>제목</h3>
        <input value={post.title} readOnly={true} />
        <h3>내용</h3>
        <textarea value={post.content} cols={50} rows={10} readOnly={true}/>
        <br />
        <PostListButton/>
        <Link href={editLink}>
          <button>수정</button>
        </Link>
        <button onClick={() => {
            const conf = `${post.id}번 글을 삭제하시겠습니까?`;
            if(confirm(conf)) {
                alert('글이 삭제되었습니다.');
                deletePost(post.id);
                router.push("/posts");
            }
        }}>
            삭제
        </button>
      </div>
    </>
  );
};
