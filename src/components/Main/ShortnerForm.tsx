import React, { useState } from "react";
import Result from "./Result";
import axios from "axios";

const ErrorMessage = () => {
  return (
    <p className="text-secondary-red italic text-sm md:py-1 pb-1">
      Please add a link
    </p>
  );
};

const ShortnerForm: React.FC = () => {
  const [shortlyInput, setShortlyInput] = useState({
    url: "",
    isTouched: false,
  });
  const postData = async (url: string) => {
    try {
      const response = await axios.post(
        'https://api-ssl.bitly.com/v4/shorten',
        `url=${encodeURIComponent(url)}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    postData(shortlyInput.url)
    setShortlyInput({ url: "", isTouched: false });
  };
  const getIsInputValid = () => {
    return shortlyInput.url.trim() !== "";
  };

  return (
    <div className="relative top-[-5rem] md:top-[-4rem] w-[90%] flex flex-col gap-6 md:gap-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row  bg-primary-dark-violet bg-[url('../src/assets/images/bg-shorten-mobile.svg')] md:bg-[url('../src/assets/images/bg-shorten-desktop.svg')] bg-no-repeat bg-right-top   h-[10rem] p-6 md:py-4 md:px-8 justify-evenly md:items-center md:gap-4 rounded-md  md:h-[8rem] "
      >
        <div className="flex flex-col md:w-[75%]">
          <input
            type="text"
            placeholder="Shorten a link here..."
            className={`p-3 rounded-md text-lg text-neutral-very-dark-blue ${
              shortlyInput.isTouched &&
              !getIsInputValid() &&
              "focus:outline-secondary-red border-2 border-secondary-red text-secondary-red placeholder:text-secondary-red md:mt-6 text-lg"
            }`}
            value={shortlyInput.url}
            onChange={(e) =>
              setShortlyInput({ url: e.target.value, isTouched: true })
            }
          />
          {shortlyInput.isTouched && !getIsInputValid() && <ErrorMessage />}
        </div>
        <button
          className="bg-primary-cyan w-full rounded-lg font-bold  text-xl py-3  md:w-[20%] md:text-lg"
          type="submit"
          disabled={!getIsInputValid()}
        >
          Shorten It!
        </button>
      </form>
      {shortlyInput.url !== "" && <Result />}
    </div>
  );
};

export default ShortnerForm;
