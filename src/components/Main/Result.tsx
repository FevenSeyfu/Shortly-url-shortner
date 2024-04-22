import React, { useState } from "react";

interface Url {
  id: number;
  longUrl: string;
  shortUrl: string;
}

interface ResultProps {
  urls: Url[];
}


const Result: React.FC<ResultProps> = ({ urls }) => {

  const [copied, setCopied] = useState(false);
  const handleCopy = () => setCopied(!copied);
  return (
    <>
      <ul className="flex flex-col gap-6 md:gap-4">
      {urls.map((url) => (
        <li className="bg-white rounded-md flex flex-col items-start  md:flex-row md:justify-between md:items-center text-lg font-medium" key={url.id}>
          <div
            id="input-url"
            className="border-b border-neutral-grayish-violet w-full flex md:border-none md:w-[50%] md:flex-wrap"
          >
            <p className="p-6 text-black md:p-4">{url.longUrl}</p>
          </div>
          <div
            id="result"
            className="p-6 w-full flex gap-2 flex-col md:p-4 md:flex-row md:items-center md:justify-end md-w-[50%]"
          >
            <p className="text-primary-cyan">{url.shortUrl}</p>
            <button 
            className={`w-full rounded-md py-2 px-4 md:w-auto ${copied && ('bg-primary-dark-violet hover:bg-gray-800') }`}
            onClick={handleCopy}>
                {copied? 'Copied!': 'Copy'}
            </button>
          </div>
        </li>
         ))}
      </ul>
    </>
  );
};

export default Result;
