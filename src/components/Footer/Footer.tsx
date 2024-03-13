import React from "react";
import SiteMap from "./SiteMap";
import CallToAction from "./CallToAction";

const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 w-full ">
      <CallToAction />
      <SiteMap />
    </footer>
  );
};

export default Footer;
