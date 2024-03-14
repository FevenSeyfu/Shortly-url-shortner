import React from "react";
import BrandIcon from '../assets/images/icon-brand-recognition.svg';
import RecordsIcon from '../assets/images/icon-detailed-records.svg';
import CustomizableIcon from '../assets/images/icon-fully-customizable.svg'

const AdvancedStatistics: React.FC = () => {
  return (
    <div>
      <h2> Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div id="stat-card">
        <img src={BrandIcon} alt="Brand Icon" />
        <h3>Brand Recognition</h3>
        Boost your brand recognition with each click. Generic links don’t mean a
        thing. Branded links help instil confidence in your content.
      </div>
      <div id="stat-card">
        <img src={RecordsIcon} alt="Records Icon" />
        <h3>Detailed Records</h3>
        <p>
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </div>
      <div id="stat-card">
        <img src={CustomizableIcon} alt="Customizable Icon" />
        <h3>Fully Customizable</h3>
        <p>
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </div>
    </div>
  );
};

export default AdvancedStatistics;
