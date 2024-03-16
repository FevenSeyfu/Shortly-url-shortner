import React from "react";
import Logo from "../../assets/images/logo_white.svg";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import PinterestIcon from "../../assets/icons/PinterestIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";

const SiteMap: React.FC = () => {
  return (
    <>
      <div className=" bg-neutral-very-dark-blue text-center text-white flex flex-col h-screen w-full  items-center justify-evenly text-sm relative md:flex-row md:justify-center md:items-start md:h-auto md:text-base md:py-8">
        <div className="md:w-2/4 flex justify-center">
          <img src={Logo} alt="Shortly Logo" />
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:justify-evenly md:w-3/4">
          <ul className="flex flex-col gap-2 md:text-left">
            <li>
              <h4 className="font-bold text-lg  mb-1 md:text-xl md:mb-4">
                Features
              </h4>
            </li>
            <li>
              <a href="#" className="text-neutral-gray">
                Link Shortening
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-gray">
                Branded Links
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-gray">
                Analytics
              </a>
            </li>
          </ul>
          <ul className=" flex flex-col gap-2 md:text-left">
            <li>
              <h4 className="font-bold text-lg  mb-1 md:text-xl md:mb-4">
                Resources
              </h4>
            </li>
            <li>
              <a href="#" className="text-neutral-gray">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-gray">
                Developers
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-gray">
                Support
              </a>
            </li>
          </ul>
          <ul className=" flex  flex-col gap-2 md:text-left">
            <li>
              <h4 className="font-bold text-lg  mb-1 md:text-xl md:mb-4">
                Company
              </h4>
            </li>
            <li>
              <a href="#" className="text-neutral-gray">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-gray">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-gray">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-gray">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <ul
          id="social-links"
          className="flex flex-row w-[75%] justify-evenly items-center md:w-[40%]"
        >
          <li>
            <a href="#">
              <FacebookIcon className="text-white hover:text-primary-cyan" />
            </a>
          </li>
          <li>
            <a href="#">
              <TwitterIcon  className="text-white hover:text-primary-cyan" />
            </a>
          </li>
          <li>
            <a href="#">
              <PinterestIcon  className="text-white hover:text-primary-cyan" />
            </a>
          </li>
          <li>
            <a href="#">
              <InstagramIcon className="text-white hover:text-primary-cyan" />
            </a>
          </li>
        </ul>
      </div>
      
    </>
  );
};

export default SiteMap;
