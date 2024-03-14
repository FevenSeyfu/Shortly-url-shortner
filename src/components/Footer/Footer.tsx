import React from "react";
import SiteMap from "./SiteMap";
import CallToAction from "./CallToAction";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-auto">
      <CallToAction />
      <SiteMap />
    </footer>
  );
};

export default Footer;
