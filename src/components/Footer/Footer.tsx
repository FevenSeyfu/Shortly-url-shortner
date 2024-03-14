import React from "react";
import SiteMap from "./SiteMap";
import CallToAction from "./CallToAction";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-auto md:absolute md:bottom-0 ">
      <CallToAction />
      <SiteMap />
    </footer>
  );
};

export default Footer;
