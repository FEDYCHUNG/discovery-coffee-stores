import Link from "next/link";
import { useRouter } from "next/router";

export default function CoffeeStore() {
  const router = useRouter();

  return (
    <div>
      coffe-store {router.query.id}
      <Link href="/">Back to Home</Link>
    </div>
  );
}