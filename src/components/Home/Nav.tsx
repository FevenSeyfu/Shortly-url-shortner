import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import { IoMenu } from "react-icons/io5";
import Modal from "react-modal";
Modal.setAppElement("#root");

const Nav: React.FC = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-full flex flex-row justify-between items-center px-8 py-4 md:px-24 md:py-6">
      {/* Logo */}
      <div className="md:w-[10%]">
        <img src={Logo} alt="Shortly Logo " />
      </div>
      {/* Menu */}
      <nav className="hidden w-[85%] md:flex flex-row items-center justify-between">
        <div className="flex flex-row gap-8">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
        <div className="flex flex-row items-center gap-4">
          <a href="#">Login</a>
          <button className="bg-primary-cyan text-white font-bold rounded-full py-3 px-6 hover:bg-primary-light-cyan text-lg">
            Sign Up
          </button>
        </div>
      </nav>
      {/* Hambuger */}
      <div onClick={handleClick} className="md:hidden z-10">
        <IoMenu size={30} />
      </div>
      {/* Mobile menu */}
      <Modal
        isOpen={true}
        contentLabel="Mobile Menu"
        className={
          !nav
            ? "hidden"
            : "fixed top-16 left-0 w-full h-full flex justify-center"
        }
        overlayClassName={
          !nav
            ? "hidden"
            : "fixed top-0 left-0 w-full h-full  flex justify-center items-center"
        }
      >
        <ul className="absolute w-[90%] h-auto flex flex-col justify-center items-center rounded-lg gap-8  text-2xl font-bold bg-primary-dark-violet text-white py-10">
          <li className="hover:text-neutral-grayish-blue">
            <a href="#">Features</a>
          </li>
          <li className="hover:text-neutral-grayish-blue">
            <a href="#">Pricing</a>
          </li>
          <li className="hover:text-neutral-grayish-blue">
            <a href="#">Resources</a>
          </li>
          <hr className="w-[80%] my-4"/>
          <li className="hover:text-neutral-grayish-blue">
            <a href="#">Login</a>
          </li>
          <li className="hover:text-neutral-grayish-blue">
            {" "}
            <button className="bg-primary-cyan text-white font-bold rounded-full py-3 px-24 hover:bg-primary-light-cyan text-2xl">
              Sign Up
            </button>
          </li>
        </ul>
      </Modal>
    </div>
  );
};

export default Nav;
