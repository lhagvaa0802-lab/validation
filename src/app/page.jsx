"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const [nameData, setNameData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });
  const [error, setError] = useState();
  const ref = useRef();
  console.log("ref", ref);

  console.log("namedata", nameData);
  const onChangeData = (event) => {
    setNameData({ ...nameData, [event.target.name]: event.target.value });
    console.log("event", event.target.name);
  };
  console.log(nameData);

  const validForm = () => {
    const errorFirstName = nameData.firstName;
    const errorLastName = nameData.lastName;
    const errorUserName = nameData.userName;
    let message = "";
    if (errorFirstName == "") {
      // alert("firstname must be filled");
      message = "Yum bicheerei zaaval";
    } else {
      message = "";
    }
    if (errorLastName == "") {
      message = "Yum bicheerei zaaval";
    }
    if (errorUserName == "") {
      message = "Yum bicheerei zaaval";
    }
    // return false;
    setError(message);
  };
  console.log(error);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="py-8 px-8 bg-white w-120 flex flex-col gap-3">
        <Header />
        <Hero
          label="First name"
          onChangeData={onChangeData}
          name="firstName"
          value={nameData.firstName}
          ref={ref}
        />
        {error && <p className="text-red-500">{error}</p>}
        <Hero
          label="Last name"
          onChangeData={onChangeData}
          name="lastName"
          value={nameData.lastName}
          ref={ref}
        />
        {error && <p className="text-red-500">{error}</p>}
        <Hero
          label="User name"
          onChangeData={onChangeData}
          name="userName"
          value={nameData.userName}
          ref={ref}
        />
        {error && <p className="text-red-500">{error}</p>}
        <Buttons validForm={validForm} />
      </main>
    </div>
  );
}

const Hero = ({
  label,
  placeholder = "Placeholder",
  onChangeData,
  name,
  value,
  ref,
}) => {
  const inputClass = `text-xl mt-2 w-full rounded-md border bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 outline-none`;

  return (
    <div>
      <label className="block text-xl font-semibold text-gray-600">
        {label} <span className="text-red-500">*</span>
      </label>

      <input
        name={name}
        onChange={onChangeData}
        placeholder={placeholder}
        className={inputClass}
        value={value}
        ref={ref}
      />
    </div>
  );
};

const Buttons = ({ validForm }) => {
  return (
    <button
      onClick={validForm}
      type="submit"
      className="mt-30 w-full rounded-md py-4 text-l font-semibold shadow-sm transition text-white bg-black"
    >
      <span className="inline-flex items-center justify-center gap-2">
        Continue 1/3 <span className="text-lg leading-none">›</span>
      </span>
    </button>
  );
};

const Header = () => {
  return (
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
        <h1 className="mt-4 text-2xl font-extrabold text-gray-900">
          Join Us! <span className="align-middle">😎</span>
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          Please provide all current information accurately.
        </p>
      </div>
    </div>
  );
};
