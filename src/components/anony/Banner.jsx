import React from "react";

export default function Banner() {
  return (
    <div className="bg-banner border-b border-black">
      <div className="size py-[5rem] flex flex-col items-start gap-[1rem]">
        <h1 className="text-[3rem] sm:text-[4rem] md:text-[6rem] font-bold">Stay curious</h1>
        <p className="w-full md:w-[31rem] text-[1.3rem] md:text-[1.5rem] font-medium leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend dignissim erat ut
          consequat.
        </p>
        <button className="btn bg-black1 rounded-full text-white selection:font-light !text-[1.2rem] !px-6 !mt-[2.5rem]">
          Start Reading
        </button>
      </div>
    </div>
  );
}
