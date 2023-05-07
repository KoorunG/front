import axios from "axios";
import { Post, PostSaveRequest } from "../types/types";

const BASE_URL = "http://localhost:8080";

/**
 * 서버에서 목록 Post 데이터를 받아오는 함수
 */
export const getPostDatas = async () => {
  const url = BASE_URL + '/posts';
  // 데이터를 받아오는 부분을 서버컴포넌트로 분리해보자
  const res = await axios.get(url);
  const data: Post[] = res.data;

  return data;
};


/**
 * 서버에서 해당 식별자로 단일 Post 데이터를 받아오는 함수
 */
export const getPostById = async (id: number) => {
  // 데이터를 받아오는 부분을 서버컴포넌트로 분리해보자
  const url = BASE_URL + '/posts' + '/' + id;
  const res = await axios.get(url);
  const data: Post = res.data;

  return data;
};


/**
 * 서버에서 해당 식별자로 단일 Post 데이터를 받아오는 함수
 */
export const updatePost = async (post: Post) => {
  // 데이터를 받아오는 부분을 서버컴포넌트로 분리해보자
  const id = post.id;
  const url = BASE_URL + '/posts' + '/' + id;
  const res = await axios.patch(url, post);
  const data: Post = res.data;
  
  return data;
};


/**
 * 서버에서 해당 식별자로 단일 Post 데이터를 삭제하는 함수
 */
export const deletePost = async (id: number) => {
  
  const url = BASE_URL + '/posts' + '/' + id;
  axios.delete(url);

};


/**
 * Post를 저장하는 요청을 전송하는 함수
 */ 
export const submitPostSaveRequest = (title: string, content: string) => {
  const req: PostSaveRequest = { title, content };
  axios
    .post("http://localhost:8080/posts", req)
    .then(() => {
      console.log("저장성공");
    })
    .catch(() => {
      console.log("저장실패");
    });
};
