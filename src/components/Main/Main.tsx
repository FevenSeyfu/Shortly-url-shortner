import { useState } from "react"
import ShortnerForm from "./ShortnerForm"
import Result from "./Result";

interface Url {
  id: number;
  longUrl: string;
  shortUrl: string;
}

const Main: React.FC = () => {
  const [urls, setUrls] = useState<Url[]>([]);

  const handleAddUrl = (newUrl: Url) => {
    setUrls([...urls, newUrl]);
  };

  return (
    <main className="bg-neutral-gray w-full h-full flex flex-col items-center mt-12 pb-12 ">
      <ShortnerForm onAddUrl={handleAddUrl} />
      <Result urls={urls}/>
    </main>
  );
};

export default Main;