import Link from "next/link";

const Sub = () => {
  return (
    <div>
      <h2>Link to main page</h2>
      <Link href="/">
        <a>Move to '/'</a>
      </Link>
    </div>
  );
};

export default Sub;
