import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full bg-neutral-900 flex items-center justify-center flex-col gap-4">
      <div className="text-neutral-300 text-2xl">Learning Framer Motion</div>
      <div>
        <button>
          <Link href="/basics">
            <p className="text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]">
              Go to Basics
            </p>
          </Link>
        </button>
      </div>
    </div>
  );
}
