'use client'

import { useEffect, useState } from "react";
import PostBox from "../../components/PostBox";
import { getPostDatas } from "../../service/postService";
import { Post } from "../../types/types";

export default () => {

  const [posts, setPosts] = useState<Post[]>([]);
  
  const setPostDatas = async () => {
    // 데이터를 가져와서 useState로 세팅
    const data = await getPostDatas();
    setPosts(data);
  }

  // 페이지 로드 시 실행
  useEffect(() => {
    setPostDatas();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <PostBox post={post} key={post.id} />
      ))}
    </>
  );
};