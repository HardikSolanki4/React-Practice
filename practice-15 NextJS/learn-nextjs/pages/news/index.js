import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>News </h1>
      <ul>
        <li>
          <Link href='/news/book'>Book</Link>
        </li>
        <li>
          <Link href='/news/pen'>pen</Link>
        </li>
        <li>
          <Link href='/news/bag'>bag</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
