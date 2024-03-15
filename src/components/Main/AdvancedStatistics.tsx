import React from "react";
import BrandIcon from "../../assets/images/icon-brand-recognition.svg";
import RecordsIcon from "../../assets/images/icon-detailed-records.svg";
import CustomizableIcon from "../../assets/images/icon-fully-customizable.svg";

const AdvancedStatistics: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 items-center p-24">
      <h2 className="font-bold text-2xl md:text-4xl"> Advanced Statistics</h2>
      <p className="w-[30rem] text-center text-sm text-neutral-very-dark-blue">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="flex flex-row w-[80%] gap-8 justify-evenly items-center mt-8 relative">
        <hr className="absolute top-[50%] h-4 w-full text-primary-cyan"/>
        <div id="stat-card" className="flex flex-col bg-white rounded-xl p-8 gap-4 relative ">
          <div className="bg-neutral-very-dark-blue rounded-full w-16 h-16 flex justify-center items-center absolute top-[-2rem]">
            <img src={BrandIcon} alt="Brand Icon" className="h-10 w-10" />
          </div>
          <h3 className="font-bold text-lg md:text-xl mt-4">Brand Recognition</h3>
          <p className="text-sm text-neutral-very-dark-blue">Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.</p>
        </div>
        {/*  */}
        <div id="stat-card" className="flex flex-col bg-white rounded-xl p-8 gap-4 relative mt-12">
          <div className="bg-neutral-very-dark-blue rounded-full w-16 h-16 flex justify-center items-center absolute top-[-2rem]">
            <img src={RecordsIcon} alt="Brand Icon" className="h-10 w-10" />
          </div>
          <h3 className="font-bold text-lg md:text-xl mt-4">Detailed Records</h3>
          <p className="text-sm text-neutral-very-dark-blue">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        {/*  */}
        <div id="stat-card" className="flex flex-col bg-white rounded-xl p-8 gap-4 relative mt-24 ">
          <div className="bg-neutral-very-dark-blue rounded-full w-16 h-16 flex justify-center items-center absolute top-[-2rem]">
            <img src={CustomizableIcon} alt="Brand Icon" className="h-10 w-10" />
          </div>
          <h3 className="font-bold text-lg md:text-xl mt-4">Fully Customizable</h3>
          <p className="text-sm text-neutral-very-dark-blue">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedStatistics;
