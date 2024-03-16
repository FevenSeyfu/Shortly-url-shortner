import React from "react";

const ShortnerForm: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row  bg-primary-dark-violet bg-[url('../src/assets/images/bg-shorten-mobile.svg')] md:bg-[url('../src/assets/images/bg-shorten-desktop.svg')] bg-no-repeat bg-right-top  w-[90%] h-[10rem] p-4 px-6 md:py-4 md:px-8 justify-evenly md:items-center gap-4 rounded-md relative top-[-5rem] md:h-[8rem] md:top-[-4rem]">
      <input type="text" placeholder="Shorten a link here..." className="p-3 rounded-md text-lg text-neutral-gray md:w-[75%]" />

      <button className="w-full rounded-lg font-bold  text-xl py-3  md:w-[20%] md:text-lg">
        Shorten It!
      </button>
    </div>
  );
};

export default ShortnerForm;
