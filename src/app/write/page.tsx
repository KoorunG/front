'use client'

import { submitPostSaveRequest } from "@/service/postService";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default () => {

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const router = useRouter();
    return (
        <>
            <h3>제목</h3> 
            <input onChange={(e) => {
                setTitle(e.target.value);
            }}/>
            <br/>
            <h3>내용</h3> 
            <textarea onChange={(e) => {
                setContent(e.target.value);
            }}
            cols={50}
            rows={10}/>
            <br/>
            <button onClick={() => {
                if(confirm('글을 등록하시겠습니까?')) {
                    submitPostSaveRequest(title, content);
                    alert('글이 등록되었습니다');
                    router.push("/posts");
                }
            }}>글등록</button>
        </>
    )
}