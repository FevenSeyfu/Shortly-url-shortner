import React, { useState } from "react";
import Result from "./Result";
import axios from "axios";

interface ShortnerFormProps {
  onAddUrl: (newUrl: { id: number; longUrl: string; shortUrl: string }) => void;
}

const ErrorMessage = () => {
  return (
    <p className="text-secondary-red italic text-sm md:py-1 pb-1">
      Please add a link
    </p>
  );
};

const ShortnerForm: React.FC<ShortnerFormProps> = ({ onAddUrl }) => {
  const [longUrl, setLongUrl] = useState('');

  const shorten = async (url: string) => {
    const endpoint = 'https://api.rebrandly.com/v1/links';
    const linkRequest = {
      destination: url,
      domain: { fullName: 'rebrand.ly' },
    };

    try {
      const apiResponse = await axios.post(endpoint, linkRequest, {
        headers: {
          'Content-Type': 'application/json',
          'apikey': '4e414a98d2324c4a9bb3f3d196060a21'
        }
      });

      const link = apiResponse.data;
      onAddUrl({ id: url.length + 1, longUrl: url, shortUrl: link.shortUrl });
    
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    await shorten(`https://www.${longUrl}`);
    setLongUrl('');
  };
  const getIsInputValid = () => {
    return longUrl.trim() !== "";
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
              !getIsInputValid() &&
              "focus:outline-secondary-red border-2 border-secondary-red text-secondary-red placeholder:text-secondary-red md:mt-6 text-lg"
            }`}
            value={longUrl}
            onChange={(e) =>
              setLongUrl(e.target.value)
            }
          />
          {!getIsInputValid() && <ErrorMessage />}
        </div>
        <button
          className="bg-primary-cyan w-full rounded-lg font-bold  text-xl py-3  md:w-[20%] md:text-lg"
          type="submit"
          disabled={!getIsInputValid()}
        >
          Shorten It!
        </button>
      </form>
    </div>
  );
};

export default ShortnerForm;
