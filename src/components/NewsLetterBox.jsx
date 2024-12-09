import React from "react";

export default function NewsLetterBox() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Berlangganan dan dapatkan diskon 20%
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 items-center flex gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full flex-1 outline-none"
          type="email"
          placeholder="Masukan Email Anda"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          BERLANGGANAN
        </button>
      </form>
    </div>
  );
}
