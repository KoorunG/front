import Link from "next/link";
import { Post } from "../types/types";

export default ({ post }: { post: Post }) => {
  const detailLink = `/posts/${post.id}`;
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          margin: "5px",
          padding: "10px",
          width: "50%",
        }}>
        <Link href={detailLink} style={{ textDecoration: "none", color: "black" }}>
          <h3>제목 : {post.title}</h3>
        </Link>
        <p style={{
          whiteSpace: "pre", 
          overflow: "hidden",
          maxHeight: "80px",
          display: "block",
          textOverflow: "ellipsis",
          }}>내용 : {post.content}</p>
      </div>
    </>
  );
};
