import { useRouter } from 'next/router';

const DetailsPage = () => {
  const router = useRouter();
  const getName = router.query.newsId;

  return <h1>Details: {getName} </h1>;
};

export default DetailsPage;
