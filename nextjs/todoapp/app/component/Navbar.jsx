import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-black text-white p-5">
        <Link href={"/"}>Home</Link> &nbsp;&nbsp;&nbsp;
        <Link href={"/todo"}>Todo</Link>
      </div>
    </>
  );
};

export default Navbar;
