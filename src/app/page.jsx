import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="py-8 px-8 bg-white w-120 flex flex-col gap-3">
        <div>
          <Image
            className="dark:invert"
            src="/main.svg"
            alt="Next.js logo"
            width={60}
            height={60}
            priority
          />
          <div>
            <p>Join Us!</p>
            <p>Please provide all current information accurately.</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <input className="border" />
          <input className="border" />
          <input className="border" />
        </div>
      </main>
    </div>
  );
}
