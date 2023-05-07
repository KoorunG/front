"use client";

import Link from "next/link";
import { CSSProperties } from "react";

export default () => {

  const subNavbarStyle: CSSProperties = {
    textDecoration: "none",
    color: "red"
  }

  return (
    <>
      <div className="main-navbar">
        <h1>koorung's blog</h1>
      </div>
      <div className="sub-navbar">
        <Link href="/" style={subNavbarStyle}>Home</Link> | {" "}
        <Link href="/posts" style={subNavbarStyle}>Post</Link> | {" "}
        <Link href="/write" style={subNavbarStyle}>Write</Link> | {" "}
        <Link href="/#" style={subNavbarStyle}>Login</Link> | {" "}
      </div>
    </>
  );
};
