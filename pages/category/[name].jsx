import Link from "next/link";
import { useRouter } from "next/router";

const name = () => {
  const router = useRouter();
  const categoryName = router?.query?.name?.toUpperCase() || "";

  return (
    <div>
      <h2>{categoryName}</h2>
      <Link href="/">Go back...</Link>
    </div>
  );
};

export default name;
