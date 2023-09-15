import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 gap-y-4">
      <p>Your pages not found</p>
      <Link href={"/"}>
        <button>Back to home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
