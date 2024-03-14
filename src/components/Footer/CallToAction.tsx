import React from "react";

const CallToAction: React.FC = () => {
  return (
    <div className="bg-primary-dark-violet bg-[url('../src/assets/images/bg-boost-mobile.svg')] md:bg-[url('../src/assets/images/bg-boost-desktop.svg')] h-[18rem] md:h-[15rem]  w-full bg-no-repeat bg-cover text-white flex flex-col items-center justify-center gap-8">
      <h3 className="font-bold text-3xl md:text-5xl">Boost your links today</h3>
      <button className="bg-primary-cyan text-white font-bold rounded-full px-8 py-4 hover:bg-primary-light-cyan text-lg">Get Started</button>
    </div>
  );
};

export default CallToAction;
