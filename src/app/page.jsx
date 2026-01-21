"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="py-8 px-8 bg-white w-120 flex flex-col gap-3">
        <Header />
        <Hero label="First name" />
        <Hero label="Last name" />
        <Hero label="Username" />
        <Buttons/>
      </main>
    </div>
  );
}

const Header = () => {
  return <div>
    <Image
      className="dark:invert"
      src="/main.svg"
      alt="Next.js logo"
      width={60}
      height={60}
      priority
    />
    <div>
      <h1 className="mt-4 text-2xl font-extrabold text-gray-900">
        Join Us! <span className="align-middle">😎</span>
      </h1>
      <p className="mt-2 text-sm text-gray-400">
        Please provide all current information accurately.
      </p>
    </div>
  </div>;
};

  const Hero = ({ label, placeholder = "Placeholder" }) => {
     const inputClass = `text-xl mt-2 w-full rounded-md border bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 outline-none`;
   

    return (
      <div>
        <label className="block text-xl font-semibold text-gray-600">
          {label} <span className="text-red-500">*</span>
        </label>

        <input placeholder={placeholder} className={inputClass } />
      </div>
    );
  };

const Buttons=()=>{
  return <button
    type="submit"
    className="mt-30 w-full rounded-md py-4 text-l font-semibold shadow-sm transition text-white bg-black">
      <span className="inline-flex items-center justify-center gap-2">
      Continue 1/3 <span className="text-lg leading-none">›</span>
    </span>
  </button>;

}
   
