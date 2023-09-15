import Link from "next/link";
import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <div className="w-full h-20 bg-gray-950 text-white">
      <Container className="flex items-center justify-between h-20">
        <Link
          href={"/"}
          className="text-xl font-semibold text-gray-300 hover:text-white duration-200"
        >
          <p>Logo</p>
        </Link>
        <ul className="flex items-center gap-x-7">
          <Link href={"/alltodo"}>
            <li>All Todo</li>
          </Link>
          <li>Settings</li>
          <li>Contact</li>
        </ul>
      </Container>
    </div>
  );
};

export default Header;
