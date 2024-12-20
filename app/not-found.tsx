import NotFoundAnimation from "@/components/animations/NotFoundAnimation";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center  justify-center min-h-screen px-5 sm:px-10 md:px-20 lg:px-[130px]">
      <NotFoundAnimation />
      <h1 className="text-4xl text-center font-bold">
        404 - Well, this is awkward...
      </h1>
      <p className="mt-4 text-center">
        Looks like we can&apos;t find that page right now. Maybe it just took a
        little vacation!
      </p>
      <Link
        href="/"
        className="mt-6 text-black font-semibold hover:underline text-center">
        Go back home
      </Link>
    </div>
  );
}
