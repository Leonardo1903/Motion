import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full bg-neutral-900 flex items-center justify-center flex-col gap-4">
      <div className="text-neutral-300 text-2xl">Learning Framer Motion</div>
      <div>
        <button>
          <Link href="/basics">
            <p className="text-cyan-500 hover:text-cyan-700 transition duration-300">
              Go to Basics
            </p>
          </Link>
        </button>
      </div>
    </div>
  );
}
